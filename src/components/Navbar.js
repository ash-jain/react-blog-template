import { Link } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">&lt;/&gt; John Doe</Link>

            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <button className="hamburger-open-btn" onClick={ openHamburger }><i className="fas fa-bars"></i></button>

            <div className="hamburger-menu">
                <div className="hamburger-left">
                    <div className="hamburger-close-btn" onClick={ closeHamburger }><i className="fas fa-times"></i></div>
                </div>
                <div className="hamburger-right">
                    <Link to="/">Home</Link>
                    <Link to="/articles">Articles</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
				</div>
            </div>
        </nav>
    );
};

const openHamburger = () => { document.querySelector('.hamburger-menu').style.left = "0vh"};
const closeHamburger = () => { document.querySelector('.hamburger-menu').style.left = "-100vh"};

export default Navbar;