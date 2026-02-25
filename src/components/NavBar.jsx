import React from 'react';
import '../stylesheet/NavBar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="Navbar">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/github'>Github</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    );
}

export default Navbar;