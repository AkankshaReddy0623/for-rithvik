import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/GameContext'

const MILESTONES = [
  {
    pct: 25,
    label: 'More than the number of times you\'ve forgotten something',
    sub: '(and that number is very, very high)',
    color: '#2DBDB1',
  },
  {
    pct: 50,
    label: 'More than all 22 songs on the AR Soundtrack combined',
    sub: 'yes, even Lavender Haze',
    color: '#E8527A',
  },
  {
    pct: 75,
    label: 'More than every "I love you" we\'ve said to each other',
    sub: 'and we say it a lot',
    color: '#F5C518',
  },
  {
    pct: 100,
    label: 'More than I can ever put into words',
    sub: 'and I tried — 8 pages, remember?',
    color: '#F5C518',
  },
  {
    pct: Infinity,
    label: 'Beyond expression. Beyond measurement.',
    sub: 'Just… you. Always you.',
    color: '#F5C518',
  },
]

const MILESTONE_PAUSE_DURATION = 3000; // 3 seconds to read

// Spark particles
function spawnSparks(canvas, cx, cy, color) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const sparks = Array.from({ length: 28 }, () => ({
    x: cx, y: cy,
    vx: (Math.random() - 0.5) * 9,
    vy: (Math.random() - 0.5) * 9 - 2,
    r: Math.random() * 3 + 1,
    color,
    life: 1,
    decay: Math.random() * 0.03 + 0.02,
  }))

  const draw = () => {
    sparks.forEach((s) => {
      s.x += s.vx; s.y += s.vy; s.vy += 0.2; s.life -= s.decay
      if (s.life <= 0) return
      ctx.globalAlpha = s.life
      ctx.fillStyle = s.color
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fill()
    })
    ctx.globalAlpha = 1
    if (sparks.some(s => s.life > 0)) requestAnimationFrame(draw)
  }
  draw()
}

export default function L11_Meter() {
  const navigate   = useNavigate()
  const { unlock } = useGame()

  const canvasRef  = useRef(null)
  const rafRef     = useRef(null)
  const isPausedRef = useRef(false) // Use ref for the animation loop to see instantly
  
  const [started, setStarted]     = useState(false)
  const [milestone, setMilestone] = useState(null)
  const [won, setWon]             = useState(false)
  const [displayPct, setDisplayPct] = useState(0)

  // ── Draw gauge ────────────────────────────────────────────────
  const drawGauge = (pct) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx  = canvas.getContext('2d')
    const W    = canvas.width
    const H    = canvas.height
    const cx   = W / 2
    const cy   = H * 0.58
    const R    = Math.min(W, H) * 0.38

    ctx.clearRect(0, 0, W, H)

    const startAngle = Math.PI          // left (0%)
    const endAngle   = 2 * Math.PI      // right (100%)
    const arcRange   = Math.PI          

    // Track
    ctx.beginPath()
    ctx.arc(cx, cy, R, startAngle, endAngle)
    ctx.strokeStyle = 'rgba(245,197,24,0.1)'
    ctx.lineWidth   = 18
    ctx.lineCap     = 'round'
    ctx.stroke()

    // Filled arc
    const clampedPct = Math.min(pct, 100)
    const fillEnd    = startAngle + (clampedPct / 100) * arcRange

    if (clampedPct > 0) {
      const grad = ctx.createLinearGradient(cx - R, cy, cx + R, cy)
      grad.addColorStop(0,   '#2DBDB1')
      grad.addColorStop(0.5, '#E8527A')
      grad.addColorStop(1,   '#F5C518')
      ctx.beginPath()
      ctx.arc(cx, cy, R, startAngle, fillEnd)
      ctx.strokeStyle = grad
      ctx.lineWidth   = 18
      ctx.lineCap     = 'round'
      ctx.shadowColor = '#F5C518'
      ctx.shadowBlur  = pct > 80 ? 18 : 8
      ctx.stroke()
      ctx.shadowBlur  = 0
    }

    // Milestone ticks
    MILESTONES.filter(m => m.pct !== Infinity).forEach(m => {
      const angle = startAngle + (m.pct / 100) * arcRange
      const x1 = cx + (R - 26) * Math.cos(angle)
      const y1 = cy + (R - 26) * Math.sin(angle)
      const x2 = cx + (R + 4)  * Math.cos(angle)
      const y2 = cy + (R + 4)  * Math.sin(angle)
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.strokeStyle = pct >= m.pct ? m.color : 'rgba(245,197,24,0.2)'
      ctx.lineWidth   = 2
      ctx.stroke()
    })

    // Needle
    const needleAngle = startAngle + (clampedPct / 100) * arcRange
    const needleLen   = R - 22
    const nx = cx + needleLen * Math.cos(needleAngle)
    const ny = cy + needleLen * Math.sin(needleAngle)

    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(nx, ny)
    ctx.strokeStyle = pct >= 100 ? '#F5C518' : '#FDFAF2'
    ctx.lineWidth   = 3
    ctx.lineCap     = 'round'
    ctx.shadowColor = pct >= 100 ? 'rgba(245,197,24,0.8)' : 'rgba(255,255,255,0.4)'
    ctx.shadowBlur  = pct >= 100 ? 20 : 6
    ctx.stroke()
    ctx.shadowBlur  = 0

    // Needle base
    ctx.beginPath()
    ctx.arc(cx, cy, 10, 0, Math.PI * 2)
    ctx.fillStyle = '#F5C518'
    ctx.shadowColor = 'rgba(245,197,24,0.6)'
    ctx.shadowBlur  = 12
    ctx.fill()
    ctx.shadowBlur  = 0

    ctx.font = '500 12px DM Sans, sans-serif'
    ctx.fillStyle = 'rgba(245,197,24,0.35)'
    ctx.textAlign = 'left'
    ctx.fillText('0', cx - R - 8, cy + 20)
    ctx.textAlign = 'right'
    ctx.fillText(pct >= 100 ? '∞' : '100', cx + R + 8, cy + 20)

    return { cx, cy, nx, ny }
  }

  // ── Animate ───────────────────────────────────────────────────
  const animate = () => {
    let pct = 0
    const milestonesPassed = new Set()

    const step = () => {
      if (isPausedRef.current) {
        rafRef.current = requestAnimationFrame(step)
        return
      }

      // Reduced base speed for smoother travel (from 0.55 down to 0.25)
      const speed = 0.25 
      pct = Math.min(pct + speed, 102)

      const coords = drawGauge(pct)
      setDisplayPct(Math.min(Math.round(pct), 100))

      // Check milestones
      MILESTONES.filter(m => m.pct !== Infinity).forEach(m => {
        if (pct >= m.pct && !milestonesPassed.has(m.pct)) {
          milestonesPassed.add(m.pct)
          setMilestone(m)
          if (coords) spawnSparks(canvasRef.current, coords.nx, coords.ny, m.color)
          
          // PAUSE ANIMATION
          isPausedRef.current = true
          setTimeout(() => {
            isPausedRef.current = false
          }, MILESTONE_PAUSE_DURATION)
        }
      })

      if (pct >= 102) {
        drawGauge(100)
        setDisplayPct('∞')
        setMilestone(MILESTONES[MILESTONES.length - 1])
        if (coords) spawnSparks(canvasRef.current, coords.cx, coords.cy - 20, '#F5C518')
        setTimeout(() => setWon(true), 1200)
        return
      }

      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
  }

  const handleStart = () => {
    setStarted(true)
    setTimeout(animate, 400)
  }

  useEffect(() => {
    drawGauge(0)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const size = Math.min(canvas.parentElement?.offsetWidth || 460, 460)
    canvas.width  = size
    canvas.height = size * 0.7
    drawGauge(0)
  }, [])

  return (
    <div style={{
      width: '100%', minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 40%, #1A0A00 0%, #080500 70%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '3rem 1.5rem 4rem', position: 'relative',
    }}>
      <Stars />

      <div style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative', zIndex: 2, animation: 'fadeUp 0.6s ease both' }}>
        <span className="badge">Level 11 — the measure of it</span>
        <h2 style={{
          fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          color: '#F5C518', marginTop: '0.6rem', marginBottom: '0.3rem',
          fontStyle: 'italic',
        }}>How much do I love you?</h2>
        <p style={{ fontFamily: 'Caveat', fontSize: '1rem', color: 'rgba(253,250,242,0.35)' }}>
          let's find out
        </p>
      </div>

      <div style={{
        width: '100%', maxWidth: 460,
        position: 'relative', zIndex: 2,
        animation: 'fadeUp 0.7s 0.1s ease both',
      }}>
        <canvas
          ref={canvasRef}
          style={{ width: '100%', display: 'block' }}
        />

        <div style={{ textAlign: 'center', marginTop: '-0.5rem' }}>
          <span style={{
            fontFamily: 'Playfair Display',
            fontSize: 'clamp(3.5rem, 12vw, 6rem)',
            fontWeight: 700,
            color: won ? '#F5C518' : '#FDFAF2',
            textShadow: won
              ? '0 0 60px rgba(245,197,24,0.7), 0 0 120px rgba(245,197,24,0.3)'
              : 'none',
            transition: 'color 0.4s, text-shadow 0.4s',
            lineHeight: 1,
          }}>
            {started ? displayPct : '0'}
            {displayPct !== '∞' && started && <span style={{ fontSize: '0.5em', opacity: 0.6 }}>%</span>}
          </span>
        </div>
      </div>

      <div style={{
        width: '100%', maxWidth: 480,
        minHeight: 100, // Slightly taller to prevent jumping
        marginTop: '1.5rem',
        position: 'relative', zIndex: 2,
        textAlign: 'center',
      }}>
        {milestone && (
          <div
            key={milestone.pct}
            style={{
              padding: '16px 24px', borderRadius: 14,
              background: 'rgba(245,197,24,0.06)',
              border: `1px solid ${milestone.color}44`,
              animation: 'scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both',
            }}
          >
            <p style={{
              fontFamily: 'Playfair Display', fontStyle: 'italic',
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              color: milestone.color, marginBottom: '0.3rem', lineHeight: 1.4,
            }}>
              {milestone.label}
            </p>
            <p style={{
              fontFamily: 'Caveat', fontSize: '0.95rem',
              color: 'rgba(253,250,242,0.4)',
            }}>
              {milestone.sub}
            </p>
          </div>
        )}
      </div>

      {!started && (
        <div style={{ marginTop: '1.5rem', position: 'relative', zIndex: 2, animation: 'fadeUp 0.6s 0.3s ease both' }}>
          <button
            onClick={handleStart}
            style={{
              padding: '14px 44px', borderRadius: 99,
              background: '#F5C518', color: '#1A1209',
              border: 'none', fontFamily: 'DM Sans',
              fontWeight: 500, fontSize: '1rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
              animation: 'pulseGlow 2s ease-in-out infinite',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(245,197,24,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Find out ✦
          </button>
        </div>
      )}

      {won && (
        <div style={{
          marginTop: '2rem', position: 'relative', zIndex: 2,
          animation: 'fadeUp 0.6s ease both',
        }}>
          <button
            onClick={() => { unlock(11); navigate('/ask') }}
            style={{
              padding: '14px 44px', borderRadius: 99,
              background: '#F5C518', color: '#1A1209',
              border: 'none', fontFamily: 'DM Sans',
              fontWeight: 500, fontSize: '1rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(245,197,24,0.45)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Continue ✦
          </button>
        </div>
      )}
      {!started && (
        <button onClick={() => { unlock(11); navigate('/ask') }} style={{ marginTop: '1rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.2)', fontFamily: 'DM Sans', fontSize: '0.72rem', padding: '5px 14px', borderRadius: 99, position: 'relative', zIndex: 2 }} onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }} onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.2)' }}>skip (dev only)</button>
      )}
    </div>
  )
}

function Stars() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {Array.from({ length: 32 }).map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: Math.random() > 0.8 ? 3 : 2,
          height: Math.random() > 0.8 ? 3 : 2,
          borderRadius: '50%',
          background: i % 5 === 0 ? '#F5C518' : 'white',
          opacity: Math.random() * 0.4 + 0.05,
          animation: `starTwinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }} />
      ))}
    </div>
  )
}