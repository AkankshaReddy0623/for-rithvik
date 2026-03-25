import { useEffect, useRef, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/GameContext'

const CANVAS_W     = 560
const CANVAS_H     = 520
const BASKET_W     = 90
const BASKET_H     = 44
const BASKET_Y     = CANVAS_H - 60
const BASKET_SPEED = 7
const TARGET       = 14

const HEARTS  = ['💛', '💛', '💛', '💛', '🌹', '💌']
const BADS    = ['💤', '😤', '😭', '🥱']

const BAD_MSGS = [
  "Caught a 💤 — classic Rithvik 😭",
  "You caught your own exhaustion 😂",
  "That was a sad movie ending 😭 dodge next time!",
  "Caught irritated Rithvik 😤 careful!",
  "💤 hits different when it's yours 😌",
  "You literally caught yourself napping 😂",
]

const WIN_MSGS = [
  "You caught all 14 of my feelings 💛",
  "14 hearts. Every single one yours.",
]

function randomBetween(a, b) { return a + Math.random() * (b - a) }

export default function L7_Arcade() {
  const navigate  = useNavigate()
  const { unlock } = useGame()
  const canvasRef  = useRef(null)
  const stateRef   = useRef({
    basketX: CANVAS_W / 2 - BASKET_W / 2,
    items: [],
    score: 0,
    misses: 0,
    keys: {},
    mouseX: null,
    spawnTimer: 0,
    spawnInterval: 90,
    frameCount: 0,
    running: false,
    badMsg: '',
    badMsgTimer: 0,
  })
  const rafRef    = useRef(null)
  const [score, setScore]   = useState(0)
  const [won, setWon]       = useState(false)
  const [started, setStarted] = useState(false)
  const [badMsg, setBadMsg] = useState('')

  const spawnItem = useCallback(() => {
    const isHeart = Math.random() < 0.62
    stateRef.current.items.push({
      x: randomBetween(20, CANVAS_W - 40),
      y: -30,
      emoji: isHeart
        ? HEARTS[Math.floor(Math.random() * HEARTS.length)]
        : BADS[Math.floor(Math.random() * BADS.length)],
      isHeart,
      speed: randomBetween(2.8, 5.2),
      size: randomBetween(24, 34),
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: randomBetween(0.03, 0.07),
    })
  }, [])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const s   = stateRef.current

    // Background
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H)
    ctx.fillStyle = 'rgba(8,5,0,0.92)'
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H)

    // Stars
    if (!s.stars) {
      s.stars = Array.from({ length: 35 }, () => ({
        x: Math.random() * CANVAS_W,
        y: Math.random() * CANVAS_H,
        r: Math.random() * 1.2 + 0.3,
        a: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.015 + 0.005,
        phase: Math.random() * Math.PI * 2,
      }))
    }
    s.stars.forEach(star => {
      star.phase += star.speed
      ctx.globalAlpha = star.a * (0.5 + 0.5 * Math.sin(star.phase))
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
      ctx.fill()
    })
    ctx.globalAlpha = 1

    // Score display
    ctx.font = '500 15px DM Sans, sans-serif'
    ctx.fillStyle = 'rgba(245,197,24,0.7)'
    ctx.textAlign = 'left'
    ctx.fillText(`${s.score} / ${TARGET} hearts caught`, 16, 28)

    // Progress bar
    const barW = (s.score / TARGET) * (CANVAS_W - 32)
    ctx.fillStyle = 'rgba(245,197,24,0.12)'
    ctx.beginPath()
    ctx.roundRect(16, 36, CANVAS_W - 32, 5, 99)
    ctx.fill()
    if (barW > 0) {
      ctx.fillStyle = '#F5C518'
      ctx.shadowColor = 'rgba(245,197,24,0.5)'
      ctx.shadowBlur = 8
      ctx.beginPath()
      ctx.roundRect(16, 36, barW, 5, 99)
      ctx.fill()
      ctx.shadowBlur = 0
    }

    // Falling items
    s.items.forEach(item => {
      item.y += item.speed
      item.wobble += item.wobbleSpeed
      const wobbleX = item.x + Math.sin(item.wobble) * 6
      ctx.font = `${item.size}px serif`
      ctx.textAlign = 'center'
      ctx.fillText(item.emoji, wobbleX, item.y)
    })

    // Basket
    const bx = s.basketX
    // Basket body
    ctx.fillStyle = 'rgba(245,197,24,0.12)'
    ctx.strokeStyle = 'rgba(245,197,24,0.7)'
    ctx.lineWidth = 2
    ctx.shadowColor = 'rgba(245,197,24,0.4)'
    ctx.shadowBlur = 12
    ctx.beginPath()
    ctx.roundRect(bx, BASKET_Y, BASKET_W, BASKET_H, 10)
    ctx.fill()
    ctx.stroke()
    ctx.shadowBlur = 0

    // Basket label
    ctx.font = '500 12px Caveat, cursive'
    ctx.fillStyle = '#F5C518'
    ctx.textAlign = 'center'
    ctx.fillText('Rithvik 💛', bx + BASKET_W / 2, BASKET_Y + BASKET_H / 2 + 5)

    // Bad message
    if (s.badMsgTimer > 0) {
      s.badMsgTimer--
      ctx.font = '600 14px Caveat, cursive'
      ctx.fillStyle = `rgba(232,82,122,${Math.min(s.badMsgTimer / 40, 1)})`
      ctx.textAlign = 'center'
      ctx.fillText(s.badMsg, CANVAS_W / 2, CANVAS_H / 2)
    }
  }, [])

  const gameLoop = useCallback(() => {
    const s = stateRef.current
    if (!s.running) return

    // Move basket
    if (s.mouseX !== null) {
      const targetX = s.mouseX - BASKET_W / 2
      s.basketX += (targetX - s.basketX) * 0.18
    } else {
      if (s.keys['ArrowLeft'] || s.keys['a'] || s.keys['A']) s.basketX -= BASKET_SPEED
      if (s.keys['ArrowRight'] || s.keys['d'] || s.keys['D']) s.basketX += BASKET_SPEED
    }
    s.basketX = Math.max(0, Math.min(CANVAS_W - BASKET_W, s.basketX))

    // Spawn
    s.spawnTimer++
    if (s.spawnTimer >= s.spawnInterval) {
      spawnItem()
      s.spawnTimer = 0
      // Gradually speed up
      s.spawnInterval = Math.max(48, s.spawnInterval - 0.4)
    }

    // Collisions + cleanup
    const basket = {
      x: s.basketX, y: BASKET_Y,
      w: BASKET_W,  h: BASKET_H,
    }
    s.items = s.items.filter(item => {
      // Off screen
      if (item.y > CANVAS_H + 40) return false

      // Collision check (centre of emoji)
      const iw = item.size
      const cx = item.x + Math.sin(item.wobble) * 6
      const cy = item.y

      const hit = (
        cx + iw / 2 > basket.x &&
        cx - iw / 2 < basket.x + basket.w &&
        cy > basket.y &&
        cy < basket.y + basket.h + iw / 2
      )

      if (hit) {
        if (item.isHeart) {
          s.score++
          setScore(s.score)
          if (s.score >= TARGET) {
            s.running = false
            setWon(true)
          }
        } else {
          // Bad item — show roast
          s.badMsg = BAD_MSGS[Math.floor(Math.random() * BAD_MSGS.length)]
          s.badMsgTimer = 90
          setBadMsg(s.badMsg)
          setTimeout(() => setBadMsg(''), 2200)
        }
        return false
      }
      return true
    })

    draw()
    rafRef.current = requestAnimationFrame(gameLoop)
  }, [spawnItem, draw])

  const startGame = useCallback(() => {
    const s = stateRef.current
    s.basketX    = CANVAS_W / 2 - BASKET_W / 2
    s.items      = []
    s.score      = 0
    s.spawnTimer = 0
    s.spawnInterval = 90
    s.running    = true
    s.badMsg     = ''
    s.badMsgTimer = 0
    setScore(0)
    setWon(false)
    setBadMsg('')
    setStarted(true)
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(gameLoop)
  }, [gameLoop])

  // Keyboard
  useEffect(() => {
    const onDown = (e) => { stateRef.current.keys[e.key] = true }
    const onUp   = (e) => { stateRef.current.keys[e.key] = false }
    window.addEventListener('keydown', onDown)
    window.addEventListener('keyup', onUp)
    return () => {
      window.removeEventListener('keydown', onDown)
      window.removeEventListener('keyup', onUp)
    }
  }, [])

  // Mouse
  const onMouseMove = useCallback((e) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return
    const scaleX = CANVAS_W / rect.width
    stateRef.current.mouseX = (e.clientX - rect.left) * scaleX
  }, [])
  const onMouseLeave = useCallback(() => {
    stateRef.current.mouseX = null
  }, [])

  useEffect(() => () => cancelAnimationFrame(rafRef.current), [])

  return (
    <div style={{
      width: '100%', minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 0%, #1C1000 0%, #080500 70%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '2rem 1.5rem', position: 'relative',
    }}>

      {/* Badge + heading */}
      <div style={{ textAlign: 'center', marginBottom: '1.2rem', animation: 'fadeUp 0.6s ease both' }}>
        <span className="badge">Level 7 — catch the feelings</span>
        <h2 style={{
          fontFamily: 'Playfair Display', fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
          color: '#F5C518', marginTop: '0.6rem', marginBottom: '0.2rem',
        }}>Catch the falling hearts</h2>
        <p style={{ fontFamily: 'Caveat', fontSize: '1rem', color: 'rgba(253,250,242,0.4)' }}>
          catch 14 💛 to continue · dodge 💤 😤 😭
        </p>
      </div>

      {/* Canvas */}
      <div style={{
        position: 'relative',
        width: '100%', maxWidth: CANVAS_W,
        borderRadius: 16, overflow: 'hidden',
        border: '1.5px solid rgba(245,197,24,0.2)',
        boxShadow: '0 0 40px rgba(245,197,24,0.08)',
        animation: 'fadeUp 0.7s 0.15s ease both',
      }}>
        <canvas
          ref={canvasRef}
          width={CANVAS_W}
          height={CANVAS_H}
          style={{ display: 'block', width: '100%' }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        />

        {/* Start overlay */}
        {!started && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(8,5,0,0.82)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '1.2rem',
          }}>
            <p style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: '#F5C518', fontStyle: 'italic' }}>
              Ready?
            </p>
            <p style={{ fontFamily: 'Caveat', fontSize: '1.1rem', color: 'rgba(253,250,242,0.5)', textAlign: 'center', maxWidth: 300 }}>
              Move with ← → keys or your mouse.<br />Catch 14 hearts. Dodge the rest.
            </p>
            <button
              onClick={startGame}
              style={{
                padding: '13px 40px', borderRadius: 99,
                background: '#F5C518', color: '#1A1209',
                border: 'none', fontFamily: 'DM Sans',
                fontWeight: 500, fontSize: '1rem',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 0 28px rgba(245,197,24,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Let's go ✦
            </button>
          </div>
        )}

        {/* Win overlay */}
        {won && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(8,5,0,0.88)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '1rem', animation: 'fadeIn 0.5s ease',
          }}>
            <p style={{ fontSize: '3.5rem', animation: 'scaleIn 0.5s ease' }}>💛</p>
            <p style={{
              fontFamily: 'Playfair Display', fontSize: 'clamp(1.3rem, 3vw, 2rem)',
              color: '#F5C518', fontStyle: 'italic', textAlign: 'center', maxWidth: 340,
            }}>
              {WIN_MSGS[Math.floor(Math.random() * WIN_MSGS.length)]}
            </p>
            <p style={{ fontFamily: 'Caveat', fontSize: '1rem', color: 'rgba(253,250,242,0.4)' }}>
              {score} hearts · well done, bangaaram
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <button
                onClick={startGame}
                style={{
                  padding: '10px 24px', borderRadius: 99,
                  background: 'transparent', border: '1.5px solid rgba(245,197,24,0.3)',
                  color: 'rgba(245,197,24,0.6)', fontFamily: 'DM Sans', fontSize: '0.9rem',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,197,24,0.7)'; e.currentTarget.style.color = '#F5C518' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,197,24,0.3)'; e.currentTarget.style.color = 'rgba(245,197,24,0.6)' }}
              >Play again</button>
              <button
                onClick={() => { unlock(7); navigate('/jigsaw') }}
                style={{
                  padding: '10px 28px', borderRadius: 99,
                  background: '#F5C518', color: '#1A1209',
                  border: 'none', fontFamily: 'DM Sans',
                  fontWeight: 500, fontSize: '0.9rem',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(245,197,24,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
              >Continue ✦</button>
            </div>
          </div>
        )}
      </div>

      {/* Live bad message below canvas */}
      <div style={{ minHeight: '2rem', marginTop: '0.8rem', textAlign: 'center' }}>
        {badMsg && (
          <p style={{
            fontFamily: 'Caveat', fontSize: '1.1rem', color: '#E8527A',
            animation: 'fadeUp 0.3s ease both',
          }}>{badMsg}</p>
        )}
      </div>

      <p style={{
        fontFamily: 'Caveat', fontSize: '0.85rem',
        color: 'rgba(253,250,242,0.2)', marginTop: '0.5rem',
      }}>
        ← → arrow keys or mouse to move
      </p>
    </div>
  )
}
