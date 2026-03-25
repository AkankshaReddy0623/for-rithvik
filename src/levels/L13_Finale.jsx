import { useEffect, useRef, useState, useCallback } from 'react'

const PERSONAL_MESSAGE = `And just like that — after everything — here we are.

You walked into my life on the last day of October and somehow became my first thought every morning and my last one every night.

I fell first. And I'd fall first a thousand times over.

Thank you for happening. Here's to more firsts and forevers.

I love you, Rithvik. Always and forever. 💛

— Akanksha`

const PHOTO_SIZE = 480
const SIDE_PAD   = 18
const BOT_PAD    = 72
const CARD_W     = PHOTO_SIZE + SIDE_PAD * 2
const CARD_H     = PHOTO_SIZE + SIDE_PAD + BOT_PAD
const DISP_W     = 280

export default function L13_Finale() {
  const videoRef   = useRef(null)
  const canvasRef  = useRef(null)
  const streamRef  = useRef(null)

  const [cameraOn, setCameraOn]   = useState(false)
  const [cameraErr, setCameraErr] = useState(false)
  const [captured, setCaptured]   = useState(false)
  const [photoURL, setPhotoURL]   = useState(null)
  const [visible, setVisible]     = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 200)
    return () => stopCamera()
  }, [])

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
  }

  const startCamera = async () => {
    setCameraErr(false)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 640 }, facingMode: 'user' },
        audio: false,
      })
      streamRef.current = stream
      setCameraOn(true)
      setTimeout(() => {
        const vid = videoRef.current
        if (vid) {
          vid.srcObject = stream
          vid.onloadedmetadata = () => {
            vid.play().then(() => setVideoReady(true))
          }
        }
      }, 100)
    } catch (err) {
      setCameraErr(true)
    }
  }

  const takePhoto = useCallback(() => {
    const video  = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas || !videoReady) return
    const vw = video.videoWidth
    const vh = video.videoHeight
    if (vw === 0 || vh === 0) return 

    canvas.width  = CARD_W
    canvas.height = CARD_H
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = '#FFFEF8'
    ctx.fillRect(0, 0, CARD_W, CARD_H)

    const cropSize = Math.min(vw, vh)
    const sx = (vw - cropSize) / 2
    const sy = (vh - cropSize) / 2

    ctx.save()
    ctx.translate(SIDE_PAD + PHOTO_SIZE, SIDE_PAD)
    ctx.scale(-1, 1)
    ctx.drawImage(video, sx, sy, cropSize, cropSize, 0, 0, PHOTO_SIZE, PHOTO_SIZE)
    ctx.restore()

    const capY = PHOTO_SIZE + SIDE_PAD + 35
    ctx.font = 'italic 20px "Playfair Display", serif'
    ctx.fillStyle = '#2C1D0A'
    ctx.textAlign = 'center'
    ctx.fillText('Rithvik — Taken by Akanksha 💛', CARD_W / 2, capY)

    const dateStr = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    ctx.font = '14px "DM Sans", sans-serif'
    ctx.fillStyle = 'rgba(44,29,10,0.5)'
    ctx.fillText(dateStr, CARD_W / 2, capY + 25)

    const url = canvas.toDataURL('image/png')
    setPhotoURL(url)
    setCaptured(true)
    stopCamera()
  }, [videoReady])

  const retake = () => {
    setCaptured(false)
    setPhotoURL(null)
    setVideoReady(false)
    startCamera()
  }

  const download = () => {
    if (!photoURL) return
    const a = document.createElement('a')
    a.href = photoURL
    a.download = 'our-forever-moment.png'
    a.click()
  }

  // --- Reusable Styles ---
  const primaryBtnStyle = {
    padding: '12px 28px',
    borderRadius: 99,
    background: '#F5C518',
    color: '#1A1209',
    border: 'none',
    fontFamily: 'DM Sans',
    fontWeight: 500,
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  }

  const secondaryBtnStyle = {
    padding: '12px 28px',
    borderRadius: 99,
    background: 'transparent',
    border: '1.5px solid rgba(255,255,255,0.15)',
    color: 'rgba(255,255,255,0.4)',
    fontFamily: 'DM Sans',
    fontWeight: 500,
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  }

  return (
    <div style={{
      width: '100%', minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 30%, #1C1000 0%, #080500 65%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', padding: '4rem 1.5rem 5rem',
      position: 'relative', overflow: 'hidden',
    }}>
      <Stars />

      {/* Header */}
      <div style={{
        textAlign: 'center', marginBottom: '3rem', zIndex: 2,
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 1s ease, transform 1s ease',
      }}>
        <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(3rem, 9vw, 6.5rem)', color: '#F5C518', fontStyle: 'italic' }}>
          I love you.
        </h1>
        <p style={{ fontFamily: 'Caveat', fontSize: '1.2rem', color: 'rgba(253,250,242,0.45)' }}>
          always, and without condition 💛
        </p>
      </div>

      <div style={{ display: 'flex', gap: '3rem', width: '100%', maxWidth: 900, zIndex: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {/* Message */}
        <div style={{ flex: '1 1 320px', maxWidth: 420, background: 'rgba(245,197,24,0.04)', border: '1px solid rgba(245,197,24,0.15)', borderRadius: 16, padding: '28px' }}>
          <p style={{ fontFamily: 'Caveat', fontSize: '1.1rem', color: 'rgba(253,250,242,0.85)', lineHeight: 2, whiteSpace: 'pre-line' }}>
            {PERSONAL_MESSAGE}
          </p>
        </div>

        {/* Booth */}
        <div style={{ flex: '1 1 280px', maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          
          <div style={{ background: '#FFFEF8', padding: '12px 12px 18px', boxShadow: '0 8px 32px rgba(0,0,0,0.55)', borderRadius: 3, width: DISP_W }}>
            <div style={{ width: DISP_W - 24, height: DISP_W - 24, background: '#1A1209', overflow: 'hidden', position: 'relative' }}>
              {cameraOn && !captured && (
                <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }} />
              )}
              {captured && photoURL && (
                <img src={photoURL} alt="polaroid" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              )}
              {!cameraOn && !captured && (
                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p style={{ color: 'rgba(245,197,24,0.4)', fontFamily: 'Caveat' }}>Ready for a photo?</p>
                </div>
              )}
            </div>
            <div style={{ textAlign: 'center', marginTop: 12 }}>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '9px', color: '#2C1D0A', fontStyle: 'italic' }}>
                Rithvik — Taken by Akanksha 💛
              </p>
            </div>
          </div>

          <canvas ref={canvasRef} style={{ display: 'none' }} />

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            {!cameraOn && !captured && (
              <button 
                onClick={startCamera} 
                style={primaryBtnStyle}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(245,197,24,0.4)'}}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'}}
              >
                Open Camera 📷
              </button>
            )}

            {cameraOn && !captured && (
              <button 
                onClick={takePhoto} 
                disabled={!videoReady}
                style={{...primaryBtnStyle, opacity: videoReady ? 1 : 0.6}}
                onMouseEnter={e => { if(videoReady) e.currentTarget.style.transform = 'scale(1.05)'}}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'}}
              >
                {videoReady ? '📸 Capture' : 'Loading...'}
              </button>
            )}

            {captured && (
              <>
                <button 
                  onClick={download} 
                  style={primaryBtnStyle}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(245,197,24,0.4)'}}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'}}
                >
                  Save 💛
                </button>
                <button 
                  onClick={retake} 
                  style={secondaryBtnStyle}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'}}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}}
                >
                  Retake
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Stars() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {Array.from({ length: 40 }).map((_, i) => (
        <div key={i} style={{
          position: 'absolute', left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
          width: 2, height: 2, borderRadius: '50%', background: 'white', opacity: 0.2,
        }} />
      ))}
    </div>
  )
}