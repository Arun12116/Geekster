import React from 'react'

import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <ul className="header">
        <li>
          <NavLink className="link" to="Home" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/chat">
            Chat
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default NavBar;
