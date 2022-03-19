import Tile from './Tile'

// styles
import './GameBoard.css'

export default function GameBoard() {
  return (
    <div className="gb-container">
      <button className="new-game btn">New Game</button>
      <div className="game-board-frame">
        <div className="game-board">
          <Tile
            number="1"
            left="0"
            top="0"
          ></Tile>
          <Tile
            number="2"
            left="90px"
            top="0"
          ></Tile>
          <Tile
            number="3"
            left="180px"
            top="0"
          ></Tile>
          <Tile
            number="4"
            left="270px"
            top="0"
          ></Tile>
          <Tile
            number="5"
            left="0px"
            top="90px"
          ></Tile>
          <Tile
            number="6"
            left="90px"
            top="90px"
          ></Tile>
          <Tile
            number="7"
            left="180px"
            top="90px"
          ></Tile>
          <Tile
            number="8"
            left="270px"
            top="90px"
          ></Tile>
          <Tile
            number="9"
            left="0px"
            top="180px"
          ></Tile>
          <Tile
            number="10"
            left="90px"
            top="180px"
          ></Tile>
          <Tile
            number="11"
            left="180px"
            top="180px"
          ></Tile>
          <Tile
            number="12"
            left="270px"
            top="180px"
          ></Tile>
          <Tile
            number="13"
            left="0px"
            top="270px"
          ></Tile>
          <Tile
            number="14"
            left="90px"
            top="270px"
          ></Tile>
          <Tile
            number="15"
            left="180px"
            top="270px"
          ></Tile>
        </div>
      </div>
    </div>
    
  )
}
