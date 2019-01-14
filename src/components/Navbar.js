import React from 'react';
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to='/'>About</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <a href='http://codetoatea.com/' 
            target="_blank" 
            rel="noopener noreferrer">
                Blog
            </a>
        </div>
    )
}

export default Navbar