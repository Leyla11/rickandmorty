import { Link } from 'react-router-dom'
import characters from "../images/characters.png"
import nave from "../images/nave.png"
import tv from "../images/tv.png"


const Home = () => {
  return (
    <div className='home'>
      <ol>
      <li>
                <Link to="/characters"><img src={characters} alt="rick y morty" /><h1>CHARACTERS</h1></Link>
            </li>
            <li>
                <Link to="/episodes"><img src={tv} alt="rick y morty" /><h1>EPISODES</h1></Link>
            </li>
            <li>
                <Link to="/locations"><img src={nave} alt="rick y morty" /><h1>LOCATIONS</h1></Link>
            </li>
      </ol>
    </div>
  )
}

export default Home