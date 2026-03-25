import { useGame, LEVELS } from '../context/GameContext'

export default function ProgressBar() {
  const { unlockedUpTo } = useGame()
  const pct = Math.round((unlockedUpTo / (LEVELS.length - 1)) * 100)

  return (
    <div
      id="progress-bar"
      style={{ width: `${pct}%` }}
    />
  )
}
