import { Link } from 'react-router-dom'
import '../css/navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="logo"></div>

            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

        </nav>
    )
}

export default Navbar
