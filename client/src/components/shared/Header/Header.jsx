import React from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();

  function handleSignOut() {
    localStorage.removeItem("loggedin");
    props.set(null);
    history.push("/sign-in");
  }

  return (
    <div>
      <div className="header">
        <div className="nav-top">
          <span className="signInLink" onClick={handleSignOut}>
            Sign Out
          </span>
        </div>
        <div className="nav-bottom">
          <div className="nav-bottom-left">
            <img
              className="logo"
              src="./assets/images/Main_Logo.png"
              alt="nurseLine"
            ></img>
            <input className="searchBar" placeholder=""></input>
          </div>
          <div className="nav-bottom-right">
            <Link to="/profile">
              <div className="accounts-div">
                <img
                  className="account"
                  src="./assets/images/account_nav.png"
                  alt="account"
                ></img>
                <span className="accountLink">Account</span>
              </div>
            </Link>
            <div className="meditation-div">
              <img
                className="meditation"
                src="./assets/images/nav_bar_meditate.png"
                alt="meditation"
              ></img>
              <span className="medLink">Meditation</span>
            </div>
            <div className="messages-div">
              <img
                className="messages"
                src="./assets/images/nav_bar_messages.png"
                alt="messages"
              ></img>
              <span className="messagesLink">Messages</span>
            </div>
            <div className="favorites-div">
              <img
                className="favorites"
                src="./assets/images/nav_bar_favorites.png"
                alt="favorites"
              ></img>
              <span className="favoritesLink">Favorites</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
