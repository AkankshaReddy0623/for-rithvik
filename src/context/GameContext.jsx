import { createContext, useContext, useState, useEffect } from 'react'

const GameContext = createContext(null)

export const LEVELS = [
  'lock',        // 0
  'welcome',     // 1
  'gesture',     // 2
  'voice',       // 3
  'memories',    // 4
  'compat',      // 5
  'memgame',     // 6
  'arcade',      // 7
  'jigsaw',      // 8
  'soundtrack',  // 9
  'wordsearch',  // 10
  'meter',       // 11
  'ask',         // 12
  'finale',      // 13
]

export function GameProvider({ children }) {
  const [unlockedUpTo, setUnlockedUpTo] = useState(() => {
    const saved = localStorage.getItem('rithvik_progress')
    return saved ? parseInt(saved) : 0
  })

  const unlock = (levelIndex) => {
    const next = Math.max(unlockedUpTo, levelIndex + 1)
    setUnlockedUpTo(next)
    localStorage.setItem('rithvik_progress', String(next))
  }

  const resetProgress = () => {
    setUnlockedUpTo(0)
    localStorage.removeItem('rithvik_progress')
  }

  return (
    <GameContext.Provider value={{ unlockedUpTo, unlock, resetProgress, LEVELS }}>
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  return useContext(GameContext)
}
