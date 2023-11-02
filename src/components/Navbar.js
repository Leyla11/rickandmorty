import { Link } from "react-router-dom"
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
        <ol>
            <li>
                <Link to="/"><img src={logo} alt="rick y morty" /></Link>
            </li>
        </ol>
    </div>
  )
}

export default Navbar