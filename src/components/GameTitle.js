import { useState } from 'react'
import Instructions from './Instructions'

// styles
import './GameTitle.css'

export default function GameTitle(props) {
  const [ showInstructions, setShowInstructions ] = useState(false)

  const handleClick = () => {
    showInstructions ? setShowInstructions(false) : setShowInstructions(true)
  }
  
  return (
    <div className="game-title-container">
      <h1 className="game-title">{props.title}</h1>
     
      <span className='instructions-link' onClick={handleClick}>instructions</span>
      { showInstructions && <Instructions instructions={props.instructions}></Instructions> }
    </div>
    
  )
}
