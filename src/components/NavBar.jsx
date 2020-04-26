import React from 'react'
import { NavLink } from 'react-router-dom';

import homeSvg from '../assets/imgs/home.svg';
import membersSvg from '../assets/imgs/members.svg';
export const NavBar = () => {
    return (
        <div className="nav-bar">
            <NavLink to="/">
                <img src={homeSvg} alt="Home" title="Home" />
            </NavLink>

            <NavLink to="/contact">
                <img src={membersSvg} alt="Contact" title="Contact" />

            </NavLink>
        </div>
    )
}
