import React from "react";

export default function Profile(props) {
  return (
    <div>
      <img src="" alt="User profile picture" />
      <p>Edit Profile Picture</p>
      <h1>My Account</h1>
      <p>Save</p>
      <hr />
      <form className="update-profile">
        <h2>Name</h2>
        <label htmlFor="first">First Name</label>
        <input id="first" name="first" placeholder="First Name" />
        <label htmlFor="last">Last Name</label>
        <input id="last" name="last" placeholder="Last Name" />
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="not-say">Prefer not to say</option>
        </select>
        <label htmlFor="birthday">Date of Birth</label>
        <input type="date" id="birthday" name="birthday" />
      </form>
    </div>
  );
}
