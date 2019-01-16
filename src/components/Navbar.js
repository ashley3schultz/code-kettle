import React from 'react';
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to='/'>About</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/blogs'>Blog</NavLink>
        </div>
    )
}

export default Navbar