import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getUsers } from "../../services/Users";
import "./SignIn.css";

export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function handleMatch(user) {
    props.setUser(user);
    history.push("/");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const resp = await getUsers();
    const match = resp.filter(
      (user) => user.contact.email === email && user.password === password
    );
    match.length === 1
      ? handleMatch(match[0])
      : alert(
          "Sorry, email and password did not match. Please try again or create an account."
        );
  }

  return (
    <div className="signInMaster">
      <div className="logoBox">
        <div className="logoBio">
          <div className="logoDiv">
            <img
              className="logo"
              src="./assets/images/Purple.png"
              alt="nurseLine"
            ></img>
          </div>
          <h5 className="bioNurses">
            A private website for nurses, by nurses. Share your story, post a
            resource & take a break.
          </h5>
        </div>
      </div>

      <div className="divBox">
        <div className="userInfoArea">
          <form onSubmit={handleSubmit}>
            <div className="signInArea">
              <input
                className="emailSignIn"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              className="passwordSignIn"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="loginButton">
              Log In
            </button>
            <span className="forgotPassword">Forgot Password?</span>
            <hr></hr>
            <button type="submit" className="createAccount">
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
