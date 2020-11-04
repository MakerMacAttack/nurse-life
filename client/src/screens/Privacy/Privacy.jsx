import React, { useState } from "react";
import { updateUser } from "../../services/Users";

export default function Privacy(props) {
  const [anonymity, setAnonymity] = useState(props.user.privacy.anonymity);

  const [user, setUser] = useState({
    old: "",
    new: "",
    confirm: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    user.old === props.user.password && user.new === user.confirm
      ? (props.user.password = user.new)
      : alert(
          "Passwords did not match or old password wrong, please try again."
        );
    setUser({
      old: "",
      new: "",
      confirm: "",
    });
  }

  return (
    <div>
      <h1>Privacy & Settings</h1>
      <hr />
      <h2>Anonymity</h2>
      <input id="anonymity" type="checkbox" name="anonymity" checked="true" />
      <label htmlFor="anonymity">Always keep me anonymous</label>
      <p>
        When your Nurse Line account is anonymous, all of your posts will
        automatically be posted with a randomly generated user, and your
        location will be hidden.
      </p>
      <h2>Location Services</h2>
      <input id="location" type="checkbox" name="location" />
      <label htmlFor="location">Disable location services</label>
      <p>
        When location services are turned off, your current location will be
        hidden from all posts.
      </p>
      <form onSubmit={handleSubmit}>
        <h2>Change Password</h2>
        <label htmlFor="old">Old Password</label>
        <input
          id="old"
          name="old"
          value={user.old}
          placeholder="Old Password..."
          onChange={handleChange}
        />
        <label htmlFor="new">New Password</label>
        <input
          id="new"
          name="new"
          value={user.new}
          placeholder="New Password..."
          onChange={handleChange}
        />
        <label htmlFor="confirm">Confirm</label>
        <input
          id="confirm"
          name="confirm"
          value={user.confirm}
          placeholder="Confirm..."
          onChange={handleChange}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
