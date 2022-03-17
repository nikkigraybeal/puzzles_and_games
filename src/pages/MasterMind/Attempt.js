import React from 'react'
import Peg from './Peg'
import Feedback from './Feedback'

// styles
import './Attempt.css'

export default function Attempt() {
  return (
    <div className='at-container'>
      <button className="mm-check-answer btn">check</button>
      <div className="guess-container">
        <Peg color="gray"></Peg>
        <Peg color="gray"></Peg>
        <Peg color="gray"></Peg>
        <Peg color="gray"></Peg>
      </div>
      <Feedback></Feedback>
    </div>
  )
}
