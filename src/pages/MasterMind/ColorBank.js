import React from 'react'
import Peg from "./Peg.js"

// styles
import './ColorBank.css'

export default function ColorBank() {
  return (
    <div className="color-bank-container">
      <button className="mm-new-game btn">New Game</button>
      <div className="peg-bank-container">
        <h1 className="bank-title">ColorBank</h1>
        <div className="peg-bank">
          <Peg color="#CF3333"></Peg>
          <Peg color="#4148E7"></Peg>
          <Peg color="#2E8A42"></Peg>
          <Peg color="#D0CA3A"></Peg>
          <Peg color="#8607B2"></Peg>
          <Peg color="#E46720"></Peg>
        </div>
      </div>
    </div>
  )
}
