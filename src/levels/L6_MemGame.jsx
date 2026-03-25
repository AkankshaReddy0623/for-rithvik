import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/GameContext'

// --- 1. Sub-components (Hoisted to top for safety) ---
function Stars() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: 2, height: 2, borderRadius: '50%',
          background: 'white',
          opacity: Math.random() * 0.35 + 0.05,
          animation: `starTwinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }} />
      ))}
    </div>
  )
}

// --- 2. Constants & Helpers ---
const PAIRS = [
  { id: 'mem1', photo: '/photos/one.jpg', color: '#2A1900', label: 'Memory 1' },
  { id: 'mem2', photo: '/photos/two.jpg', color: '#1A0008', label: 'Memory 2' },
  { id: 'mem3', photo: '/photos/three.jpg', color: '#001A10', label: 'Memory 3' },
  { id: 'mem4', photo: '/photos/four.jpg', color: '#0A001A', label: 'Memory 4' },
  { id: 'mem5', photo: '/photos/five.jpg', color: '#001018', label: 'Memory 5' },
  { id: 'mem6', photo: '/photos/six.jpg', color: '#1A0A00', label: 'Memory 6' },
  { id: 'mem7', photo: '/photos/seven.jpg', color: '#0A1A00', label: 'Memory 7' },
  { id: 'mem8', photo: '/photos/eight.jpg', color: '#1A0012', label: 'Memory 8' },
]

const ROASTS = [
  "Not a match… you forget things IRL too, so this checks out 💛",
  "Wrong! Even Chinnayya had better memory than this 😅",
  "Nope! The forgetfulness index was clearly correct 😌",
  "Not it! Try again, bangaaram 🌹",
  "So close yet so far… just like your lyric knowledge at Sreeotasv 😂",
  "Wrong pair! You watched the movie, I watched you — now focus! 📷",
  "Nooo! You literally lived these memories, come on 😭",
  "Not a match! Good thing you're cute 💛",
  "Rithvik. RITHVIK. These are our memories 😤",
  "Wrong! I believe in you (barely) 🥺",
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildDeck() {
  const cards = []
  PAIRS.forEach(p => {
    cards.push({ ...p, uid: `${p.id}-a` })
    cards.push({ ...p, uid: `${p.id}-b` })
  })
  return shuffle(cards)
}

// --- 3. Main Component ---
export default function L6_MemGame() {
  const navigate = useNavigate()
  const { unlock } = useGame()

  const [deck] = useState(() => buildDeck())
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [locked, setLocked] = useState(false)
  const [roast, setRoast] = useState('')
  const [roastKey, setRoastKey] = useState(0)
  const [shakePair, setShakePair] = useState([])
  const [moves, setMoves] = useState(0)
  const [won, setWon] = useState(false)
  const [roastCount, setRoastCount] = useState(0)

  const flipCard = useCallback((idx) => {
    if (locked) return
    if (flipped.includes(idx)) return
    if (matched.includes(deck[idx].id)) return

    const newFlipped = [...flipped, idx]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setLocked(true)
      setMoves(m => m + 1)
      const [a, b] = newFlipped

      if (deck[a].id === deck[b].id) {
        const newMatched = [...matched, deck[a].id]
        setMatched(newMatched)
        setFlipped([])
        setLocked(false)
        setRoast('')
        if (newMatched.length === PAIRS.length) {
          setWon(true)
        }
      } else {
        const msg = ROASTS[roastCount % ROASTS.length]
        setRoast(msg)
        setRoastKey(k => k + 1)
        setRoastCount(c => c + 1)
        setShakePair([a, b])
        setTimeout(() => {
          setFlipped([])
          setShakePair([])
          setLocked(false)
        }, 1200)
      }
    }
  }, [locked, flipped, matched, deck, roastCount])

  return (
    <div style={{
      width: '100%', minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 0%, #1A0A00 0%, #080500 60%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', padding: '3rem 1.5rem 4rem',
      position: 'relative', overflow: 'hidden',
    }}>
      <Stars />

      <div style={{ textAlign: 'center', marginBottom: '1rem', position: 'relative', zIndex: 2, animation: 'fadeUp 0.6s ease both' }}>
        <span className="badge">Level 6 — memory game</span>
        <h2 style={{
          fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          color: '#F5C518', marginTop: '0.6rem', marginBottom: '0.3rem',
        }}>Find the pairs 💛</h2>
        <p style={{ fontFamily: 'Caveat', fontSize: '1rem', color: 'rgba(253,250,242,0.4)' }}>
          {won ? `Done in ${moves} moves! 🎉` : `${matched.length} / ${PAIRS.length} matched · ${moves} moves`}
        </p>
      </div>

      <div style={{ minHeight: '2rem', marginBottom: '0.75rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        {roast && !won && (
          <p key={roastKey} style={{
            fontFamily: 'Caveat', fontSize: '1.1rem', color: '#E8527A',
            animation: 'fadeUp 0.3s ease both',
          }}>
            {roast}
          </p>
        )}
        {won && (
          <p style={{
            fontFamily: 'Caveat', fontSize: '1.2rem', color: '#F5C518',
            animation: 'fadeUp 0.4s ease both',
          }}>
            You remembered all of them 💛 just like I remember everything about you.
          </p>
        )}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 12,
        width: '100%',
        maxWidth: 560,
        position: 'relative',
        zIndex: 2,
        animation: 'fadeUp 0.7s 0.2s ease both',
      }}>
        {deck.map((card, idx) => {
          const isFaceUp  = flipped.includes(idx) || matched.includes(card.id)
          const isMatched = matched.includes(card.id)
          const isShaking = shakePair.includes(idx)

          return (
            <MemCard
              key={card.uid}
              card={card}
              isFaceUp={isFaceUp}
              isMatched={isMatched}
              isShaking={isShaking}
              onClick={() => flipCard(idx)}
            />
          )
        })}
      </div>

      {won && (
        <div style={{ marginTop: '2.5rem', textAlign: 'center', position: 'relative', zIndex: 2, animation: 'fadeUp 0.6s ease both' }}>
          <button
            onClick={() => { unlock(6); navigate('/arcade') }}
            style={{
              padding: '14px 44px', borderRadius: 99, background: '#F5C518',
              color: '#1A1209', border: 'none', fontFamily: 'DM Sans',
              fontWeight: 500, fontSize: '1rem', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(245,197,24,0.45)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Continue ✦
          </button>
        </div>
      )}
    </div>
  )
}

function MemCard({ card, isFaceUp, isMatched, isShaking, onClick }) {
  // Simple sanitizer for class names
  const safeId = card.uid.replace(/[^a-z0-9]/gi, '');
  
  return (
    <div
      onClick={!isFaceUp ? onClick : undefined}
      style={{
        aspectRatio: '1',
        perspective: 600,
        animation: isShaking ? 'shake 0.4s ease' : 'none',
        cursor: isFaceUp ? 'default' : 'pointer'
      }}
    >
      <style>{`
        .mem-inner-${safeId} {
          transition: transform 0.45s cubic-bezier(0.4,0,0.2,1);
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
          height: 100%;
          transform: ${isFaceUp ? 'rotateY(180deg)' : 'rotateY(0deg)'};
        }
        .mem-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 10px;
          overflow: hidden;
        }
        .mem-back-face {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className={`mem-inner-${safeId}`}>
        {/* Card back — question mark */}
        <div
          className="mem-face"
          style={{
            background: 'rgba(245,197,24,0.06)',
            border: '1.5px solid rgba(245,197,24,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => {
            if (!isFaceUp) {
              e.currentTarget.style.borderColor = 'rgba(245,197,24,0.5)'
              e.currentTarget.style.background = 'rgba(245,197,24,0.12)'
            }
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(245,197,24,0.2)'
            e.currentTarget.style.background = 'rgba(245,197,24,0.06)'
          }}
        >
          <span style={{ fontFamily: 'Playfair Display', fontSize: '1.6rem', color: 'rgba(245,197,24,0.3)', fontStyle: 'italic' }}>?</span>
        </div>

        {/* Card front — photo */}
        <div
          className="mem-face mem-back-face"
          style={{
            background: card.color,
            border: isMatched
              ? '2px solid rgba(245,197,24,0.7)'
              : '1.5px solid rgba(245,197,24,0.3)',
            boxShadow: isMatched ? '0 0 16px rgba(245,197,24,0.3)' : 'none',
          }}
        >
          {card.photo ? (
            <img
              src={card.photo}
              alt={card.label}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div style={{
              width: '100%', height: '100%',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 4, padding: 8,
            }}>
              <span style={{ fontSize: '1.4rem' }}>📷</span>
              <span style={{
                fontFamily: 'Caveat', fontSize: '0.7rem',
                color: 'rgba(245,197,24,0.35)', textAlign: 'center',
              }}>{card.label}</span>
            </div>
          )}

          {isMatched && (
            <div style={{
              position: 'absolute', top: 6, right: 6,
              width: 18, height: 18, borderRadius: '50%',
              background: '#F5C518', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: '0.6rem', color: '#1A1209', fontWeight: 700 }}>✓</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}