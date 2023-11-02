import { Link } from "react-router-dom"


const CardEpisode = (props) => {
  return (
    <div> 
        <Link className='card' to={`/episodes/${props.episode.id}`}>
        <h3>{props.episode.name}</h3>
        </Link>
    </div>
  )
}

export default CardEpisode