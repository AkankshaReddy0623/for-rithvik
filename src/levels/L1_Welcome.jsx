import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/GameContext'
import * as THREE from 'three'

const FIRST_SPOKE = new Date('2025-10-31T00:00:00')

function getDaysSince() {
  const now = new Date()
  const diff = Math.floor((now - FIRST_SPOKE) / (1000 * 60 * 60 * 24))
  return diff
}

export default function L1_Welcome() {
  const navigate = useNavigate()
  const { unlock } = useGame()
  const mountRef = useRef(null)
  const rendererRef = useRef(null)
  const rafRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [days, setDays] = useState(getDaysSince())

  // Three.js warp starfield
  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const W = container.clientWidth || window.innerWidth
    const H = container.clientHeight || window.innerHeight

    // Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 2000)
    camera.position.z = 0

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Stars geometry
    const STAR_COUNT = 2200
    const positions = new Float32Array(STAR_COUNT * 3)
    const colors = new Float32Array(STAR_COUNT * 3)
    const sizes = new Float32Array(STAR_COUNT)

    const starColors = [
      new THREE.Color('#F5C518'), // yellow
      new THREE.Color('#ffffff'), // white
      new THREE.Color('#FFF6C0'), // soft yellow
      new THREE.Color('#E8527A'), // rose — rare
      new THREE.Color('#2DBDB1'), // teal — rare
    ]

    for (let i = 0; i < STAR_COUNT; i++) {
      // Distribute in a cylinder so they stream toward the viewer
      const angle = Math.random() * Math.PI * 2
      const radius = Math.random() * 800
      positions[i * 3]     = Math.cos(angle) * radius
      positions[i * 3 + 1] = Math.sin(angle) * radius
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000

      const c = starColors[Math.random() < 0.7 ? 1 : Math.floor(Math.random() * starColors.length)]
      colors[i * 3]     = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b

      sizes[i] = Math.random() * 2.5 + 0.5
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const mat = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    })

    const stars = new THREE.Points(geo, mat)
    scene.add(stars)

    // Mouse parallax
    const mouse = { x: 0, y: 0 }
    const onMouse = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    // Resize
    const onResize = () => {
      const W2 = container.clientWidth || window.innerWidth
      const H2 = container.clientHeight || window.innerHeight
      camera.aspect = W2 / H2
      camera.updateProjectionMatrix()
      renderer.setSize(W2, H2)
    }
    window.addEventListener('resize', onResize)

    // Animate
    let speed = 0
    const TARGET_SPEED = 3.2
    const pos = geo.attributes.position

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate)

      // Ease into warp speed
      speed += (TARGET_SPEED - speed) * 0.012

      // Move each star toward viewer
      for (let i = 0; i < STAR_COUNT; i++) {
        pos.array[i * 3 + 2] += speed

        // Reset star behind camera when it passes
        if (pos.array[i * 3 + 2] > 600) {
          const angle = Math.random() * Math.PI * 2
          const radius = Math.random() * 800
          pos.array[i * 3]     = Math.cos(angle) * radius
          pos.array[i * 3 + 1] = Math.sin(angle) * radius
          pos.array[i * 3 + 2] = -1000
        }
      }
      pos.needsUpdate = true

      // Subtle mouse parallax on the whole star field
      stars.rotation.x += (mouse.y * 0.06 - stars.rotation.x) * 0.03
      stars.rotation.y += (mouse.x * 0.06 - stars.rotation.y) * 0.03

      renderer.render(scene, camera)
    }
    animate()

    // Fade in content after a beat
    const t = setTimeout(() => setVisible(true), 400)

    return () => {
      clearTimeout(t)
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  // Keep days counter live (ticks at midnight)
  useEffect(() => {
    const id = setInterval(() => setDays(getDaysSince()), 60000)
    return () => clearInterval(id)
  }, [])

  const handleProceed = () => {
    unlock(1)
    navigate('/gesture')
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at 50% 40%, #1C1000 0%, #080500 70%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Three.js canvas mount */}
      <div
        ref={mountRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      />

      {/* Vignette overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(8,5,0,0.75) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: 680,
          padding: '2rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 1.2s ease, transform 1.2s ease',
        }}
      >

        {/* Days counter */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: '2rem',
            padding: '6px 20px',
            borderRadius: 99,
            border: '1px solid rgba(245,197,24,0.25)',
            background: 'rgba(245,197,24,0.06)',
            opacity: visible ? 1 : 0,
            animation: visible ? 'fadeUp 0.8s 0.2s ease both' : 'none',
          }}
        >
          <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,197,24,0.5)', fontFamily: 'DM Sans' }}>
            ✦
          </span>
          <span style={{ fontFamily: 'Caveat', fontSize: '1.05rem', color: 'rgba(245,197,24,0.75)' }}>
            {days} days since we first spoke
          </span>
          <span style={{ fontSize: 11, color: 'rgba(245,197,24,0.5)' }}>✦</span>
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: 'Playfair Display',
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#F5C518',
            marginBottom: '1.2rem',
            animation: visible ? 'fadeUp 0.9s 0.35s ease both' : 'none',
            opacity: visible ? 1 : 0,
          }}
        >
          To, my favourite<br />
          <em style={{ fontStyle: 'italic', color: '#FFF6C0' }}>plot twist.</em>{' '}
          <span style={{ fontStyle: 'normal' }}>💛</span>
        </h1>

        {/* Divider */}
        <div
          style={{
            width: 48,
            height: 1,
            background: 'rgba(245,197,24,0.35)',
            marginBottom: '1.4rem',
            animation: visible ? 'fadeIn 0.8s 0.55s ease both' : 'none',
            opacity: visible ? 1 : 0,
          }}
        />

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'DM Sans',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: 'rgba(253,250,242,0.6)',
            lineHeight: 1.7,
            maxWidth: 440,
            marginBottom: '2.8rem',
            animation: visible ? 'fadeUp 0.9s 0.5s ease both' : 'none',
            opacity: visible ? 1 : 0,
          }}
        >
          This is everything. Take your time →
        </p>

        {/* CTA button */}
        <button
          onClick={handleProceed}
          style={{
            padding: '15px 44px',
            borderRadius: 99,
            background: '#F5C518',
            color: '#1A1209',
            border: 'none',
            fontFamily: 'DM Sans',
            fontWeight: 500,
            fontSize: '1.05rem',
            letterSpacing: '0.03em',
            transition: 'transform 0.2s, box-shadow 0.2s',
            animation: visible ? 'fadeUp 0.9s 0.7s ease both, pulseGlow 2.5s 1.5s ease-in-out infinite' : 'none',
            opacity: visible ? 1 : 0,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.07)'
            e.currentTarget.style.boxShadow = '0 0 36px rgba(245,197,24,0.55)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = 'none'
          }}
          onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
          onMouseUp={e => { e.currentTarget.style.transform = 'scale(1.07)' }}
        >
          Let's go ✦
        </button>

        {/* Tiny bottom note */}
        <p
          style={{
            marginTop: '2.5rem',
            fontFamily: 'Caveat',
            fontSize: '0.95rem',
            color: 'rgba(245,197,24,0.25)',
            animation: visible ? 'fadeIn 1s 1.2s ease both' : 'none',
            opacity: visible ? 1 : 0,
          }}
        >
          made with love, by Akanksha ✦
        </p>

      </div>
    </div>
  )
}
