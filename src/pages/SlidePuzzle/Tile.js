
// styles
import './Tile.css'

export default function Tile(props) {
  return (
    <div 
      className="tile" 
      style={{left: props.left, top: props.top}}>{props.number}
    </div>
  )
}
