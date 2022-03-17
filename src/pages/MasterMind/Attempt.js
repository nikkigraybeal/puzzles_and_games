import React from 'react'
import Peg from './Peg'
import Feedback from './Feedback'

// styles
import './Attempt.css'

export default function Attempt(props) {

  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    e.target.style.background = props.currentColor
  };
  return (
    <div className='at-container'>
      <button className="mm-check-answer btn">check</button>
      <div className="guess-container">
        <Peg color="gray"  
             handleDragEnter={handleDragEnter}
             handleDragLeave={handleDragLeave}
             handleDragOver={handleDragOver}
             handleDrop={handleDrop}
        ></Peg>
        <Peg color="gray"  
             handleDragEnter={handleDragEnter}
             handleDragLeave={handleDragLeave}
             handleDragOver={handleDragOver}
             handleDrop={handleDrop}
        ></Peg>
        <Peg color="gray"  
             handleDragEnter={handleDragEnter}
             handleDragLeave={handleDragLeave}
             handleDragOver={handleDragOver}
             handleDrop={handleDrop}
        ></Peg>
        <Peg color="gray"  
             handleDragEnter={handleDragEnter}
             handleDragLeave={handleDragLeave}
             handleDragOver={handleDragOver}
             handleDrop={handleDrop}
        ></Peg>
      </div>
      <Feedback></Feedback>
    </div>
  )
}
