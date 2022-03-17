import React from 'react'

// styles
import './Titlebar.css'

export default function Titlebar(props) {
  return (
    <div className='title-container'>
      <h1 className='title'>Games and Puzzles</h1>
      <span className="home-link" onClick={props.handleNav}>Home</span>
    </div>
  )
}
