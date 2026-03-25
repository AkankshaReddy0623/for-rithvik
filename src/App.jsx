import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GameProvider } from './context/GameContext'
import Cursor from './components/Cursor'
import ProgressBar from './components/ProgressBar'

// Level Imports
import L0_Lock         from './levels/L0_Lock'
import L1_Welcome      from './levels/L1_Welcome'
import L2_Gesture      from './levels/L2_Gesture'
import L3_Voice        from './levels/L3_Voice'
import L4_Memories      from './levels/L4_Memories'
import L5_Compat       from './levels/L5_Compat'
import L6_MemGame      from './levels/L6_MemGame'
import L7_Arcade       from './levels/L7_Arcade'
import L8_Jigsaw       from './levels/L8_Jigsaw'
import L9_Soundtrack   from './levels/L9_Soundtrack'
import L10_WordSearch  from './levels/L10_WordSearch'
import L11_Meter       from './levels/L11_Meter'
import L12_Ask         from './levels/L12_Ask'
import L13_Finale      from './levels/L13_Finale'

export default function App() {
  return (
    <GameProvider>
      {/* Using HashRouter instead of BrowserRouter for GitHub Pages. 
          This ensures that refreshing the page doesn't lead to a 404 error.
      */}
      <HashRouter>
        <Cursor />
        <ProgressBar />
        <Routes>
          {/* Level Routes */}
          <Route path="/"           element={<L0_Lock />} />
          <Route path="/welcome"    element={<L1_Welcome />} />
          <Route path="/gesture"    element={<L2_Gesture />} />
          <Route path="/voice"      element={<L3_Voice />} />
          <Route path="/memories"   element={<L4_Memories />} />
          <Route path="/compat"     element={<L5_Compat />} />
          <Route path="/memgame"    element={<L6_MemGame />} />
          <Route path="/arcade"     element={<L7_Arcade />} />
          <Route path="/jigsaw"     element={<L8_Jigsaw />} />
          <Route path="/soundtrack" element={<L9_Soundtrack />} />
          <Route path="/wordsearch" element={<L10_WordSearch />} />
          <Route path="/meter"      element={<L11_Meter />} />
          <Route path="/ask"        element={<L12_Ask />} />
          <Route path="/finale"     element={<L13_Finale />} />

          {/* Catch-all: Redirect unknown paths back to the start */}
          <Route path="*"           element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </GameProvider>
  )
}