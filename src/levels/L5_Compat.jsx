import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/GameContext'

const STEPS = [
  { label: 'Analysing Rithvik Reddy data',         duration: 1400, value: 94 },
  { label: 'Running Chinnayya charisma score',      duration: 1200, value: 99 },
  { label: 'Cross-referencing Reddy database',      duration: 1000, value: 100 },
  { label: 'Measuring zombie film acting range',    duration: 1300, value: 97 },
  { label: 'Calculating forgetfulness index',       duration: 900,  value: 98, note: 'very high' },
  { label: 'Checking innocence levels',             duration: 1100, value: 100, note: 'dangerously high' },
  { label: 'Verifying patience with overthinkers',  duration: 1200, value: 99 },
  { label: 'Computing Akanksha compatibility',      duration: 1800, value: 100 },
]

const PIE_SLICES = [
  { label: 'Written in the stars',      pct: 18, color: '#F5C518' },
  { label: 'TEDx fate',                 pct: 12, color: '#E8527A' },
  { label: 'Nerd best friends → more',  pct: 14, color: '#2DBDB1' },
  { label: 'Same Reddy energy',         pct: 11, color: '#FFD6E7' },
  { label: 'Universe approved',         pct: 15, color: '#C49A00' },
  { label: 'Inevitable honestly',       pct: 13, color: '#993556' },
  { label: 'Just meant to be',          pct: 17, color: '#0F6E56' },
]

function playDing() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    ;[0, 0.15, 0.3].forEach((t, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain); gain.connect(ctx.destination)
      osc.frequency.value = [880, 1100, 1320][i]
      osc.type = 'sine'
      gain.gain.setValueAtTime(0.18, ctx.currentTime + t)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + 0.5)
      osc.start(ctx.currentTime + t)
      osc.stop(ctx.currentTime + t + 0.6)
    })
  } catch { /* silent fail */ }
}

function PieChart({ slices, visible }) {
  const size = 200, cx = 100, cy = 100, radius = 80, inner = 42
  let cumAngle = -Math.PI / 2

  const paths = slices.map((s) => {
    const angle  = (s.pct / 100) * Math.PI * 2
    const startA = cumAngle
    const endA   = cumAngle + angle
    cumAngle     = endA
    const large  = angle > Math.PI ? 1 : 0
    const cos1 = Math.cos(startA), sin1 = Math.sin(startA)
    const cos2 = Math.cos(endA),   sin2 = Math.sin(endA)
    return {
      d: `M ${cx + inner * cos1} ${cy + inner * sin1} L ${cx + radius * cos1} ${cy + radius * sin1} A ${radius} ${radius} 0 ${large} 1 ${cx + radius * cos2} ${cy + radius * sin2} L ${cx + inner * cos2} ${cy + inner * sin2} A ${inner} ${inner} 0 ${large} 0 ${cx + inner * cos1} ${cy + inner * sin1} Z`,
      color: s.color, label: s.label,
    }
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'rotate(0deg) scale(1)' : 'rotate(-180deg) scale(0.4)',
        transition: 'opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.56,0.64,1)',
        filter: 'drop-shadow(0 0 16px rgba(245,197,24,0.2))',
      }}>
        {paths.map((p, i) => (
          <path key={i} d={p.d} fill={p.color} stroke="#0D0800" strokeWidth="2.5"
            style={{ opacity: visible ? 1 : 0, transition: `opacity 0.3s ${i * 0.08}s ease` }} />
        ))}
        <text x={cx} y={cy - 7} textAnchor="middle"
          style={{ fontFamily: 'DM Sans', fontSize: 12, fill: '#F5C518', fontWeight: 500 }}>100%</text>
        <text x={cx} y={cy + 9} textAnchor="middle"
          style={{ fontFamily: 'Caveat', fontSize: 10, fill: 'rgba(245,197,24,0.55)' }}>compatible</text>
      </svg>

      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '6px 14px',
        justifyContent: 'center', maxWidth: 400,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.6s 0.6s ease, transform 0.6s 0.6s ease',
      }}>
        {slices.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
            <span style={{ fontFamily: 'DM Sans', fontSize: '0.72rem', color: 'rgba(253,250,242,0.65)' }}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function L5_Compat() {
  const navigate = useNavigate()
  const { unlock } = useGame()
  const [currentStep, setCurrentStep]  = useState(-1)
  const [barWidths, setBarWidths]      = useState(Array(STEPS.length).fill(0))
  const [completedSteps, setCompleted] = useState([])
  const [counter, setCounter]          = useState(0)
  const [showResult, setShowResult]    = useState(false)
  const [showPie, setShowPie]          = useState(false)
  const [started, setStarted]          = useState(false)
  const timerRef = useRef(null)

  const runStep = (idx) => {
    if (idx >= STEPS.length) {
      setCurrentStep(-1)
      let c = 0
      const id = setInterval(() => {
        c += 3
        if (c >= 100) { c = 100; clearInterval(id); setTimeout(() => { setShowResult(true); playDing(); setTimeout(() => setShowPie(true), 600) }, 400) }
        setCounter(c)
      }, 28)
      return
    }
    setCurrentStep(idx)
    const step = STEPS[idx]
    const totalTicks = step.duration / 16
    let tick = 0
    const run = () => {
      tick++
      const pct = Math.min((tick / totalTicks) * step.value, step.value)
      setBarWidths(prev => { const n = [...prev]; n[idx] = pct; return n })
      if (tick < totalTicks) timerRef.current = setTimeout(run, 16)
      else { setCompleted(prev => [...prev, idx]); timerRef.current = setTimeout(() => runStep(idx + 1), 120) }
    }
    run()
  }

  useEffect(() => () => clearTimeout(timerRef.current), [])

  return (
    <div style={{
      width: '100%', minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 0%, #1C1000 0%, #080500 60%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '3rem 1.5rem', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(245,197,24,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.025) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 560 }}>

        <div style={{ textAlign: 'center', marginBottom: '1.2rem', animation: 'fadeUp 0.6s ease both' }}>
          <span className="badge">Level 5 — compatibility analysis</span>
        </div>

        <h2 style={{
          fontFamily: 'Playfair Display', fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
          color: '#F5C518', textAlign: 'center', marginBottom: '0.4rem',
          animation: 'fadeUp 0.6s 0.1s ease both',
          textShadow: '0 0 24px rgba(245,197,24,0.25)',
        }}>Compatibility Calculator</h2>

        <p style={{
          fontFamily: 'Caveat', fontSize: '1rem', color: 'rgba(245,197,24,0.4)',
          textAlign: 'center', marginBottom: '2rem', animation: 'fadeUp 0.6s 0.2s ease both',
        }}>initialising analysis protocol…</p>

        {/* Terminal */}
        <div style={{
          background: 'rgba(10,7,0,0.85)', border: '1px solid rgba(245,197,24,0.18)',
          borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem',
          animation: 'fadeUp 0.7s 0.3s ease both',
          boxShadow: '0 0 40px rgba(245,197,24,0.05), inset 0 0 40px rgba(0,0,0,0.4)',
        }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: '1.2rem', alignItems: 'center' }}>
            {['#E8527A','#F5C518','#2DBDB1'].map((c,i) => (
              <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.8 }} />
            ))}
            <span style={{ marginLeft: 8, fontSize: '0.7rem', color: 'rgba(245,197,24,0.3)', letterSpacing: '0.1em' }}>
              compatibility_engine_v2.exe
            </span>
          </div>

          {!started && (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <p style={{ fontFamily: 'Caveat', fontSize: '1.1rem', color: 'rgba(245,197,24,0.55)', marginBottom: '1rem' }}>
                &gt; Ready to run analysis?
              </p>
              <button onClick={() => { setStarted(true); setTimeout(() => runStep(0), 400) }}
                style={{
                  padding: '11px 32px', borderRadius: 8,
                  background: 'rgba(245,197,24,0.08)', border: '1px solid rgba(245,197,24,0.4)',
                  color: '#F5C518', fontFamily: 'DM Sans', fontSize: '0.95rem',
                  fontWeight: 500, letterSpacing: '0.05em', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,197,24,0.18)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(245,197,24,0.25)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(245,197,24,0.08)'; e.currentTarget.style.boxShadow = 'none' }}
              >&gt; run analysis</button>
            </div>
          )}

          {started && STEPS.map((step, i) => {
            const isDone = completedSteps.includes(i)
            const isActive = currentStep === i
            const isVis = isDone || isActive
            return (
              <div key={i} style={{ marginBottom: '1rem', opacity: isVis ? 1 : 0.18, transition: 'opacity 0.3s' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                  <span style={{
                    fontFamily: 'DM Sans', fontSize: '0.8rem',
                    color: isDone ? '#F5C518' : isActive ? '#FFD060' : 'rgba(245,197,24,0.3)',
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <span>{isDone ? '✓' : isActive ? '›' : '·'}</span>
                    {step.label}
                    {step.note && isDone && <span style={{ fontSize: '0.7rem', color: '#E8527A', opacity: 0.85 }}>[{step.note}]</span>}
                  </span>
                  <span style={{ fontFamily: 'DM Sans', fontSize: '0.75rem', color: isDone ? '#F5C518' : 'rgba(245,197,24,0.4)', minWidth: 36, textAlign: 'right' }}>
                    {isDone ? `${step.value}%` : isActive ? `${Math.round(barWidths[i])}%` : '—'}
                  </span>
                </div>
                <div style={{ height: 4, borderRadius: 99, background: 'rgba(245,197,24,0.08)', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: 99,
                    background: isDone ? 'linear-gradient(90deg, #C49A00, #F5C518)' : 'linear-gradient(90deg, #A07800, #FFD060)',
                    width: `${barWidths[i]}%`,
                    boxShadow: isActive ? '0 0 8px rgba(245,197,24,0.5)' : 'none',
                  }} />
                </div>
              </div>
            )
          })}
        </div>

        {counter > 0 && (
          <div style={{ textAlign: 'center', marginBottom: '1.5rem', animation: 'fadeUp 0.4s ease both' }}>
            <span style={{
              fontFamily: 'Playfair Display', fontSize: 'clamp(3rem, 10vw, 5.5rem)',
              fontWeight: 700, color: '#F5C518', textShadow: '0 0 40px rgba(245,197,24,0.5)',
            }}>{counter}%</span>
          </div>
        )}

        {showResult && (
          <div style={{ textAlign: 'center', marginBottom: '2rem', animation: 'scaleIn 0.6s cubic-bezier(0.34,1.56,0.64,1) both' }}>
            <p style={{
              fontFamily: 'Playfair Display', fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              color: '#F5C518', fontStyle: 'italic', lineHeight: 1.7,
              textShadow: '0 0 20px rgba(245,197,24,0.35)',
            }}>
              100% Compatible ✦<br />
              <span style={{ fontSize: '0.8em', color: 'rgba(245,197,24,0.65)' }}>
                Made for each other ✦ A match made in heaven
              </span>
            </p>
          </div>
        )}

        {showPie && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
            <p style={{ fontFamily: 'Caveat', fontSize: '1rem', color: 'rgba(245,197,24,0.4)', marginBottom: '1.2rem', animation: 'fadeIn 0.5s ease both' }}>
              breakdown of why:
            </p>
            <PieChart slices={PIE_SLICES} visible={showPie} />
          </div>
        )}

        {showPie && (
          <div style={{ textAlign: 'center', marginTop: '1rem', animation: 'fadeUp 0.6s 0.8s ease both' }}>
            <button
              onClick={() => { unlock(5); navigate('/memgame') }}
              style={{
                padding: '14px 44px', borderRadius: 99, background: '#F5C518',
                color: '#1A1209', border: 'none', fontFamily: 'DM Sans',
                fontWeight: 500, fontSize: '1rem', transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(245,197,24,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
            >Continue ✦</button>
          </div>
        )}
      </div>
    </div>
  )
}
