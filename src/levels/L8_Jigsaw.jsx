import { useEffect, useRef, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/GameContext'

const PHOTO_SRC  = '/photos/jig.jpg'
const COLS       = 4
const ROWS       = 5
const TOTAL      = COLS * ROWS          // 20
const SNAP_DIST  = 28                   // px — how close before snapping

const COMPLETION_CAPTION = `Every piece in the right place — just like you and I. You walked into my life and somehow fit perfectly into every single part of it. This is us, put together. 💛`

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function L8_Jigsaw() {
  const navigate   = useNavigate()
  const { unlock } = useGame()

  const boardRef   = useRef(null)   // the drop zone canvas
  const trayRef    = useRef(null)   // the pieces tray canvas
  const imgRef     = useRef(null)
  const stateRef   = useRef({
    pieces: [],          // all 20 piece objects
    dragging: null,      // { pieceIdx, offsetX, offsetY, fromTray }
    placed: new Set(),   // indices of correctly placed pieces
    boardW: 0, boardH: 0,
    pieceW: 0, pieceH: 0,
    trayW: 0, trayH: 0,
    trayLayout: [],      // { x, y } grid positions in tray
  })

  const [imgLoaded, setImgLoaded]   = useState(false)
  const [imgError, setImgError]     = useState(false)
  const [placedCount, setPlacedCount] = useState(0)
  const [won, setWon]               = useState(false)
  const [showCaption, setShowCaption] = useState(false)

  // ── Load image ────────────────────────────────────────────────
  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload  = () => { imgRef.current = img; setImgLoaded(true) }
    img.onerror = () => setImgError(true)
    img.src = PHOTO_SRC
  }, [])

  // ── Init puzzle once image loaded ─────────────────────────────
  useEffect(() => {
    if (!imgLoaded) return
    const board = boardRef.current
    const tray  = trayRef.current
    if (!board || !tray) return

    const s      = stateRef.current
    const bW     = board.offsetWidth  || 400
    const bH     = Math.round(bW * (ROWS / COLS))
    board.width  = bW
    board.height = bH

    const pW = Math.floor(bW / COLS)
    const pH = Math.floor(bH / ROWS)
    s.boardW = bW; s.boardH = bH
    s.pieceW = pW; s.pieceH = pH

    // Tray layout — 4 cols, 5 rows of pieces
    const tW = bW
    tray.width  = tW
    tray.height = Math.ceil(TOTAL / COLS) * (pH + 8) + 16
    s.trayW = tW; s.trayH = tray.height

    // Build shuffled piece list
    const indices = shuffle(Array.from({ length: TOTAL }, (_, i) => i))
    s.pieces = indices.map((origIdx, slotIdx) => {
      const origCol = origIdx % COLS
      const origRow = Math.floor(origIdx / COLS)
      const trayCol = slotIdx % COLS
      const trayRow = Math.floor(slotIdx / COLS)
      return {
        origIdx,
        origCol, origRow,
        // current position — starts in tray
        x: trayCol * (pW + 4) + 4,
        y: trayRow * (pH + 8) + 8,
        inTray: true,
        // board target position
        targetX: origCol * pW,
        targetY: origRow * pH,
        placed: false,
      }
    })

    s.placed = new Set()
    drawAll()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgLoaded])

  // ── Draw helpers ──────────────────────────────────────────────
  const drawPiece = useCallback((ctx, piece, x, y, isHovered) => {
    const s    = stateRef.current
    const img  = imgRef.current
    if (!img) return
    const { pieceW: pW, pieceH: pH, boardW: bW, boardH: bH } = s

    ctx.save()
    // Clip to piece shape with small inset
    const inset = 1
    ctx.beginPath()
    ctx.roundRect(x + inset, y + inset, pW - inset * 2, pH - inset * 2, 3)
    ctx.clip()

    // Draw the slice of the image
    const sx = piece.origCol * (img.naturalWidth  / COLS)
    const sy = piece.origRow * (img.naturalHeight / ROWS)
    const sw = img.naturalWidth  / COLS
    const sh = img.naturalHeight / ROWS
    ctx.drawImage(img, sx, sy, sw, sh, x, y, pW, pH)

    // Dim if not placed
    if (!piece.placed) {
      ctx.fillStyle = 'rgba(0,0,0,0.12)'
      ctx.fillRect(x, y, pW, pH)
    }

    ctx.restore()

    // Border
    ctx.strokeStyle = piece.placed
      ? 'rgba(245,197,24,0.7)'
      : isHovered
      ? 'rgba(245,197,24,0.5)'
      : 'rgba(245,197,24,0.2)'
    ctx.lineWidth = piece.placed ? 2 : 1
    ctx.shadowColor = piece.placed ? 'rgba(245,197,24,0.4)' : 'transparent'
    ctx.shadowBlur  = piece.placed ? 6 : 0
    ctx.beginPath()
    ctx.roundRect(x + 1, y + 1, pW - 2, pH - 2, 3)
    ctx.stroke()
    ctx.shadowBlur = 0
  }, [])

  const drawBoard = useCallback(() => {
    const canvas = boardRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const s   = stateRef.current
    const { boardW: bW, boardH: bH, pieceW: pW, pieceH: pH } = s

    ctx.clearRect(0, 0, bW, bH)

    // Board background grid
    ctx.fillStyle = 'rgba(245,197,24,0.03)'
    ctx.fillRect(0, 0, bW, bH)
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        ctx.strokeStyle = 'rgba(245,197,24,0.1)'
        ctx.lineWidth = 0.5
        ctx.strokeRect(c * pW, r * pH, pW, pH)
      }
    }

    // Draw placed pieces on board
    s.pieces.forEach(piece => {
      if (!piece.inTray && piece.placed) {
        drawPiece(ctx, piece, piece.targetX, piece.targetY, false)
      } else if (!piece.inTray && !piece.placed) {
        drawPiece(ctx, piece, piece.x, piece.y, false)
      }
    })

    // Draw dragging piece on board (if from board)
    if (s.dragging && !s.dragging.fromTray) {
      const p = s.pieces[s.dragging.pieceIdx]
      ctx.globalAlpha = 0.85
      drawPiece(ctx, p, p.x, p.y, true)
      ctx.globalAlpha = 1
    }
  }, [drawPiece])

  const drawTray = useCallback(() => {
    const canvas = trayRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const s   = stateRef.current
    const { trayW, trayH, pieceW: pW, pieceH: pH } = s

    ctx.clearRect(0, 0, trayW, trayH)
    ctx.fillStyle = 'rgba(245,197,24,0.02)'
    ctx.fillRect(0, 0, trayW, trayH)

    s.pieces.forEach(piece => {
      if (piece.inTray) {
        drawPiece(ctx, piece, piece.x, piece.y, false)
      }
    })

    if (s.dragging && s.dragging.fromTray) {
      const p = s.pieces[s.dragging.pieceIdx]
      ctx.globalAlpha = 0.85
      drawPiece(ctx, p, p.x, p.y, true)
      ctx.globalAlpha = 1
    }
  }, [drawPiece])

  const drawAll = useCallback(() => {
    drawBoard()
    drawTray()
  }, [drawBoard, drawTray])

  // ── Mouse events on BOARD ─────────────────────────────────────
  const getBoardPos = (e) => {
    const rect = boardRef.current.getBoundingClientRect()
    const scaleX = stateRef.current.boardW / rect.width
    const scaleY = stateRef.current.boardH / rect.height
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top)  * scaleY,
    }
  }

  const getTrayPos = (e) => {
    const rect   = trayRef.current.getBoundingClientRect()
    const scaleX = stateRef.current.trayW / rect.width
    const scaleY = stateRef.current.trayH / rect.height
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top)  * scaleY,
    }
  }

  const hitTest = (pieces, x, y, pW, pH, trayOnly = false, boardOnly = false) => {
    // Iterate in reverse so topmost piece is picked first
    for (let i = pieces.length - 1; i >= 0; i--) {
      const p = pieces[i]
      if (trayOnly  && !p.inTray) continue
      if (boardOnly &&  p.inTray) continue
      if (p.placed) continue
      if (x >= p.x && x <= p.x + pW && y >= p.y && y <= p.y + pH) return i
    }
    return -1
  }

  const onBoardMouseDown = useCallback((e) => {
    const s   = stateRef.current
    const pos = getBoardPos(e)
    const idx = hitTest(s.pieces, pos.x, pos.y, s.pieceW, s.pieceH, false, true)
    if (idx === -1) return
    s.dragging = {
      pieceIdx: idx,
      offsetX: pos.x - s.pieces[idx].x,
      offsetY: pos.y - s.pieces[idx].y,
      fromTray: false,
    }
  }, [])

  const onTrayMouseDown = useCallback((e) => {
    const s   = stateRef.current
    const pos = getTrayPos(e)
    const idx = hitTest(s.pieces, pos.x, pos.y, s.pieceW, s.pieceH, true)
    if (idx === -1) return
    s.dragging = {
      pieceIdx: idx,
      offsetX: pos.x - s.pieces[idx].x,
      offsetY: pos.y - s.pieces[idx].y,
      fromTray: true,
    }
  }, [])

  const onMouseMove = useCallback((e) => {
    const s = stateRef.current
    if (!s.dragging) return
    const p = s.pieces[s.dragging.pieceIdx]

    if (s.dragging.fromTray) {
      // Moving from tray — track in tray coords for now
      const pos = getTrayPos(e)
      p.x = pos.x - s.dragging.offsetX
      p.y = pos.y - s.dragging.offsetY
    } else {
      const pos = getBoardPos(e)
      p.x = pos.x - s.dragging.offsetX
      p.y = pos.y - s.dragging.offsetY
    }
    drawAll()
  }, [drawAll])

  const onMouseUp = useCallback((e) => {
    const s = stateRef.current
    if (!s.dragging) return
    const d = s.dragging
    const p = s.pieces[d.pieceIdx]

    // If dragging from tray, check if released over board
    if (d.fromTray) {
      const boardRect = boardRef.current.getBoundingClientRect()
      const overBoard = (
        e.clientX >= boardRect.left && e.clientX <= boardRect.right &&
        e.clientY >= boardRect.top  && e.clientY <= boardRect.bottom
      )
      if (overBoard) {
        // Convert to board coords
        const scaleX = s.boardW / boardRect.width
        const scaleY = s.boardH / boardRect.height
        p.x = (e.clientX - boardRect.left) * scaleX - d.offsetX
        p.y = (e.clientY - boardRect.top)  * scaleY - d.offsetY
        p.inTray = false
      } else {
        // Put back in tray original slot
        const trayCol = (d.pieceIdx) % COLS
        const trayRow = Math.floor(d.pieceIdx / COLS)
        p.x = trayCol * (s.pieceW + 4) + 4
        p.y = trayRow * (s.pieceH + 8) + 8
      }
    }

    // Try to snap to correct position
    if (!p.inTray) {
      const dx = Math.abs(p.x - p.targetX)
      const dy = Math.abs(p.y - p.targetY)
      if (dx < SNAP_DIST && dy < SNAP_DIST) {
        p.x = p.targetX
        p.y = p.targetY
        p.placed = true
        s.placed.add(d.pieceIdx)
        const newCount = s.placed.size
        setPlacedCount(newCount)
        if (newCount === TOTAL) {
          setWon(true)
          setTimeout(() => setShowCaption(true), 600)
        }
      }
    }

    s.dragging = null
    drawAll()
  }, [drawAll])

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup',   onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup',   onMouseUp)
    }
  }, [onMouseMove, onMouseUp])

  return (
    <div style={{
      width: '100%', minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 0%, #1C1000 0%, #080500 60%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', padding: '3rem 1.5rem 4rem',
      position: 'relative',
    }}>
      <Stars />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.2rem', position: 'relative', zIndex: 2, animation: 'fadeUp 0.6s ease both' }}>
        <span className="badge">Level 8 — put us together</span>
        <h2 style={{
          fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          color: '#F5C518', marginTop: '0.6rem', marginBottom: '0.3rem',
        }}>Jigsaw</h2>
        <p style={{ fontFamily: 'Caveat', fontSize: '1rem', color: 'rgba(253,250,242,0.4)' }}>
          {won ? 'You did it 💛' : `${placedCount} / ${TOTAL} pieces placed · drag from below`}
        </p>
      </div>

      {/* Board */}
      <div style={{
        width: '100%', maxWidth: 480,
        position: 'relative', zIndex: 2,
        animation: 'fadeUp 0.7s 0.15s ease both',
      }}>
        {/* Drop zone */}
        <div style={{
          borderRadius: 12, overflow: 'hidden',
          border: won ? '2px solid rgba(245,197,24,0.7)' : '1.5px solid rgba(245,197,24,0.2)',
          boxShadow: won ? '0 0 40px rgba(245,197,24,0.2)' : '0 0 20px rgba(245,197,24,0.05)',
          transition: 'border-color 0.4s, box-shadow 0.4s',
          marginBottom: '1rem',
        }}>
          {imgError ? (
            <div style={{
              width: '100%', aspectRatio: '4/5',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              background: 'rgba(245,197,24,0.04)', gap: 12,
            }}>
              <span style={{ fontSize: '2.5rem' }}>📷</span>
              <p style={{ fontFamily: 'Caveat', fontSize: '1rem', color: 'rgba(245,197,24,0.4)', textAlign: 'center', padding: '0 1rem' }}>
                Add your photo at<br />public/photos/jigsaw.jpg
              </p>
            </div>
          ) : (
            <canvas
              ref={boardRef}
              style={{ display: 'block', width: '100%', aspectRatio: `${COLS}/${ROWS}` }}
              onMouseDown={onBoardMouseDown}
            />
          )}
        </div>

        {/* Progress bar */}
        <div style={{ height: 4, borderRadius: 99, background: 'rgba(245,197,24,0.1)', marginBottom: '1.5rem', overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 99,
            background: 'linear-gradient(90deg, #C49A00, #F5C518)',
            width: `${(placedCount / TOTAL) * 100}%`,
            transition: 'width 0.4s ease',
            boxShadow: '0 0 8px rgba(245,197,24,0.4)',
          }} />
        </div>

        {/* Tray heading */}
        {!won && (
          <p style={{
            fontFamily: 'Caveat', fontSize: '0.9rem',
            color: 'rgba(245,197,24,0.35)', marginBottom: '0.5rem', textAlign: 'center',
          }}>
            ↑ drag pieces up to the board
          </p>
        )}

        {/* Pieces tray */}
        {!won && (
          <div style={{
            borderRadius: 12, overflow: 'hidden',
            border: '1px solid rgba(245,197,24,0.1)',
            background: 'rgba(245,197,24,0.02)',
          }}>
            <canvas
              ref={trayRef}
              style={{ display: 'block', width: '100%' }}
              onMouseDown={onTrayMouseDown}
            />
          </div>
        )}

        {/* Win caption */}
        {showCaption && (
          <div style={{
            marginTop: '1.5rem',
            padding: '20px 24px',
            background: 'rgba(245,197,24,0.06)',
            border: '1px solid rgba(245,197,24,0.2)',
            borderRadius: 14,
            animation: 'fadeUp 0.7s ease both',
          }}>
            <p style={{
              fontFamily: 'Caveat', fontSize: '1.15rem',
              color: 'rgba(253,250,242,0.85)', lineHeight: 1.7,
              textAlign: 'center',
            }}>
              {COMPLETION_CAPTION}
            </p>
          </div>
        )}

        {/* Continue button */}
        {won && (
          <div style={{ textAlign: 'center', marginTop: '1.5rem', animation: 'fadeUp 0.6s 0.4s ease both' }}>
            <button
              onClick={() => { unlock(8); navigate('/soundtrack') }}
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
      </div>
    </div>
  )
}

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
