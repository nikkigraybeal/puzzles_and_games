import React from 'react'

// styles
import './Sidebar.css'

export default function Sidebar(props) {
  return (
    <div className='sidebar-container'>
      <p className="game-link" onClick={props.handleNav}>Master Mind</p>
      <p className="game-link" onClick={props.handleNav}>Slide Puzzle</p>
      <p className="game-link" onClick={props.handleNav}>Memory Match</p>
    </div>
  )
}
