import { Link } from "react-router-dom"


const CardLocation = (props) => {
  return (
    <div>
        <Link className='card' to={`/locations/${props.location.id}`}>
            <h3>{props.location.name}</h3>
        </Link>
    </div>
  )
}

export default CardLocation