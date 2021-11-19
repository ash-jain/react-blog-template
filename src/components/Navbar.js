import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
    const [hamburger, setHamburger] = useState(false);
    const toggleHamburger = () => { setHamburger(!hamburger) };

    return (
        <nav className="navbar">
            <Link to="/" className="logo"><span>&lt;/&gt;</span> John Doe</Link>

            <div className={hamburger ? "navbar-links hamburger-open" : "navbar-links hamburger-closed"}>
                <NavLink to="/" activeClassName="nav-link-highlight" onClick={ toggleHamburger } exact>Home</NavLink>
                <NavLink to="/articles" activeClassName="nav-link-highlight" onClick={ toggleHamburger }>Articles</NavLink>
                <NavLink to="/about" activeClassName="nav-link-highlight" onClick={ toggleHamburger }>About</NavLink>
                <NavLink to="/contact" activeClassName="nav-link-highlight" onClick={ toggleHamburger }>Contact</NavLink>
                <div className="hamburger-close-btn" onClick={ toggleHamburger }><i className="fas fa-times"></i></div>
            </div>

            <button className="hamburger-open-btn" onClick={ toggleHamburger }>
                <i className="fas fa-bars"></i>
            </button>
        </nav>
    );
};

export default Navbar;