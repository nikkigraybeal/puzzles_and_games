import GameTitle from '../../components/GameTitle'
import GameBoard from './GameBoard'

// styles
import './SlidePuzzle.css'

// styles
import './SlidePuzzle.css'

export default function SlidePuzzle() {
  return (
    <div className="sp-container">
      <GameTitle 
        title="Slide Puzzle" 
        instructions="Click on a numbered tile to slide it into the empty slot. Try to get all of the tiles in order from 1 to 15. Click New Game to shuffle the tiles and try again.">
      </GameTitle>
      <GameBoard></GameBoard>
    </div>
  )
}
