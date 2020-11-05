import React from "react";
import "./Profile.css";

export default function Profile(props) {
  return (
    <div>
      <div id="profile-header">
        <div id="pic-box">
          <img
            id="profile-pic"
            src="./assets/images/ProfilePic.png"
            alt="User profile"
          />
          <p id="edit-pic">Edit Profile Picture</p>
        </div>
        <h1>My Account</h1>
      </div>
      <hr />
      <form className="update-profile">
        <button type="submit" className="save-profile-button">
          Save
        </button>
        <div id="profile-updater">
          <h2>Name</h2>
          <div id="profile-name-box">
            <label htmlFor="first">First Name</label>
            <input id="first" name="first" placeholder="First Name" />
            <label htmlFor="last">Last Name</label>
            <input id="last" name="last" placeholder="Last Name" />
          </div>
          <div id="profile-gender-box">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="not-say">Prefer not to say</option>
            </select>
          </div>
          <div id="profile-bday-box">
            <label htmlFor="birthday">Date of Birth</label>
            <input type="date" id="birthday" name="birthday" />
          </div>
          <div id="profile-work-box">
            <label htmlFor="workplace">Institution/Work Place</label>
            <input
              id="workplace"
              name="workplace"
              placeholder="Where you work"
            />
            <label htmlFor="city">City</label>
            <input id="city" name="city" placeholder="City" />
            <label htmlFor="state">State</label>
            <input id="state" name="state" placeholder="State" />
          </div>
          <div id="profile-contact-box">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="314-159-2653"
            />
            <label htmlFor="email">E-mail Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@domain.com"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
