import { useState } from 'react'
import GameTitle from '../../components/GameTitle'
import ColorBank from './ColorBank'
import Attempt from './Attempt'

// styles 
import './MasterMind.css'

export default function MasterMind() {
  const createSecretCode = () => {
    const colors = ["rgb(228, 35, 32)", "rgb(65, 72, 231)", "rgb(46, 138, 66)", "rgb(208, 202, 58)", "rgb(134, 7, 178)", "rgb(228, 103, 32)"]
    
    let i = 4
    let code = []
    while (i > 0) {
      let index = Math.floor(Math.random() * 6)
      code.push(colors[index])
      i -= 1
    }
    return code
  }

  const [currentColor, setCurrentColor] = useState(null)
  const [ secretCode, setSecretCode] = useState(createSecretCode())
  const [ guess, setGuess ] = useState({0: undefined, 1: undefined, 2: undefined, 3: undefined})


  const resetGame = (e) => {
    setSecretCode(createSecretCode())
    setGuess({0: undefined, 1: undefined, 2: undefined, 3: undefined})
    const pegs = e.target.nextSibling.nextSibling.children
    for (let peg of pegs) {
      peg.style = {background: "gray"}
    }
    const feedback = e.target.parentNode.lastChild.previousSibling.children 
    for (let peg of feedback) {
      console.log(peg)
      peg.style={background: "transparent"}
    }
  }

  const getColor = (e) => {
    const color = e.target.style.background
    setCurrentColor(color)
  }

  const getGuess = (e) => {
    const index = e.target.getAttribute("index")
    const color = {[index]: currentColor}
    setGuess(Object.assign(guess, color))
  }

  return (
    
    <div className="mm-container">
      <GameTitle 
        title="Master Mind" 
        instructions="Drag the colored pegs to guess the secret code. Colors can be used more than once. Check your answer to receive feedback. A white feedback peg means a peg is the correct color but not in the correct place. A black feedback peg means a peg is the correct color and in the correct place. You have 10 attempts to break the code!">
      </GameTitle>
      <ColorBank getColor={getColor} resetGame={resetGame}></ColorBank>
      <Attempt 
        currentColor={currentColor} 
        getGuess={getGuess} 
        guess={guess} 
        secretCode={secretCode}
        resetGame={resetGame}
      ></Attempt>
    </div>
  )
}
