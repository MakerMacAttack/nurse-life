import React from "react";
import "./SignIn.css";

export default function SignIn(props) {
  return (
    <div className="signInMaster">
      <div className="logoBox">
      <div className="logoBio">
        <div className="LogoDiv">
          <img
            className="logo"
            src="./assets/images/Purple.png"
            alt="nurseLine"
          ></img>
        </div>
        <h5>
          A private website for nurses, by nurses. Share your story, post a
          resource & take a break.
        </h5>
      </div>
      </div>

      <div className="divBox">
        <div className="userInfoArea">
          <div className="signInArea">
            <input className="emailSignIn" placeholder="Email"></input>
          </div>
          <input className="passwordSignIn" placeholder="Password"></input>
          <button type="submit" className="loginButton">
            Log In
          </button>
          <span className="forgotPassword">Forgot Password?</span>
          <hr></hr>
          <button type="submit" className="createAccount">
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}
