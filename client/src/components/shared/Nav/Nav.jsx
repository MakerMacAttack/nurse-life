import React from "react";
import "./shared/Nav/Nav.css";
import { NavLink } from "react-router-dom";


const Nav = () => {
  
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          NurseLine
        </NavLink>
        <div className="links">
          <NavLink className="link" to="/account">
            Account
          </NavLink>
        </div>
      </div>
    </nav>
  );
};


export default Nav;