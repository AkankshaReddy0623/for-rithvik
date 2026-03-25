import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const canvasRef = useRef(null)
  const particles = useRef([])
  const mouse = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      if (Math.random() > 0.55) spawnParticle(e.clientX, e.clientY)
    }

    const onOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.closest('button') ||
          e.target.tagName === 'A' || e.target.dataset.hoverable) {
        cursor.classList.add('hovering')
      }
    }
    const onOut = () => cursor.classList.remove('hovering')

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    const COLORS = ['#F5C518', '#FFD700', '#E8527A', '#FFF6C0', '#2DBDB1']

    function spawnParticle(x, y) {
      particles.current.push({
        x, y,
        vx: (Math.random() - 0.5) * 2.5,
        vy: (Math.random() - 0.5) * 2.5 - 0.5,
        r: Math.random() * 3 + 1.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        life: 1,
        decay: Math.random() * 0.025 + 0.015,
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const p = particles.current
      for (let i = p.length - 1; i >= 0; i--) {
        const pt = p[i]
        pt.x += pt.vx
        pt.y += pt.vy
        pt.vy += 0.04
        pt.life -= pt.decay
        if (pt.life <= 0) { p.splice(i, 1); continue }
        ctx.globalAlpha = pt.life * 0.8
        ctx.fillStyle = pt.color
        ctx.beginPath()
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      rafRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div id="custom-cursor" ref={cursorRef} />
      <canvas id="particle-canvas" ref={canvasRef} />
    </>
  )
}
