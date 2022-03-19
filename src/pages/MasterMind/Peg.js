// styles
import './Peg.css'

export default function Peg(props) {
  const color = { background: props.color }
  
  return (
    <div 
      className="peg" 
      style={color} 
      index={props.index}
      draggable={props.draggable} 
      onDragStart={props.handleDrag}
      onDrop={props.handleDrop}
      onDragOver={props.handleDragOver}
      onDragEnter={props.handleDragEnter}
      onDragLeave={props.handleDragLeave}
    ></div>   
  )
}