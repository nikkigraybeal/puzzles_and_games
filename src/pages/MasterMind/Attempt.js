/*
problem: given 2 arrays of colors, count how many colors are in the same place. then count how many are the same color but not in the same place. push "black" to a new array and "white" the number of times for the counts. fill the rest of the new array with "transparent" until it's length is 4.

examples:
[1,2,3], [1,2,3] => black: 3
[1,4,2], [1,2,6] => black: 1, white: 1, transparent: 1
[1,2,3], [0,0,0] => transparent: 3
[1,4,2], [4,2,1] => white: 3

data structures: guessObj, secretCode[], feedback[] 

algorithm:
initialize feedbackArr = []
change guessObj into array of values
copy guessArr
copy secretCodeArr
iterate over guessArr 
  if peg === secretCode[idx] 
    push "black" to feedbackArr
    delete guessArrCopy[idx] 
    delete secretCodeCopy[idx]
iterate over guessArrCopy
  if peg === undefined continue
  if secretCodeCopy includes peg 
    push "white" to feedbackArr
    find index of peg in secretCodeCopy
    delete decretCodeCopy[idx]
if length of feedbackArr is < 4, push "transparent" until length is 4

setFeedback(feedbackArr)
*/
import { useState } from 'react'
import Peg from './Peg'
import Feedback from './Feedback'

// styles
import './Attempt.css'

export default function Attempt(props) {
  //props are currentColor, getGuess, guess{}, secretCode[]
  const [ feedback, setFeedback ] = useState(["transparent", "transparent", "transparent", "transparent",])

  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
  }
  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
  }
  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  }
  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    e.target.style.background = props.currentColor
    props.getGuess(e)
  }

  const checkWin = () => {
    const win = feedback.filter(peg => {
      return peg === "black"
    })
    return win.length === 4 ? true : false
  }

  const handleCheckAnswer = (e) => {
    const guess = Object.values(props.guess)
    const guessCopy = [...guess]
    const secretCodeCopy = [...props.secretCode]
    const feedbackArr = []

    guess.forEach((color, idx) => {
      if (color === props.secretCode[idx]) {
        feedbackArr.push("black")
        delete guessCopy[idx] 
        delete secretCodeCopy[idx]
      }
    })
    guessCopy.forEach(color => {
      if (color === undefined) {
        return
      }
      if (secretCodeCopy.includes(color)) {
        feedbackArr.push("white")
        const idx = secretCodeCopy.indexOf(color)
        delete secretCodeCopy[idx]
      }
    })
    while (feedbackArr.length < 4) {
      feedbackArr.push("transparent")
    }
    setFeedback(feedbackArr)
  }

  return (
    <div className='at-container'>
      <button className="mm-new-game btn" onClick={(e) => {props.resetGame(e)}}>New Game</button>
      <button className="mm-check-answer btn" onClick={handleCheckAnswer}>check</button>
      <div className="guess-container">
        <Peg color="gray"
             index="0" 
             handleDragEnter={handleDragEnter}
             handleDragLeave={handleDragLeave}
             handleDragOver={handleDragOver}
             handleDrop={handleDrop}
        ></Peg>
        <Peg color="gray"  
             index="1"
             handleDragEnter={handleDragEnter}
             handleDragLeave={handleDragLeave}
             handleDragOver={handleDragOver}
             handleDrop={handleDrop}
        ></Peg>
        <Peg color="gray"  
             index="2"
             handleDragEnter={handleDragEnter}
             handleDragLeave={handleDragLeave}
             handleDragOver={handleDragOver}
             handleDrop={handleDrop}
        ></Peg>
        <Peg color="gray"
             index="3" 
             handleDragEnter={handleDragEnter}
             handleDragLeave={handleDragLeave}
             handleDragOver={handleDragOver}
             handleDrop={handleDrop}
        ></Peg>
      </div>
      <Feedback feedback={feedback}></Feedback>
      { checkWin() && 
        <div>
          <p>You broke the code! Nice work!</p>
        </div>
      }
    </div>
  )
}
