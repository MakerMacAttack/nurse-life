import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img className="logo" src="./assets/images/Main_Logo.png" alt="nurseLine"></img>
        <img className="account" src="./assets/images/account_nav.png" alt="account"></img>
      </div>
    </div>
  );
};

export default Header;
