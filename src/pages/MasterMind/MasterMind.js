import { useState } from 'react'
import GameTitle from '../../components/GameTitle'
import ColorBank from './ColorBank'
import Attempt from './Attempt'

// styles 
import './MasterMind.css'

export default function MasterMind() {
  const [currentColor, setCurrentColor] = useState(null)
  const [ secretCode, setSecretCode] = useState(null)

  const getColor = (e) => {
    const color = e.target.style.background
    setCurrentColor(color)
  }

  

  return (
    <div className="mm-container">
      <GameTitle 
        title="Master Mind" 
        instructions="Drag the colored pegs to guess the secret code. Colors can be used more than once. Check your answer to receive feedback. A white feedback peg means a peg is the correct color but not in the correct place. A black feedback peg means a peg is the correct color and in the correct place. You have 10 attempts to break the code!">
      </GameTitle>
      <ColorBank getColor={getColor}></ColorBank>
      <Attempt currentColor={currentColor}></Attempt>
      <Attempt currentColor={currentColor}></Attempt>
      <Attempt currentColor={currentColor}></Attempt>
      <Attempt currentColor={currentColor}></Attempt>
      <Attempt currentColor={currentColor}></Attempt>
      <Attempt currentColor={currentColor}></Attempt>
      <Attempt currentColor={currentColor}></Attempt>
      <Attempt currentColor={currentColor}></Attempt>
      <Attempt currentColor={currentColor}></Attempt>
      <Attempt currentColor={currentColor}></Attempt>
    </div>
  )
}
