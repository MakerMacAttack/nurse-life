import React from "react";

export default function SignIn(props) {
  return (
    <div>
      <div>
        <h5>A private website for nurses, by nurses.
          Share your story, post a resource & take a break.
        </h5>
      </div>
      <div>
        <input className="emailSignIn" placeholder="Email"></input>
        <input className="passwordSignIn" placeholder="Password"></input>
      </div>
    </div>
  )
}
