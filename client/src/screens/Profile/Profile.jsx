import React from "react";

export default function Profile(props) {
  return (
    <div>
      <img src="" alt="User profile picture" />
      <p>Edit Profile Picture</p>
      <h1>My Account</h1>
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
        <label htmlFor="workplace">Institution/Work Place</label>
        <input id="workplace" name="workplace" placeholder="Where you work" />
        <label htmlFor="city">City</label>
        <input id="city" name="city" placeholder="City" />
        <label htmlFor="state">State</label>
        <input id="state" name="state" placeholder="State" />
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
        <button type="submit" className="save-profile-button">
          Save
        </button>
      </form>
    </div>
  );
}
