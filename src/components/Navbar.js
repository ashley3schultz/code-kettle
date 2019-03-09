import React from 'react';
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
        </div>
    )
}

export default Navbar