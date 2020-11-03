import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
          <div className="nav-top">
            <span className="signInLink">Sign In</span>
          </div>
          <div className="nav-bottom">
            <div className="nav-bottom-left">
              <img className="logo" src="./assets/images/Main_Logo.png" alt="nurseLine"></img>
              <input className="searchBar" placeholder="Search Bar..."></input>
            </div>
            <div className="nav-bottom-right">
              <img className="account" src="./assets/images/account_nav.png" alt="account"></img>
              <img className="favorites" src="./assets/images/nav_bar_favorites.png" alt="favorites"></img>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Header;
