import { useEffect, useRef, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/GameContext'

// ─────────────────────────────────────────────────────────────────
//  V SIGN DETECTION
//
//  One hand. Index and middle fingers extended upward (V/peace sign).
//  Ring and pinky fingers curled down. Thumb can be anything.
//
//  Detection:
//  1. At least one hand detected
//  2. Index fingertip (8) is above index base (5) by a good margin
//  3. Middle fingertip (12) is above middle base (9) by a good margin
//  4. Ring fingertip (16) is BELOW ring base (13) — curled
//  5. Pinky fingertip (20) is BELOW pinky base (17) — curled
//  6. Hold for 2 seconds
//
//  Success message: "life with you feels like victory and peace"
// ─────────────────────────────────────────────────────────────────

const HOLD_MS = 2000

export default function L2_Gesture() {
  const navigate   = useNavigate()
  const { unlock } = useGame()

  const videoRef   = useRef(null)
  const overlayRef = useRef(null)
  const handsRef   = useRef(null)
  const cameraRef  = useRef(null)
  const holdStart  = useRef(null)

  const [status, setStatus]   = useState('loading')
  const [holdPct, setHoldPct] = useState(0)
  const [message, setMessage] = useState('')
  const [loaded, setLoaded]   = useState(false)

  // ── Load MediaPipe scripts ────────────────────────────────────
  useEffect(() => {
    const urls = [
      'https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js',
      'https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js',
      'https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js',
    ]
    let done = 0
    const onLoad = () => { done++; if (done === urls.length) setLoaded(true) }
    urls.forEach(src => {
      if (document.querySelector(`script[src="${src}"]`)) { onLoad(); return }
      const s = document.createElement('script')
      s.src = src; s.crossOrigin = 'anonymous'
      s.onload = onLoad
      s.onerror = () => setStatus('error')
      document.head.appendChild(s)
    })
  }, [])

  // ── V sign detection ──────────────────────────────────────────
  // Returns true if any detected hand shows a V/peace sign
  const isVSign = useCallback((results) => {
    if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) return false

    for (const hand of results.multiHandLandmarks) {
      // Finger tip and base landmarks
      const indexTip  = hand[8],  indexBase  = hand[5]
      const middleTip = hand[12], middleBase = hand[9]
      const ringTip   = hand[16], ringBase   = hand[13]
      const pinkyTip  = hand[20], pinkyBase  = hand[17]

      // y increases downward in MediaPipe normalised coords
      // "above" means smaller y value
      const indexUp  = indexTip.y  < indexBase.y  - 0.08  // index extended up
      const middleUp = middleTip.y < middleBase.y - 0.08  // middle extended up
      const ringDown = ringTip.y   > ringBase.y   - 0.02  // ring curled
      const pinkyDown = pinkyTip.y > pinkyBase.y  - 0.02  // pinky curled

      if (indexUp && middleUp && ringDown && pinkyDown) return true
    }
    return false
  }, [])

  // ── Draw skeleton ─────────────────────────────────────────────
  const drawSkeleton = useCallback((results) => {
    const canvas = overlayRef.current
    if (!canvas || !results.multiHandLandmarks) return
    const ctx = canvas.getContext('2d')
    canvas.width  = videoRef.current?.videoWidth  || 640
    canvas.height = videoRef.current?.videoHeight || 480
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const connections = [
      [0,1],[1,2],[2,3],[3,4],
      [0,5],[5,6],[6,7],[7,8],
      [0,9],[9,10],[10,11],[11,12],
      [0,13],[13,14],[14,15],[15,16],
      [0,17],[17,18],[18,19],[19,20],
      [5,9],[9,13],[13,17],
    ]

    results.multiHandLandmarks.forEach(landmarks => {
      ctx.strokeStyle = 'rgba(245,197,24,0.6)'
      ctx.lineWidth   = 2
      connections.forEach(([a, b]) => {
        ctx.beginPath()
        ctx.moveTo(landmarks[a].x * canvas.width, landmarks[a].y * canvas.height)
        ctx.lineTo(landmarks[b].x * canvas.width, landmarks[b].y * canvas.height)
        ctx.stroke()
      })
      landmarks.forEach(lm => {
        ctx.beginPath()
        ctx.arc(lm.x * canvas.width, lm.y * canvas.height, 4.5, 0, Math.PI * 2)
        ctx.fillStyle = '#F5C518'
        ctx.shadowColor = '#F5C518'; ctx.shadowBlur = 7
        ctx.fill(); ctx.shadowBlur = 0
      })
    })
  }, [])

  // ── Init MediaPipe ────────────────────────────────────────────
  useEffect(() => {
    if (!loaded) return
    const Hands  = window.Hands
    const Camera = window.Camera
    if (!Hands || !Camera) { setStatus('error'); return }

    const hands = new Hands({
      locateFile: f => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${f}`,
    })
    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.6,
      minTrackingConfidence: 0.5,
    })

    hands.onResults(results => {
      drawSkeleton(results)
      const detected = isVSign(results)

      if (detected) {
        if (!holdStart.current) holdStart.current = Date.now()
        const elapsed = Date.now() - holdStart.current
        const pct = Math.min((elapsed / HOLD_MS) * 100, 100)
        setHoldPct(pct)
        setStatus('holding')
        setMessage('')
        if (elapsed >= HOLD_MS) {
          setStatus('success')
          setHoldPct(100)
          cameraRef.current?.stop()
          hands.close()
          setTimeout(() => { unlock(2); navigate('/voice') }, 1400)
        }
      } else {
        if (holdStart.current) {
          setMessage('Almost… try again, Chinnayya 😅')
          holdStart.current = null
          setHoldPct(0)
        }
        setStatus('detecting')
      }
    })

    handsRef.current = hands
    const cam = new Camera(videoRef.current, {
      onFrame: async () => {
        if (handsRef.current) await handsRef.current.send({ image: videoRef.current })
      },
      width: 640, height: 480,
    })
    cam.start()
      .then(() => setStatus('detecting'))
      .catch(() => setStatus('error'))
    cameraRef.current = cam

    return () => { cam.stop(); hands.close() }
  }, [loaded, isVSign, drawSkeleton, unlock, navigate])

  const statusText = {
    loading:   'Loading camera…',
    detecting: 'Show me a ✌️ — hold it for 2 seconds',
    holding:   'Hold it… ✌️',
    success:   'life with you feels like victory and peace 💛',
    error:     'Camera access needed — please allow it and refresh',
  }

  return (
    <div style={{
      width: '100%', minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 40%, #001A10 0%, #060D08 70%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '2rem', position: 'relative', overflow: 'hidden',
    }}>
      <Stars />

      <div style={{ marginBottom: '1.2rem', animation: 'fadeUp 0.7s ease both', position: 'relative', zIndex: 2 }}>
        <span className="badge">Level 2 — gesture unlock</span>
      </div>

      <h2 style={{
        fontFamily: 'Playfair Display', fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
        color: '#F5C518', marginBottom: '0.4rem', textAlign: 'center',
        animation: 'fadeUp 0.7s 0.1s ease both', position: 'relative', zIndex: 2,
      }}>
        Make a shape with your hands
      </h2>

      {/* How-to */}
      <div style={{
        background: 'rgba(245,197,24,0.06)', border: '1px solid rgba(245,197,24,0.15)',
        borderRadius: 10, padding: '10px 24px', marginBottom: '1.5rem',
        maxWidth: 440, position: 'relative', zIndex: 2,
        animation: 'fadeUp 0.7s 0.15s ease both', textAlign: 'center',
      }}>
        <p style={{ fontFamily: 'Caveat', fontSize: '1.05rem', color: 'rgba(245,197,24,0.75)', lineHeight: 1.7 }}>
          ✌️ Hold up a V sign / peace sign<br />
          Index + middle fingers up, others curled<br />
          Hold steady for 2 seconds
        </p>
      </div>

      {/* Camera box */}
      <div style={{
        position: 'relative', width: '100%', maxWidth: 500,
        aspectRatio: '4/3', borderRadius: 16, overflow: 'hidden',
        border: status === 'holding' || status === 'success'
          ? '2px solid rgba(245,197,24,0.8)'
          : '1.5px solid rgba(245,197,24,0.2)',
        boxShadow: status === 'success' ? '0 0 50px rgba(245,197,24,0.35)'
          : status === 'holding' ? '0 0 30px rgba(245,197,24,0.2)' : 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        animation: 'fadeUp 0.8s 0.2s ease both', zIndex: 2,
      }}>
        <video ref={videoRef} autoPlay playsInline muted
          style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)', display: 'block' }} />
        <canvas ref={overlayRef}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', transform: 'scaleX(-1)', pointerEvents: 'none' }} />

        {status === 'loading' && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,13,8,0.85)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, border: '3px solid rgba(245,197,24,0.2)', borderTop: '3px solid #F5C518', borderRadius: '50%', animation: 'spinSlow 0.8s linear infinite' }} />
            <p style={{ fontFamily: 'DM Sans', fontSize: '0.9rem', color: 'rgba(245,197,24,0.6)' }}>Starting camera…</p>
          </div>
        )}

        {status === 'success' && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(245,197,24,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeIn 0.4s ease' }}>
            <span style={{ fontSize: '4rem', animation: 'scaleIn 0.4s ease' }}>✌️</span>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div style={{
        width: '100%', maxWidth: 500, marginTop: '0.75rem', height: 5,
        borderRadius: 99, background: 'rgba(245,197,24,0.1)', overflow: 'hidden',
        opacity: status === 'holding' || status === 'success' ? 1 : 0,
        transition: 'opacity 0.3s', position: 'relative', zIndex: 2,
      }}>
        <div style={{
          height: '100%', borderRadius: 99,
          background: 'linear-gradient(90deg, #F5C518, #E8527A)',
          width: `${holdPct}%`, transition: 'width 0.1s linear',
          boxShadow: '0 0 12px rgba(245,197,24,0.5)',
        }} />
      </div>

      {/* Status message */}
      <div style={{ minHeight: '3rem', marginTop: '0.75rem', textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: 460 }}>
        <p style={{
          fontFamily: status === 'success' ? 'Playfair Display' : 'Caveat',
          fontStyle: status === 'success' ? 'italic' : 'normal',
          fontSize: status === 'success' ? '1.15rem' : '1.1rem',
          color: status === 'success' ? '#F5C518'
            : status === 'holding' ? '#F5C518'
            : status === 'error' ? '#E8527A'
            : 'rgba(253,250,242,0.5)',
          lineHeight: 1.5,
          textShadow: status === 'success' ? '0 0 20px rgba(245,197,24,0.4)' : 'none',
        }}>
          {message || statusText[status] || ''}
        </p>
      </div>
    </div>
  )
}

function Stars() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
          width: 2, height: 2, borderRadius: '50%', background: 'white',
          opacity: Math.random() * 0.4 + 0.1,
          animation: `starTwinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }} />
      ))}
    </div>
  )
}
