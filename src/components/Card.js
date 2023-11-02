import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div>
      <Link className='card' to={`/characters/${props.character.id}`}>
        <h3>{props.character.name}</h3>
        <img src={props.character.image} alt={props.character.name} />
      </Link>
    </div>
  )
}

export default Card