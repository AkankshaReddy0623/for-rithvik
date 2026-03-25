import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/GameContext'

const NO_EXCUSES = [
  "Not an option, darling 😘",
  "Ask me again tomorrow",
  "I can't have a sad ending 😭",
  "I need to sleep",
  "I forgot what the question was",
  "My forgetfulness is acting up",
  "Not now, I'm exhausted",
  "Just make the better choice",
  "Think better about it",
  "I'm too busy being cute right now",
  "Don't you dare touch me",
  "Just make her yours instead",
  "Can we discuss this after a nap",
  "I said what I said on 14th Feb",
  "My innocence won't allow it 😇",
  "Hehe, I'm gonna disappear",
  "No is not allowed",
  "Say no to no!",
]

function launchConfetti(canvas) {
  const ctx  = canvas.getContext('2d')
  const W    = canvas.width
  const H    = canvas.height
  const colors = ['#F5C518','#E8527A','#2DBDB1','#FFD6E7','#FFF6C0','#ffffff','#FF8C42']
  const pieces = Array.from({ length: 160 }, () => ({
    x: Math.random() * W,
    y: -20 - Math.random() * 80,
    w: Math.random() * 10 + 5,
    h: Math.random() * 6 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    vx: (Math.random() - 0.5) * 5,
    vy: Math.random() * 4 + 2,
    rot: Math.random() * 360,
    rotV: (Math.random() - 0.5) * 10,
    life: 1,
  }))

  const draw = () => {
    ctx.clearRect(0, 0, W, H)
    let alive = false
    pieces.forEach(p => {
      if (p.y > H + 20) return
      alive = true
      p.x += p.vx; p.y += p.vy; p.rot += p.rotV
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rot * Math.PI / 180)
      ctx.fillStyle = p.color
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
      ctx.restore()
    })
    if (alive) requestAnimationFrame(draw)
  }
  draw()
}

export default function L12_Ask() {
  const navigate   = useNavigate()
  const { unlock } = useGame()
  const confettiRef = useRef(null)
  const containerRef = useRef(null)
  const noBtnRef = useRef(null)

  const [noCount, setNoCount]   = useState(0)
  const [noPos, setNoPos]       = useState({ x: null, y: null })
  const [noLabel, setNoLabel]   = useState('No')
  const [won, setWon]           = useState(false)
  const [yesVisible, setYesVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setYesVisible(true), 600)
  }, [])

  const getRandomPos = useCallback(() => {
    const container = containerRef.current
    if (!container) return { x: 0, y: 0 }
    
    const rect = container.getBoundingClientRect()
    // Estimate button size if ref hasn't updated yet, otherwise use real width
    const btnW = noBtnRef.current?.offsetWidth || 120 
    const btnH = 45
    const margin = 10

    // Central area to avoid (where "Yes" button lives)
    const avoidW = 220 
    const avoidH = 100
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    let newX, newY
    let attempts = 0
    
    // Keep trying until we find a spot not overlapping the center Yes button
    do {
      newX = margin + Math.random() * (rect.width - btnW - margin * 2)
      newY = margin + Math.random() * (rect.height - btnH - margin * 2)
      attempts++
      
      // Check if this coordinate falls inside the "Yes" button's rect
      const overlapsYes = (
        newX + btnW > centerX - avoidW / 2 &&
        newX < centerX + avoidW / 2 &&
        newY + btnH > centerY - avoidH / 2 &&
        newY < centerY + avoidH / 2
      )
      
      if (!overlapsYes || attempts > 20) break
    } while (true)

    return { x: newX, y: newY }
  }, [])

  const handleNoHover = useCallback(() => {
    const nextCount = noCount + 1
    setNoCount(nextCount)
    setNoLabel(NO_EXCUSES[nextCount % NO_EXCUSES.length])
    // Position depends on the text width, so we move it in the next tick
    setTimeout(() => setNoPos(getRandomPos()), 0)
  }, [noCount, getRandomPos])

  const handleYes = useCallback(() => {
    setWon(true)
    setTimeout(() => {
      const canvas = confettiRef.current
      if (!canvas) return
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      launchConfetti(canvas)
    }, 50)
    setTimeout(() => { unlock(12); }, 800)
  }, [unlock])

  return (
    <div style={{
      width: '100%', minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 40%, #1A0010 0%, #080500 70%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '2rem', position: 'relative', overflow: 'hidden',
    }}>
      <Stars />

      <canvas
        ref={confettiRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '100%', height: '100%',
          pointerEvents: 'none', zIndex: 10,
        }}
      />

      {!won ? (
        <>
          <div style={{ marginBottom: '1.5rem', animation: 'fadeUp 0.6s ease both', position: 'relative', zIndex: 2 }}>
            <span className="badge" style={{ color: '#E8527A', borderColor: 'rgba(232,82,122,0.3)' }}>
              Level 12 — the moment
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display',
            fontSize: 'clamp(2.2rem, 7vw, 5rem)',
            color: '#FDFAF2', textAlign: 'center',
            lineHeight: 1.15, marginBottom: '0.6rem',
            animation: 'fadeUp 0.7s 0.1s ease both',
            position: 'relative', zIndex: 2,
          }}>
            Will you be my{' '}
            <em style={{ color: '#F5C518', fontStyle: 'italic' }}>boyfriend</em>?
          </h1>

          <p style={{
            fontFamily: 'Caveat', fontSize: '1.1rem',
            color: 'rgba(253,250,242,0.4)', marginBottom: '3rem',
            textAlign: 'center',
            animation: 'fadeUp 0.7s 0.2s ease both',
            position: 'relative', zIndex: 2,
          }}>
            {noCount === 0
              ? 'take your time 💛'
              : noCount < 3
              ? 'the No button seems scared 👀'
              : noCount < 6
              ? 'it keeps running away… suspicious 🤔'
              : noCount < 10
              ? 'Rithvik. RITHVIK. 😭'
              : 'just click the yellow one 💛'}
          </p>

          <div
            ref={containerRef}
            style={{
              position: 'relative', zIndex: 2,
              width: '100%', maxWidth: 600, // Slightly wider for excuses
              height: 300, // Taller area to dodge center better
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <button
              onClick={handleYes}
              style={{
                padding: '18px 60px', borderRadius: 99,
                background: '#F5C518', color: '#1A1209',
                border: 'none', fontFamily: 'DM Sans',
                fontWeight: 500, fontSize: '1.2rem',
                letterSpacing: '0.02em',
                opacity: yesVisible ? 1 : 0,
                transform: yesVisible ? 'scale(1)' : 'scale(0.8)',
                transition: 'opacity 0.6s, transform 0.6s, box-shadow 0.2s',
                animation: yesVisible ? 'pulseGlow 2s ease-in-out infinite' : 'none',
                zIndex: 3,
                pointerEvents: yesVisible ? 'auto' : 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.08)'
                e.currentTarget.style.boxShadow = '0 0 40px rgba(245,197,24,0.6)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Yes, always 💛
            </button>

            <button
              ref={noBtnRef}
              onMouseEnter={handleNoHover}
              onFocus={handleNoHover}
              style={{
                position: 'absolute',
                left: noPos.x ?? 'auto',
                top: noPos.y ?? 'auto',
                right: noPos.x === null ? 24 : 'auto',
                bottom: noPos.y === null ? 24 : 'auto',
                padding: '12px 28px', borderRadius: 99,
                background: 'rgba(255,255,255,0.05)',
                border: '1.5px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.4)',
                fontFamily: 'DM Sans', fontSize: '0.85rem',
                transition: 'left 0.2s cubic-bezier(0.34,1.56,0.64,1), top 0.2s cubic-bezier(0.34,1.56,0.64,1)',
                whiteSpace: 'nowrap', // Prevents text clipping
                zIndex: 2,
                cursor: 'pointer',
              }}
            >
              {noCount === 0 ? 'No' : noLabel}
            </button>
          </div>

          {noCount > 0 && (
            <p style={{
              fontFamily: 'Caveat', fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.2)',
              position: 'relative', zIndex: 2, marginTop: '0.5rem',
              animation: 'fadeIn 0.3s ease',
            }}>
              No button attempts: {noCount} 😭
            </p>
          )}
        </>
      ) : (
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', textAlign: 'center',
          gap: '1rem', animation: 'scaleIn 0.6s cubic-bezier(0.34,1.56,0.64,1) both',
        }}>
          <div style={{ fontSize: '4rem', animation: 'float 2s ease-in-out infinite' }}>
            💛
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display',
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            color: '#F5C518', fontStyle: 'italic',
            lineHeight: 1.1,
            textShadow: '0 0 60px rgba(245,197,24,0.6), 0 0 120px rgba(245,197,24,0.3)',
            animation: 'glowPulse 2s ease-in-out infinite',
          }}>
            HE SAID YES
          </h1>
          <p style={{
            fontFamily: 'Caveat', fontSize: '1.4rem',
            color: 'rgba(253,250,242,0.7)',
          }}>
            obviously 💛
          </p>
          <button
            onClick={() => navigate('/finale')}
            style={{
              marginTop: '1.5rem',
              padding: '14px 44px', borderRadius: 99,
              background: '#F5C518', color: '#1A1209',
              border: 'none', fontFamily: 'DM Sans',
              fontWeight: 500, fontSize: '1rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(245,197,24,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            One last thing ✦
          </button>
        </div>
      )}
      {!won && (
        <button onClick={() => { unlock(12); navigate('/finale') }} style={{ marginTop: '1rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.2)', fontFamily: 'DM Sans', fontSize: '0.72rem', padding: '5px 14px', borderRadius: 99, position: 'relative', zIndex: 2 }} onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }} onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.2)' }}>skip (dev only)</button>
      )}
    </div>
  )
}

function Stars() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {Array.from({ length: 40 }).map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: Math.random() > 0.8 ? 3 : 2,
          height: Math.random() > 0.8 ? 3 : 2,
          borderRadius: '50%',
          background: i % 4 === 0 ? '#E8527A' : i % 7 === 0 ? '#F5C518' : 'white',
          opacity: Math.random() * 0.4 + 0.05,
          animation: `starTwinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }} />
      ))}
    </div>
  )
}