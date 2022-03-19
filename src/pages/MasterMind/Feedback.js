import React from 'react'

// styles
import './Feedback.css'

export default function Feedback(props) {

  return (
    <div className="fb-container">
      <div className="sq1 sq"></div>
      <div className="sq2 sq"></div>
      <div className="sq3 sq"></div>
      <div className="sq4 sq"></div>
      <div 
        className="cr1 cr" 
        style={{background: props.feedback[0]}}
      ></div>
      <div 
        className="cr2 cr" 
        style={{background: props.feedback[1]}}
      ></div>
      <div 
        className="cr3 cr"
        style={{background: props.feedback[2]}}
      ></div>
      <div 
        className="cr4 cr"
        style={{background: props.feedback[3]}}
      ></div>
    </div>
  )
}
