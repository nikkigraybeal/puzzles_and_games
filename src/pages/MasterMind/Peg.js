import React from 'react'

// styles
import './Peg.css'

export default function Peg(props) {
  const color = {background: props.color}
  return (
    <div className="peg" style={color}></div>
  )
}
