import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/GameContext'

const PASSCODE = '31102025'
const MAX_LEN = PASSCODE.length

// Burst particles on success
function burstParticles() {
  const canvas = document.getElementById('particle-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const W = canvas.width, H = canvas.height
  const colors = ['#F5C518', '#FFD700', '#E8527A', '#FFF6C0', '#2DBDB1', '#ffffff']
  const pts = []
  for (let i = 0; i < 80; i++) {
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 8 + 3
    pts.push({
      x: W / 2, y: H / 2,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2,
      r: Math.random() * 5 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1,
      decay: Math.random() * 0.02 + 0.012,
    })
  }
  function draw() {
    for (let i = pts.length - 1; i >= 0; i--) {
      const p = pts[i]
      p.x += p.vx; p.y += p.vy; p.vy += 0.15; p.life -= p.decay
      if (p.life <= 0) { pts.splice(i, 1); continue }
      ctx.globalAlpha = p.life
      ctx.fillStyle = p.color
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.globalAlpha = 1
    if (pts.length) requestAnimationFrame(draw)
  }
  draw()
}

export default function L0_Lock() {
  const navigate = useNavigate()
  const { unlock } = useGame()
  const [pin, setPin] = useState('')
  const [shaking, setShaking] = useState(false)
  const [roastMsg, setRoastMsg] = useState('')
  const [unlocking, setUnlocking] = useState(false)

  const pressNum = useCallback((n) => {
    if (unlocking) return
    setPin(prev => {
      if (prev.length >= MAX_LEN) return prev
      return prev + n
    })
    setRoastMsg('')
  }, [unlocking])

  const deleteLast = useCallback(() => {
    if (unlocking) return
    setPin(prev => prev.slice(0, -1))
    setRoastMsg('')
  }, [unlocking])

  const submit = useCallback(() => {
    if (unlocking || pin.length === 0) return
    if (pin === PASSCODE) {
      setUnlocking(true)
      burstParticles()
      setTimeout(() => {
        unlock(0)
        navigate('/welcome')
      }, 900)
    } else {
      setShaking(true)
      setRoastMsg('Wrong. Try harder, bangaaram.')
      setPin('')
      setTimeout(() => setShaking(false), 500)
    }
  }, [pin, unlock, navigate, unlocking])

  // Auto-submit when full length reached
  useEffect(() => {
    if (pin.length === MAX_LEN) {
      const t = setTimeout(submit, 200)
      return () => clearTimeout(t)
    }
  }, [pin, submit])

  // Keyboard support
  useEffect(() => {
    const handler = (e) => {
      if (e.key >= '0' && e.key <= '9') pressNum(e.key)
      else if (e.key === 'Backspace') deleteLast()
      else if (e.key === 'Enter') submit()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [pressNum, deleteLast, submit])

  const dots = Array.from({ length: MAX_LEN })

  return (
    <div className="level-screen" style={{ background: 'radial-gradient(ellipse at 50% 35%, #261800 0%, #0D0800 70%)' }}>

      {/* Ambient stars */}
      <Stars />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          userSelect: 'none',
          animation: 'fadeUp 0.9s ease both',
        }}
      >

        {/* Top label */}
        <p
          style={{
            marginBottom: '0.75rem',
            fontSize: '0.8rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(245,197,24,0.5)',
            fontFamily: 'DM Sans',
          }}
        >
          ✦ private access ✦
        </p>

        {/* Heading */}
        <h1
          style={{
            fontFamily: 'Playfair Display',
            fontSize: 'clamp(2rem, 6vw, 3.8rem)',
            color: '#F5C518',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '0.25rem',
          }}
        >
          Hey, you.
        </h1>
        <p
          style={{
            fontFamily: 'Caveat',
            fontSize: '1.3rem',
            color: 'rgba(253,250,242,0.5)',
            marginBottom: '2.5rem',
          }}
        >
          Enter the passcode to open this 💛
        </p>

        {/* PIN dots */}
        <div
          className={shaking ? 'animate-shake' : ''}
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: '10px',
            marginBottom: '0.6rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {dots.map((_, i) => (
            <div
              key={i}
              style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                border: '2px solid rgba(245,197,24,0.5)',
                background: i < pin.length ? '#F5C518' : 'transparent',
                transition: 'background 0.15s, transform 0.15s',
                transform: i < pin.length ? 'scale(1.15)' : 'scale(1)',
                boxShadow: i < pin.length ? '0 0 8px rgba(245,197,24,0.6)' : 'none',
              }}
            />
          ))}
        </div>

        {/* Roast message */}
        <div style={{ height: '1.6rem', marginBottom: '1.2rem' }}>
          {roastMsg && (
            <p
              style={{
                fontFamily: 'Caveat',
                fontSize: '1.1rem',
                color: '#E8527A',
                animation: 'fadeUp 0.3s ease both',
              }}
            >
              {roastMsg}
            </p>
          )}
        </div>

        {/* Numpad */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 76px)',
            gap: '12px',
          }}
        >
          {['1','2','3','4','5','6','7','8','9'].map(n => (
            <NumButton key={n} label={n} onClick={() => pressNum(n)} />
          ))}
          <NumButton label="⌫" onClick={deleteLast} dim />
          <NumButton label="0" onClick={() => pressNum('0')} />
          <NumButton
            label={unlocking ? '✓' : '→'}
            onClick={submit}
            accent
            glow={pin.length === MAX_LEN && !unlocking}
          />
        </div>

        {/* Hint */}
        <p
          style={{
            marginTop: '2rem',
            fontFamily: 'Caveat',
            fontSize: '1rem',
            color: 'rgba(245,197,24,0.35)',
            fontStyle: 'italic',
          }}
        >
          Hint: The day we first spoke 💛
        </p>
      </div>
    </div>
  )
}

function NumButton({ label, onClick, dim, accent, glow }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 76,
        height: 76,
        borderRadius: '50%',
        border: accent
          ? '1.5px solid rgba(245,197,24,0.7)'
          : '1.5px solid rgba(245,197,24,0.2)',
        background: accent
          ? 'rgba(245,197,24,0.12)'
          : 'rgba(245,197,24,0.04)',
        color: dim ? 'rgba(253,250,242,0.35)' : '#FDFAF2',
        fontSize: typeof label === 'string' && label.length === 1 && label >= '0' && label <= '9'
          ? '1.6rem'
          : '1.2rem',
        fontFamily: 'Playfair Display',
        fontWeight: 400,
        backdropFilter: 'blur(6px)',
        transition: 'all 0.15s',
        animation: glow ? 'pulse-glow 1.5s ease-in-out infinite' : 'none',
        boxShadow: glow ? '0 0 20px rgba(245,197,24,0.4)' : 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(245,197,24,0.18)'
        e.currentTarget.style.borderColor = 'rgba(245,197,24,0.7)'
        e.currentTarget.style.transform = 'scale(1.06)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = accent ? 'rgba(245,197,24,0.12)' : 'rgba(245,197,24,0.04)'
        e.currentTarget.style.borderColor = accent ? 'rgba(245,197,24,0.7)' : 'rgba(245,197,24,0.2)'
        e.currentTarget.style.transform = 'scale(1)'
      }}
      onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.94)' }}
      onMouseUp={e => { e.currentTarget.style.transform = 'scale(1.06)' }}
    >
      {label}
    </button>
  )
}

function Stars() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() > 0.8 ? 3 : 2,
            height: Math.random() > 0.8 ? 3 : 2,
            borderRadius: '50%',
            background: 'white',
            opacity: Math.random() * 0.5 + 0.1,
            animation: `starTwinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  )
}
