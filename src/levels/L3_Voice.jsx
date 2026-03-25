import { useEffect, useRef, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/GameContext'

const TARGET_PHRASE    = 'i love you akanksha'
const PARTIAL_PHRASE   = 'i love you'
const MAX_ATTEMPTS     = 8
function Stars() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {Array.from({ length: 35 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 2, height: 2,
            borderRadius: '50%',
            background: i % 5 === 0 ? '#E8527A' : 'white',
            opacity: Math.random() * 0.4 + 0.1,
            animation: `starTwinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  )
}
function normalise(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function checkPhrase(transcript) {
  const t = normalise(transcript)
  if (t.includes(TARGET_PHRASE)) return 'correct'
  if (t.includes(PARTIAL_PHRASE)) return 'partial'
  return 'wrong'
}

export default function L3_Voice() {
  const navigate = useNavigate()
  const { unlock } = useGame()

  const recognitionRef = useRef(null)
  const animFrameRef   = useRef(null)
  const analyserRef    = useRef(null)
  const audioCtxRef    = useRef(null)
  const waveCanvasRef  = useRef(null)
  const streamRef      = useRef(null)

  const [status, setStatus]       = useState('idle')    // idle | listening | success | unsupported
  const [message, setMessage]     = useState('')
  const [attempts, setAttempts]   = useState(0)
  const [transcript, setTranscript] = useState('')
  const [micActive, setMicActive] = useState(false)

  // ── Waveform visualiser ───────────────────────────────────────────
  const startWaveform = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      const ctx   = new (window.AudioContext || window.webkitAudioContext)()
      const src   = ctx.createMediaStreamSource(stream)
      const analyser = ctx.createAnalyser()
      analyser.fftSize = 128
      src.connect(analyser)
      audioCtxRef.current  = ctx
      analyserRef.current  = analyser

      const canvas = waveCanvasRef.current
      if (!canvas) return
      const cCtx = canvas.getContext('2d')
      const bufLen = analyser.frequencyBinCount
      const dataArr = new Uint8Array(bufLen)

      const draw = () => {
        animFrameRef.current = requestAnimationFrame(draw)
        analyser.getByteFrequencyData(dataArr)
        cCtx.clearRect(0, 0, canvas.width, canvas.height)

        const barW  = (canvas.width / bufLen) * 2.2
        let x = 0
        for (let i = 0; i < bufLen; i++) {
          const barH = (dataArr[i] / 255) * canvas.height * 0.85
          const alpha = 0.5 + (dataArr[i] / 255) * 0.5
          cCtx.fillStyle = `rgba(245,197,24,${alpha})`
          cCtx.fillRect(x, canvas.height - barH, barW, barH)
          // Mirror top half
          cCtx.fillStyle = `rgba(232,82,122,${alpha * 0.35})`
          cCtx.fillRect(x, 0, barW, barH * 0.3)
          x += barW + 1
        }
      }
      draw()
    } catch {
      // microphone denied — recognition still works, just no visualiser
    }
  }, [])

  const stopWaveform = useCallback(() => {
    cancelAnimationFrame(animFrameRef.current)
    audioCtxRef.current?.close()
    streamRef.current?.getTracks().forEach(t => t.stop())
    const canvas = waveCanvasRef.current
    if (canvas) canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
  }, [])

  // ── Speech recognition ────────────────────────────────────────────
  const startListening = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) { setStatus('unsupported'); return }

    const rec = new SpeechRecognition()
    rec.lang          = 'en-IN'          // Indian English — better accent match
    rec.continuous    = false
    rec.interimResults = true
    rec.maxAlternatives = 3

    rec.onstart = () => {
      setStatus('listening')
      setMicActive(true)
      setTranscript('')
      setMessage('')
      startWaveform()
    }

    rec.onresult = (e) => {
      let interim = ''
      let final   = ''
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript
        if (e.results[i].isFinal) final += t
        else interim += t
      }
      setTranscript(final || interim)

      if (final) {
        // Check all alternatives too
        let bestResult = 'wrong'
        for (let i = e.resultIndex; i < e.results.length; i++) {
          if (e.results[i].isFinal) {
            for (let j = 0; j < e.results[i].length; j++) {
              const check = checkPhrase(e.results[i][j].transcript)
              if (check === 'correct') { bestResult = 'correct'; break }
              if (check === 'partial' && bestResult !== 'correct') bestResult = 'partial'
            }
          }
        }

        if (bestResult === 'correct') {
          setStatus('success')
          setMessage('💛 There it is.')
          stopWaveform()
          setTimeout(() => { unlock(3); navigate('/memories') }, 1400)
        } else if (bestResult === 'partial') {
          setMessage("Hmm, don't I have a name? 🙄")
          setStatus('idle')
          setMicActive(false)
          stopWaveform()
          setAttempts(a => a + 1)
        } else {
          setAttempts(a => {
            const next = a + 1
            if (next >= MAX_ATTEMPTS) {
              setMessage("Okay you're clearly not trying 😭 say: I love you, Akanksha")
            } else {
              setMessage("That's not it, try again 💛")
            }
            return next
          })
          setStatus('idle')
          setMicActive(false)
          stopWaveform()
        }
      }
    }

    rec.onerror = (e) => {
      if (e.error === 'no-speech') {
        setMessage('I didn\'t catch that — try again 💛')
      } else if (e.error === 'not-allowed') {
        setMessage('Microphone access needed 🎤')
      }
      setStatus('idle')
      setMicActive(false)
      stopWaveform()
    }

    rec.onend = () => {
      if (status !== 'success') {
        setMicActive(false)
      }
    }

    recognitionRef.current = rec
    rec.start()
  }, [startWaveform, stopWaveform, unlock, navigate, status])

  useEffect(() => {
    return () => {
      recognitionRef.current?.abort()
      stopWaveform()
    }
  }, [stopWaveform])

  const isSuccess    = status === 'success'
  const isListening  = status === 'listening'
  const isUnsupported = status === 'unsupported'

  // Fun roast messages based on attempt count
  const roastForAttempts = (n) => {
    if (n === 0) return ''
    if (n === 1) return 'Give it another go 💛'
    if (n === 2) return 'You say it all the time — this should be easy 😌'
    if (n === 3) return 'Three tries and still shy? 🥺'
    if (n === 4) return 'Rithvik. You literally say this daily. Come on.'
    if (n === 5) return 'I know you know this one 💛'
    return 'The words are: I love you, Akanksha. Simple.'
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at 50% 40%, #12001A 0%, #060008 70%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        overflow: 'hidden',
      }}
    >
      <Stars />

      {/* Badge */}
      <div style={{ marginBottom: '1.5rem', animation: 'fadeUp 0.7s ease both', position: 'relative', zIndex: 2 }}>
        <span className="badge" style={{ color: '#E8527A', borderColor: 'rgba(232,82,122,0.3)' }}>
          Level 3 — voice unlock
        </span>
      </div>

      {/* Heading */}
      <h2
        style={{
          fontFamily: 'Playfair Display',
          fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)',
          color: '#FDFAF2',
          textAlign: 'center',
          maxWidth: 520,
          lineHeight: 1.3,
          marginBottom: '0.6rem',
          animation: 'fadeUp 0.7s 0.1s ease both',
          position: 'relative',
          zIndex: 2,
        }}
      >
        Say what you know I love hearing<br />
        from you the most{' '}
        <span style={{ color: '#F5C518' }}>💛</span>
      </h2>

      <p
        style={{
          fontFamily: 'Caveat',
          fontSize: '1.05rem',
          color: 'rgba(253,250,242,0.35)',
          marginBottom: '2.5rem',
          textAlign: 'center',
          animation: 'fadeUp 0.7s 0.2s ease both',
          position: 'relative',
          zIndex: 2,
        }}
      >
        speak clearly into your mic
      </p>

      {/* Mic button + waveform */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          animation: 'fadeUp 0.8s 0.3s ease both',
          width: '100%',
          maxWidth: 480,
        }}
      >
        {/* Waveform canvas */}
        <div
          style={{
            width: '100%',
            height: 72,
            borderRadius: 12,
            background: 'rgba(245,197,24,0.04)',
            border: '1px solid rgba(245,197,24,0.1)',
            overflow: 'hidden',
            opacity: isListening ? 1 : 0.3,
            transition: 'opacity 0.4s',
          }}
        >
          <canvas
            ref={waveCanvasRef}
            width={480}
            height={72}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Mic button */}
        <button
          onClick={!isListening && !isSuccess ? startListening : undefined}
          disabled={isListening || isSuccess || isUnsupported}
          style={{
            width: 88,
            height: 88,
            borderRadius: '50%',
            background: isSuccess
              ? '#F5C518'
              : isListening
              ? 'rgba(232,82,122,0.2)'
              : 'rgba(245,197,24,0.1)',
            border: isListening
              ? '2px solid #E8527A'
              : isSuccess
              ? '2px solid #F5C518'
              : '2px solid rgba(245,197,24,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.2rem',
            transition: 'all 0.25s',
            animation: isListening
              ? 'pulseGlow 1s ease-in-out infinite'
              : 'none',
            boxShadow: isListening
              ? '0 0 30px rgba(232,82,122,0.4)'
              : isSuccess
              ? '0 0 30px rgba(245,197,24,0.5)'
              : 'none',
          }}
          onMouseEnter={e => {
            if (!isListening && !isSuccess) {
              e.currentTarget.style.background = 'rgba(245,197,24,0.18)'
              e.currentTarget.style.transform = 'scale(1.06)'
            }
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = isListening ? 'rgba(232,82,122,0.2)' : 'rgba(245,197,24,0.1)'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          {isSuccess ? '💛' : isListening ? '🎙️' : '🎤'}
        </button>

        <p
          style={{
            fontFamily: 'DM Sans',
            fontSize: '0.85rem',
            color: 'rgba(253,250,242,0.3)',
            letterSpacing: '0.06em',
          }}
        >
          {isListening ? 'listening…' : isSuccess ? 'unlocked ✦' : 'tap to speak'}
        </p>
      </div>

      {/* Live transcript */}
      {transcript && !isSuccess && (
        <div
          style={{
            marginTop: '1.5rem',
            padding: '10px 20px',
            borderRadius: 10,
            background: 'rgba(245,197,24,0.06)',
            border: '1px solid rgba(245,197,24,0.15)',
            fontFamily: 'Caveat',
            fontSize: '1.2rem',
            color: 'rgba(253,250,242,0.6)',
            textAlign: 'center',
            maxWidth: 400,
            position: 'relative',
            zIndex: 2,
            animation: 'fadeIn 0.3s ease',
          }}
        >
          "{transcript}"
        </div>
      )}

      {/* Feedback message */}
      <div style={{ minHeight: '2.5rem', marginTop: '1rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        {message && (
          <p
            style={{
              fontFamily: 'Caveat',
              fontSize: '1.2rem',
              color: isSuccess ? '#F5C518' : message.includes('name') ? '#E8527A' : 'rgba(253,250,242,0.6)',
              animation: 'fadeUp 0.4s ease both',
            }}
          >
            {message}
          </p>
        )}
        {!message && attempts > 0 && !isListening && (
          <p
            style={{
              fontFamily: 'Caveat',
              fontSize: '1.1rem',
              color: 'rgba(253,250,242,0.35)',
              animation: 'fadeIn 0.4s ease',
            }}
          >
            {roastForAttempts(attempts)}
          </p>
        )}
        {isUnsupported && (
          <p style={{ fontFamily: 'Caveat', fontSize: '1.1rem', color: '#E8527A' }}>
            Voice recognition needs Chrome or Edge 🎤
          </p>
        )}
      </div>
    </div>
  )
}
