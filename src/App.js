import { useState } from 'react'

// styles
import './App.css'

// components
import Titlebar from './components/Titlebar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import MasterMind from './pages/MasterMind/MasterMind'
import SlidePuzzle from './pages/SlidePuzzle/SlidePuzzle'
import MemoryMatch from './pages/MemoryMatch/MemoryMatch'

function App() {
  const [ showHome, setShowHome ] = useState(true)
  const [ showMasterMind, setShowMasterMind ] = useState(false)
  const [ showSlidePuzzle, setShowSlidePuzzle ] = useState(false)
  const [ showMemoryMatch, setShowMemoryMatch ] = useState(false)

  const handleNav = (e) => {
    const pageName = e.target.innerHTML
    switch(pageName) {
      case "Master Mind":
        setShowHome(false)
        setShowSlidePuzzle(false)
        setShowMemoryMatch(false)
        setShowMasterMind(true)
        break
      case "Slide Puzzle":
        setShowHome(false)
        setShowSlidePuzzle(true)
        setShowMemoryMatch(false)
        setShowMasterMind(false)
        break
      case "Memory Match":
        setShowHome(false)
        setShowSlidePuzzle(false)
        setShowMemoryMatch(true)
        setShowMasterMind(false)
        break
      default:
        setShowHome(true)
        setShowSlidePuzzle(false)
        setShowMemoryMatch(false)
        setShowMasterMind(false)
    }
  }

  return (
    <div className="App">
      <Titlebar handleNav={handleNav}></Titlebar>
      <Sidebar handleNav={handleNav}></Sidebar>
      { showHome && <Home></Home> }
      { showMasterMind && <MasterMind></MasterMind> }
      { showSlidePuzzle && <SlidePuzzle></SlidePuzzle> }
      { showMemoryMatch && <MemoryMatch></MemoryMatch> }
    </div>
  )
}

export default App
