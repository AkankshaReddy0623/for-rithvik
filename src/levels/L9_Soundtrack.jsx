import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/GameContext'

// ─────────────────────────────────────────────────────────────────
//  SONGS — correct order is the answer
// ─────────────────────────────────────────────────────────────────
const SONGS = [
  { id: 1,  title: 'Someone To You',                 artist: 'BANNERS',                                   spotifyId: '2f0pn9DkEJwAzXApnFh5cr' },
  { id: 2,  title: 'I Like Me Better',                artist: 'Lauv',                                      spotifyId: '4MagTPnkPiDuIa4P8GtW1b' },
  { id: 3,  title: 'Daylight',                        artist: 'Taylor Swift',                              spotifyId: '1fzAuUVbzlhZ1lJAx9PtY6' },
  { id: 4,  title: 'What If (I Told You I Like You)',   artist: 'Johnny Orlando & Mackenzie Ziegler',         spotifyId: '4v7DgEMw6EvYyuQ4eWFD9l' },
  { id: 5,  title: "You Belong With Me (Taylor's Version)", artist: 'Taylor Swift',                        spotifyId: '1qrpoAMXodY6895hGKoUpA' },
  { id: 6,  title: 'Make You Mine',                     artist: 'PUBLIC',                                    spotifyId: '5iFwAOB2TFkPJk8sMlxP8g' },
  { id: 7,  title: 'double take',                       artist: 'dhruv',                                     spotifyId: '0QzuaeCEEOV40Pn7IvKEny' },
  { id: 8,  title: 'Nenu Nenuga',                       artist: 'S. P. Charan',                              spotifyId: '1GIX3Z78P6PJg8srUYAqjF' },
  { id: 9,  title: 'Lavender Haze',                     artist: 'Taylor Swift',                              spotifyId: '1BxfuPKGuaTgP7aM0Bbdwr' },
  { id: 10, title: 'Haareya',                           artist: 'Sachin-Jigar, Arijit Singh, Priya Saraiya', spotifyId: '1VvGJIAjhGdB7InVP9NA7V' },
  { id: 11, title: 'So High School',                    artist: 'Taylor Swift',                              spotifyId: '7Mts0OfPorF4iwOomvfqn1' },
  { id: 12, title: 'Dhooram',                           artist: 'Nikhita Gandhi',                            spotifyId: '6iFZDaeMMYmVUJu7UljN1N' },
  { id: 13, title: "They Don't Know About Us",          artist: 'One Direction',                             spotifyId: '6M31fPFCYB8Job3MCjjrDV' },
  { id: 14, title: 'Call It What You Want',             artist: 'Taylor Swift',                              spotifyId: '1GwMQaZz6Au3QLDbjbMdme' },
  { id: 15, title: 'Afeemi',                             artist: 'Sachin-Jigar, Sanah Moidutty',              spotifyId: '4jpibRkVyl2p8l0pqRbdMa' },
  { id: 16, title: 'Mari Mari',                         artist: 'Gowthami',                                  spotifyId: '5hT2Bw0BTUEHf2QUdRWPJz' },
  { id: 17, title: 'Hoyna Hoyna',                       artist: 'Anirudh Ravichander, Inno Genga',           spotifyId: '7hADNKBDHS8MblpUzLebLf' },
  { id: 18, title: 'Teenage Dream',                     artist: 'Stephen Dawes',                             spotifyId: '3GWaFFi6TlPcZLYmCCHZ9O' },
  { id: 19, title: 'Mere Liye Tum Kaafi Ho',             artist: 'Ayushmann Khurrana, Tanishk-Vayu',          spotifyId: '3qrdLVOClRU4yPkcXZ7c5u' },
  { id: 20, title: 'All Of The Girls You Loved Before', artist: 'Taylor Swift',                              spotifyId: '4P9Q0GojKVXpRTJCaL3kyy' },
  { id: 21, title: 'Baby',                               artist: 'Justin Bieber, Ludacris',                    spotifyId: '6epn3r7S14KUqlReYr77hA' },
  { id: 22, title: 'You & I',                           artist: 'One Direction',                             spotifyId: '2afCBiru10AFckfOa49wIa' },
]

const WIN_MESSAGE = `Every song in this playlist was playing in my head when I thought of you. Someone To You was the beginning of a feeling I couldn't name. You & I is where I want us to end up. Everything in between? That's us. That's this. That's everything. 💛`

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function L9_Soundtrack() {
  const navigate   = useNavigate()
  const { unlock } = useGame()

  const [order, setOrder]         = useState(() => shuffle([...SONGS]))
  const [draggingIdx, setDragging] = useState(null)
  const [dragOverIdx, setDragOver] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult]       = useState(null)
  const [won, setWon]             = useState(false)
  const [expandedId, setExpanded] = useState(null)
  const [attempts, setAttempts]   = useState(0)

  const onDragStart = useCallback((e, idx) => {
    setDragging(idx)
    e.dataTransfer.effectAllowed = 'move'
  }, [])

  const onDragOver = useCallback((e, idx) => {
    e.preventDefault()
    setDragOver(idx)
  }, [])

  const onDrop = useCallback((e, dropIdx) => {
    e.preventDefault()
    const dragIdx = draggingIdx
    if (dragIdx === null || dragIdx === dropIdx) {
      setDragging(null); setDragOver(null); return
    }
    const next = [...order]
    const [moved] = next.splice(dragIdx, 1)
    next.splice(dropIdx, 0, moved)
    setOrder(next)
    setDragging(null)
    setDragOver(null)
    setSubmitted(false)
    setResult(null)
  }, [draggingIdx, order])

  const onDragEnd = useCallback(() => {
    setDragging(null)
    setDragOver(null)
  }, [])

  const checkOrder = useCallback(() => {
    const correct = []
    const wrong   = []
    order.forEach((song, idx) => {
      if (song.id === SONGS[idx].id) correct.push(idx)
      else wrong.push(idx)
    })
    setSubmitted(true)
    setResult({ correct, wrong })
    setAttempts(a => a + 1)
    if (wrong.length === 0) {
      setWon(true)
    }
  }, [order])

  const resetOrder = useCallback(() => {
    setOrder(shuffle([...SONGS]))
    setSubmitted(false)
    setResult(null)
  }, [])

  const liveCorrect = order.filter((song, idx) => song.id === SONGS[idx].id).length

  return (
    <div style={{
      width: '100%', minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 0%, #1C1000 0%, #080500 60%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', padding: '3rem 1.5rem 5rem',
      position: 'relative',
    }}>
      <Stars />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.2rem', position: 'relative', zIndex: 2, animation: 'fadeUp 0.6s ease both' }}>
        <span className="badge">Level 9 — AR Soundtrack</span>
        <h2 style={{
          fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          color: '#F5C518', marginTop: '0.6rem', marginBottom: '0.3rem',
        }}>Put the playlist in order</h2>
        <p style={{ fontFamily: 'Caveat', fontSize: '1rem', color: 'rgba(253,250,242,0.4)' }}>
          drag to rearrange · click a song to preview it
        </p>
      </div>

      {/* Live counter */}
      {!won && (
        <div style={{
          position: 'relative', zIndex: 2, marginBottom: '1rem',
          padding: '10px 20px', borderRadius: 10,
          background: liveCorrect === 22 ? 'rgba(245,197,24,0.12)' : 'rgba(255,255,255,0.04)',
          border: liveCorrect === 22 ? '1px solid rgba(245,197,24,0.4)' : '1px solid rgba(255,255,255,0.08)',
          textAlign: 'center', transition: 'all 0.3s',
        }}>
          <p style={{
            fontFamily: 'Caveat', fontSize: '1.1rem',
            color: liveCorrect === 22 ? '#F5C518' : 'rgba(253,250,242,0.55)',
          }}>
            {liveCorrect === 22 ? 'All 22 in the right place! Hit Check ✦' : `${liveCorrect} / 22 in the right position`}
          </p>
        </div>
      )}

      {submitted && !won && (
        <div style={{
          position: 'relative', zIndex: 2, marginBottom: '0.5rem',
          padding: '8px 20px', borderRadius: 10,
          background: 'rgba(232,82,122,0.08)', border: '1px solid rgba(232,82,122,0.2)',
          animation: 'fadeUp 0.4s ease both', textAlign: 'center',
        }}>
          <p style={{ fontFamily: 'Caveat', fontSize: '1rem', color: '#E8527A' }}>
            Not quite — keep rearranging 💛
          </p>
        </div>
      )}

      {/* Song list */}
      <div style={{
        width: '100%', maxWidth: 640,
        position: 'relative', zIndex: 2,
        animation: 'fadeUp 0.7s 0.1s ease both',
      }}>
        {order.map((song, idx) => {
          const isCorrect = submitted && result?.correct.includes(idx)
          const isWrong   = submitted && result?.wrong.includes(idx)
          const isDragging = draggingIdx === idx
          const isDragOver = dragOverIdx === idx
          const isExpanded = expandedId === song.id

          return (
            <div
              key={song.id}
              draggable
              onDragStart={e => onDragStart(e, idx)}
              onDragOver={e => onDragOver(e, idx)}
              onDrop={e => onDrop(e, idx)}
              onDragEnd={onDragEnd}
              style={{
                marginBottom: 6,
                opacity: isDragging ? 0.4 : 1,
                transform: isDragOver ? 'translateY(-3px)' : 'translateY(0)',
                transition: 'transform 0.15s, opacity 0.15s',
              }}
            >
              <div style={{
                background: isCorrect ? 'rgba(245,197,24,0.1)' : isWrong ? 'rgba(232,82,122,0.08)' : 'rgba(255,255,255,0.03)',
                border: isCorrect ? '1px solid rgba(245,197,24,0.4)' : isWrong ? '1px solid rgba(232,82,122,0.25)' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: 10,
                overflow: 'hidden',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', gap: 12 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3, cursor: 'grab', opacity: 0.35 }}>
                    {[0,1,2].map(i => <div key={i} style={{ width: 16, height: 1.5, background: '#FDFAF2', borderRadius: 99 }} />)}
                  </div>

                  <span style={{
                    fontFamily: 'Playfair Display', fontStyle: 'italic',
                    fontSize: '1rem', color: isCorrect ? '#F5C518' : isWrong ? '#E8527A' : 'rgba(253,250,242,0.25)',
                    minWidth: 24, textAlign: 'center'
                  }}>
                    {idx + 1}
                  </span>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '0.9rem', color: '#FDFAF2', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {song.title}
                    </p>
                    <p style={{ fontFamily: 'DM Sans', fontSize: '0.75rem', color: 'rgba(253,250,242,0.4)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {song.artist}
                    </p>
                  </div>

                  {isCorrect && <span>✓</span>}
                  {isWrong   && <span style={{ color: '#E8527A' }}>✗</span>}

                  <button
                    onClick={() => setExpanded(isExpanded ? null : song.id)}
                    style={{ background: 'transparent', border: 'none', color: 'rgba(253,250,242,0.4)', fontSize: '0.75rem', cursor: 'pointer' }}
                  >
                    {isExpanded ? '▲' : '▼'}
                  </button>
                </div>

                {isExpanded && (
                  <div style={{ padding: '0 12px 12px', animation: 'fadeIn 0.3s ease both' }}>
                    <iframe
                      src={`https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator&theme=0`}
                      width="100%"
                      height="80"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      style={{ borderRadius: 8 }}
                      title={song.title}
                    />
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {!won && (
        <div style={{ display: 'flex', gap: 12, marginTop: '1.5rem', position: 'relative', zIndex: 2 }}>
          <button onClick={resetOrder} className="btn-outline" style={{ padding: '12px 24px' }}>
            Shuffle again
          </button>
          <button onClick={checkOrder} className="btn-primary" style={{ padding: '12px 36px' }}>
            Check order ✦
          </button>
        </div>
      )}

      {won && (
        <div style={{ width: '100%', maxWidth: 580, marginTop: '2rem', position: 'relative', zIndex: 2, animation: 'fadeUp 0.7s ease both', textAlign: 'center' }}>
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎵</p>
            <p className="font-hand" style={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
              {WIN_MESSAGE}
            </p>
          </div>
          <button
            onClick={() => { unlock(9); navigate('/wordsearch') }}
            className="btn-primary"
            style={{ padding: '14px 44px' }}
          >
            Continue ✦
          </button>
        </div>
      )}
    </div>
  )
}

function Stars() {
  return (
    <div className="stars-bg">
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: 2, height: 2, borderRadius: '50%',
          background: i % 6 === 0 ? '#F5C518' : 'white',
          opacity: Math.random() * 0.35 + 0.05,
          animation: `starTwinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }} />
      ))}
    </div>
  )
}