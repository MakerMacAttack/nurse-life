import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
          <div className="nav-top">
            <h5 className="signInLink">Sign In</h5>
          </div>
          <div className="nav-bottom">
            <img className="logo" src="./assets/images/Main_Logo.png" alt="nurseLine"></img>
            <input className="searchBar"></input>
            <img className="account" src="./assets/images/account_nav.png" alt="account"></img>
            <img className="messages" src="./assets/images/nav_bar_messages.png" alt="messages"></img>
            <img className="meditation" src="./assets/images/nav_bar_meditate.png" alt="meditation"></img>
            <img className="favorites" src="./assets/images/nav_bar_favorites.png" alt="favorites"></img>
          </div>
      </div>
    </div>
  );
};

export default Header;
