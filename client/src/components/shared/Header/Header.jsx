import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img className="logo" src="./assets/images/Main_Logo.png" alt="Nurse Line Logo"></img>
        <img className="account" src="./assets/images/account_nav.png" alt="Account"></img>
      </div>
    </div>
  );
};

export default Header;
