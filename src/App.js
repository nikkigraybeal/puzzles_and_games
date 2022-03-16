import './App.css'
import MasterMind from './pages/MasterMind'
import SlidePuzzle from './pages/SlidePuzzle'
import MemoryMatch from './pages/MemoryMatch'


function App() {
  return (
    <div className="App">
      <MasterMind></MasterMind>
      <SlidePuzzle></SlidePuzzle>
      <MemoryMatch></MemoryMatch>
    </div>
  )
}

export default App
