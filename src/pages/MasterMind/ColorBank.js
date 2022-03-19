import React from 'react'
import Peg from "./Peg.js"

// styles
import './ColorBank.css'

export default function ColorBank(props) {
  const handleDrag = (e) => {
    props.getColor(e)
  }

  return (
    <div className="color-bank-container"> 
      <div className="peg-bank-container">
        <h1 className="bank-title">ColorBank</h1>
        <div className="peg-bank">
          <Peg color="rgb(228, 35, 32)" draggable="true" handleDrag={handleDrag}></Peg>
          <Peg color="rgb(65, 72, 231)" draggable="true" handleDrag={handleDrag}></Peg>
          <Peg color="rgb(46, 138, 66)" draggable="true" handleDrag={handleDrag}></Peg>
          <Peg color="rgb(208, 202, 58)" draggable="true" handleDrag={handleDrag}></Peg>
          <Peg color="rgb(134, 7, 178)" draggable="true" handleDrag={handleDrag}></Peg>
          <Peg color="rgb(228, 103, 32)" draggable="true" handleDrag={handleDrag}></Peg>
        </div>
      </div>
    </div>
  )
}
