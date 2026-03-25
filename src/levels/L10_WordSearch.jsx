import { useState, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/GameContext'

// Simplified word list — removed hard/long words
const WORDS = [
  'AKANKSHA', 'RITHVIK', 'VALENTINES', 'ROSES',
  'STAGE', 'CAMERA', 'LETTERS', 'AUTORIDES',
  'BANGARAM', 'LOVE', 'KUNDETI KOMMU', 'NERD',
  'REDDY', 'BABY', 'SREEOTSAV',
]

// Internal list uses no-space versions for grid placement
const GRID_WORDS = WORDS.map(w => w.replace(/\s/g, ''))

const SECRET_MSG = 'I FELL FIRST'
const GRID_COLS  = 16
const GRID_ROWS  = 15

// Directions: mostly horizontal (right), a few vertical (down)
// No diagonals
const H_DIR = [0, 1]   // horizontal right
const V_DIR = [1, 0]   // vertical down

function buildGrid(words) {
  const grid  = Array.from({ length: GRID_ROWS }, () => Array(GRID_COLS).fill(''))
  const placed = []

  const canPlace = (word, r, c, dr, dc) => {
    for (let i = 0; i < word.length; i++) {
      const nr = r + i * dr
      const nc = c + i * dc
      if (nr < 0 || nr >= GRID_ROWS || nc < 0 || nc >= GRID_COLS) return false
      if (grid[nr][nc] !== '' && grid[nr][nc] !== word[i]) return false
    }
    return true
  }

  const placeWord = (word, forceVertical = false) => {
    // Try up to 300 times
    for (let attempt = 0; attempt < 300; attempt++) {
      const useVertical = forceVertical || Math.random() < 0.25
      const [dr, dc] = useVertical ? V_DIR : H_DIR
      const r = Math.floor(Math.random() * GRID_ROWS)
      const c = Math.floor(Math.random() * GRID_COLS)
      if (!canPlace(word, r, c, dr, dc)) continue
      const cells = []
      for (let i = 0; i < word.length; i++) {
        const nr = r + i * dr
        const nc = c + i * dc
        grid[nr][nc] = word[i]
        cells.push({ r: nr, c: nc })
      }
      placed.push({ word, cells })
      return true
    }
    return false
  }

  // Sort longest first
  const sorted = [...words].sort((a, b) => b.length - a.length)
  // Force a few to be vertical for variety
  sorted.forEach((w, i) => placeWord(w, i % 5 === 4))

  // Place secret message letters in remaining empty cells
  const secretLetters = SECRET_MSG.replace(/\s/g, '').split('')
  const emptyCells = []
  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      if (grid[r][c] === '') emptyCells.push({ r, c })
    }
  }
  emptyCells.sort(() => Math.random() - 0.5)
  secretLetters.forEach((letter, i) => {
    if (i < emptyCells.length) grid[emptyCells[i].r][emptyCells[i].c] = letter
  })

  // Fill remaining with random consonants (less confusing)
  const fillers = 'BCDFGHJKLMNPQRSTVWXZ'
  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      if (grid[r][c] === '') {
        grid[r][c] = fillers[Math.floor(Math.random() * fillers.length)]
      }
    }
  }

  return { grid, placed }
}

const cellKey = (r, c) => `${r},${c}`

// Hints — first letter of each word revealed after 60 seconds
const HINT_DELAY_MS = 60000

export default function L10_WordSearch() {
  const navigate   = useNavigate()
  const { unlock } = useGame()

  const [{ grid, placed }] = useState(() => buildGrid(GRID_WORDS))
  const [foundWords, setFound]       = useState(new Set())
  const [foundCells, setFoundCells]  = useState(new Set())
  const [selecting, setSelecting]    = useState(false)
  const [selStart, setSelStart]      = useState(null)
  const [selCurrent, setSelCurrent]  = useState(null)
  const [won, setWon]                = useState(false)
  const [showSecret, setShowSecret]  = useState(false)
  const [hints, setHints]            = useState(new Set())
  const [hintCount, setHintCount]    = useState(0)
  const gridRef = useRef(null)

  const getLineCells = useCallback((start, end) => {
    if (!start || !end) return []
    const dr = Math.sign(end.r - start.r)
    const dc = Math.sign(end.c - start.c)
    const diffR = Math.abs(end.r - start.r)
    const diffC = Math.abs(end.c - start.c)
    // Only horizontal or vertical
    if (diffR !== 0 && diffC !== 0) return []
    const steps = Math.max(diffR, diffC)
    const cells = []
    for (let i = 0; i <= steps; i++) {
      cells.push({ r: start.r + i * dr, c: start.c + i * dc })
    }
    return cells
  }, [])

  const checkSelection = useCallback((cells) => {
    if (cells.length < 2) return
    const word    = cells.map(({ r, c }) => grid[r][c]).join('')
    const wordRev = word.split('').reverse().join('')
    const match   = placed.find(p =>
      (p.word === word || p.word === wordRev) && !foundWords.has(p.word)
    )
    if (match) {
      const nf = new Set(foundWords); nf.add(match.word); setFound(nf)
      const nc = new Set(foundCells)
      match.cells.forEach(({ r, c }) => nc.add(cellKey(r, c)))
      setFoundCells(nc)
      if (nf.size === placed.length) {
        setWon(true)
        setTimeout(() => setShowSecret(true), 800)
      }
    }
  }, [grid, placed, foundWords, foundCells])

  const getCellFromEvent = useCallback((e, el) => {
    const rect     = el.getBoundingClientRect()
    const cellSize = rect.width / GRID_COLS
    const c = Math.floor((e.clientX - rect.left) / cellSize)
    const r = Math.floor((e.clientY - rect.top)  / cellSize)
    if (r < 0 || r >= GRID_ROWS || c < 0 || c >= GRID_COLS) return null
    return { r, c }
  }, [])

  const onMouseDown = useCallback((e) => {
    const cell = getCellFromEvent(e, gridRef.current)
    if (!cell) return
    setSelecting(true); setSelStart(cell); setSelCurrent(cell)
  }, [getCellFromEvent])

  const onMouseMove = useCallback((e) => {
    if (!selecting) return
    const cell = getCellFromEvent(e, gridRef.current)
    if (cell) setSelCurrent(cell)
  }, [selecting, getCellFromEvent])

  const onMouseUp = useCallback(() => {
    if (!selecting) return
    const cells = getLineCells(selStart, selCurrent)
    checkSelection(cells)
    setSelecting(false); setSelStart(null); setSelCurrent(null)
  }, [selecting, selStart, selCurrent, getLineCells, checkSelection])

  const revealHint = useCallback(() => {
    // Find first unfound word and reveal its first letter's position
    const unfound = placed.filter(p => !foundWords.has(p.word))
    if (!unfound.length) return
    const target = unfound[hintCount % unfound.length]
    const firstCell = target.cells[0]
    const key = cellKey(firstCell.r, firstCell.c)
    setHints(prev => new Set([...prev, key]))
    setHintCount(c => c + 1)
  }, [placed, foundWords, hintCount])

  const selCells = new Set(
    getLineCells(selStart, selCurrent).map(({ r, c }) => cellKey(r, c))
  )

  const CELL_SIZE = Math.min(38, Math.floor(560 / GRID_COLS))

  // Display word list with original spacing (KUNDETI KOMMU)
  const displayWord = (w) => {
    if (w === 'KUNDETIKOMMU') return 'KUNDETI KOMMU'
    return w
  }

  return (
    <div
      style={{
        width: '100%', minHeight: '100vh',
        background: 'radial-gradient(ellipse at 50% 0%, #1C1000 0%, #080500 60%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', padding: '3rem 1.5rem 5rem',
        position: 'relative',
      }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <Stars />

      <div style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative', zIndex: 2, animation: 'fadeUp 0.6s ease both' }}>
        <span className="badge">Level 10 — word search</span>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#F5C518', marginTop: '0.6rem', marginBottom: '0.3rem' }}>
          Find us in the grid
        </h2>
        <p style={{ fontFamily: 'Caveat', fontSize: '1rem', color: 'rgba(253,250,242,0.4)' }}>
          {won ? 'All found! 💛' : `${foundWords.size} / ${placed.length} found · click and drag to highlight`}
        </p>
      </div>

      <div style={{
        display: 'flex', gap: '2rem', alignItems: 'flex-start',
        width: '100%', maxWidth: 860,
        position: 'relative', zIndex: 2,
        flexWrap: 'wrap', justifyContent: 'center',
        animation: 'fadeUp 0.7s 0.1s ease both',
      }}>
        {/* Grid */}
        <div
          ref={gridRef}
          onMouseDown={onMouseDown}
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${GRID_COLS}, ${CELL_SIZE}px)`,
            gridTemplateRows: `repeat(${GRID_ROWS}, ${CELL_SIZE}px)`,
            border: '1px solid rgba(245,197,24,0.15)',
            borderRadius: 10, overflow: 'hidden',
            userSelect: 'none', cursor: 'crosshair', flexShrink: 0,
          }}
        >
          {grid.map((row, r) =>
            row.map((letter, c) => {
              const key      = cellKey(r, c)
              const isSel    = selCells.has(key)
              const isFound  = foundCells.has(key)
              const isHinted = hints.has(key) && !isFound

              return (
                <div key={key} style={{
                  width: CELL_SIZE, height: CELL_SIZE,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'DM Sans', fontWeight: 500,
                  fontSize: Math.max(11, CELL_SIZE * 0.44),
                  color: isFound ? '#1A1209'
                    : isSel ? '#1A1209'
                    : isHinted ? '#F5C518'
                    : 'rgba(253,250,242,0.65)',
                  background: isFound ? 'rgba(245,197,24,0.85)'
                    : isSel ? 'rgba(245,197,24,0.5)'
                    : isHinted ? 'rgba(245,197,24,0.15)'
                    : (r + c) % 2 === 0 ? 'rgba(245,197,24,0.02)' : 'transparent',
                  transition: 'background 0.1s, color 0.1s',
                  border: '0.5px solid rgba(245,197,24,0.06)',
                }}>
                  {letter}
                </div>
              )
            })
          )}
        </div>

        {/* Word list + hint button */}
        <div style={{ minWidth: 180 }}>
          <p style={{ fontFamily: 'Caveat', fontSize: '0.9rem', color: 'rgba(245,197,24,0.4)', marginBottom: '0.75rem' }}>
            Find these words:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: '1.5rem' }}>
            {WORDS.map(word => {
              const gridWord = word.replace(/\s/g, '')
              const isFound  = foundWords.has(gridWord) || placed.find(p => p.word === gridWord && foundWords.has(p.word))
              return (
                <div key={word} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: '0.65rem', color: isFound ? '#F5C518' : 'rgba(245,197,24,0.3)' }}>
                    {isFound ? '✓' : '○'}
                  </span>
                  <span style={{
                    fontFamily: 'DM Sans', fontSize: '0.82rem',
                    color: isFound ? '#F5C518' : 'rgba(253,250,242,0.5)',
                    textDecoration: isFound ? 'line-through' : 'none',
                    textDecorationColor: 'rgba(245,197,24,0.4)',
                    transition: 'color 0.3s', letterSpacing: '0.04em',
                  }}>
                    {word}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Hint button */}
          {!won && (
            <button
              onClick={revealHint}
              style={{
                padding: '8px 18px', borderRadius: 99,
                background: 'rgba(245,197,24,0.08)',
                border: '1px solid rgba(245,197,24,0.3)',
                color: 'rgba(245,197,24,0.7)',
                fontFamily: 'DM Sans', fontSize: '0.8rem',
                transition: 'all 0.2s', width: '100%',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,197,24,0.16)'; e.currentTarget.style.color = '#F5C518' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(245,197,24,0.08)'; e.currentTarget.style.color = 'rgba(245,197,24,0.7)' }}
            >
              Hint 💛 ({hintCount} used)
            </button>
          )}

          {/* Dev skip */}
          <button
            onClick={() => { unlock(10); navigate('/meter') }}
            style={{
              marginTop: 8, padding: '6px 18px', borderRadius: 99,
              background: 'transparent', border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.2)', fontFamily: 'DM Sans',
              fontSize: '0.72rem', width: '100%', transition: 'color 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.2)' }}
          >
            skip (dev only)
          </button>
        </div>
      </div>

      {/* Secret message reveal */}
      {showSecret && (
        <div style={{
          width: '100%', maxWidth: 560, marginTop: '2rem',
          position: 'relative', zIndex: 2,
          animation: 'scaleIn 0.6s cubic-bezier(0.34,1.56,0.64,1) both',
        }}>
          <div style={{
            padding: '24px 28px', borderRadius: 16,
            background: 'rgba(245,197,24,0.07)',
            border: '1px solid rgba(245,197,24,0.3)',
            textAlign: 'center',
          }}>
            <p style={{ fontFamily: 'Caveat', fontSize: '0.9rem', color: 'rgba(245,197,24,0.45)', marginBottom: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              hidden message ✦
            </p>
            <p style={{
              fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem, 5vw, 3rem)',
              fontStyle: 'italic', color: '#F5C518',
              textShadow: '0 0 30px rgba(245,197,24,0.4)', marginBottom: '0.5rem',
            }}>
              {SECRET_MSG}
            </p>
            <p style={{ fontFamily: 'Caveat', fontSize: '1rem', color: 'rgba(253,250,242,0.45)' }}>
              — and now you have proof too. 💛
            </p>
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button
              onClick={() => { unlock(10); navigate('/meter') }}
              style={{
                padding: '14px 44px', borderRadius: 99, background: '#F5C518',
                color: '#1A1209', border: 'none', fontFamily: 'DM Sans',
                fontWeight: 500, fontSize: '1rem', transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(245,197,24,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Continue ✦
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function Stars() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {Array.from({ length: 28 }).map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: 2, height: 2, borderRadius: '50%',
          background: 'white',
          opacity: Math.random() * 0.3 + 0.05,
          animation: `starTwinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }} />
      ))}
    </div>
  )
}
