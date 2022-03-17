import React from 'react'
import GameTitle from '../../components/GameTitle'
import ColorBank from './ColorBank'
import Attempt from './Attempt'

// styles 
import './MasterMind.css'

export default function MasterMind() {
  return (
    <div className="mm-container">
      <GameTitle 
        title="Master Mind" 
        instructions="Drag the colored pegs to guess the secret code. Colors can be used more than once. Check your answer to receive feedback. White feedback pegs mean a peg is the correct color but not in the correct place. Black feedback pegs mean a peg is the correct color and in the correct place. You have 10 attempts to break the code!">
      </GameTitle>
      <ColorBank></ColorBank>
      <Attempt></Attempt>
      <Attempt></Attempt>
      <Attempt></Attempt>
      <Attempt></Attempt>
      <Attempt></Attempt>
      <Attempt></Attempt>
      <Attempt></Attempt>
      <Attempt></Attempt>
      <Attempt></Attempt>
      <Attempt></Attempt>
    </div>
  )
}
