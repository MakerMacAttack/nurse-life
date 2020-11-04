import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
          <div className="nav-top">
            <span className="signInLink">Sign Out</span>
          </div>
          <div className="nav-bottom">
            <div className="nav-bottom-left">
              <img className="logo" src="./assets/images/Main_Logo.png" alt="nurseLine"></img>
              <input className="searchBar" placeholder="Search Bar..."></input>
            </div>
          <div className="nav-bottom-right">
            <div className="accounts-div">
              <img className="account" src="./assets/images/account_nav.png" alt="account"></img>
              <span className="accountLink">Account</span>
            </div>
            <div className="favorites-div">
              <img className="favorites" src="./assets/images/nav_bar_favorites.png" alt="favorites"></img>
              <span className="favoritesLink">Favorites</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
