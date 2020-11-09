import React from "react";
import "./Profile.css";
import { deleteUser } from "../../services/Users.js";
import { Link } from "react-router-dom";

function Profile(props) {
  async function handleDelete() {
    await deleteUser(props.user._id);
    props.set((prev) => !prev);
  }

  if (!props.user) {
    return <h1>Loading...</h1>;
  }
  // comment what is happening here
  const date = (`${(props.user.birthday.year).toString()}-${props.user.birthday.month < 10
    ? `0${(props.user.birthday.month).toString()}`
    : `${(props.user.birthday.month).toString()}`
    }-${(props.user.birthday.day).toString()}`);



  return (
    <div className="profile-master">
      <div className="profile-master2">
        <div className="profile-header-top">
          <div className="profile-header">
            <div className="pic-box">
              <img
                className="profile-pic"
                src="./assets/images/ProfilePic.png"
                alt="User profile picture"
              />
              <p className="edit-pic">Edit Profile Picture</p>
            </div>
            <h1>My Account</h1>
          </div>
          <div className="save-profile-button">
            <button type="submit" className="save-profile-button2">
              Save
            </button>
          </div>
        </div>
        <hr />
        <form className="update-profile">
          <div className="profile-updater">
            <div className="Name">
              <h2>Name</h2>
            </div>
            <div className="profile-name-box">
              <label className="labelFirst" htmlFor="first">
                First Name
              </label>
              <input
                value={props.user.name.first}
                className="first"
                name="first"
              />
              <label className="labelSecond" htmlFor="last">
                Last Name
              </label>
              <input
                value={props.user.name.last}
                className="last"
                name="last"
              />
            </div>

            <div className="profile-gender-box">
              <label className="labelGender" htmlFor="gender">
                {" "}
                Gender{" "}
              </label>

              <select
                value={props.user.gender}
                className="gender"
                name="gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="not-say">Prefer not to say</option>
              </select>
            </div>

            <div className="profile-bday-box">
              <label className="labelBirthday" htmlFor="birthday">
                Date of birth
              </label>
              <input
                // value={`${props.user.birthday.year}-${props.user.birthday.month}-${props.user.birthday.day}`}
                value={date}
                className="birthday"
                type="date"
                id="birthday"
                name="birthday"
              />
            </div>

            <div className="profile-work-box">
              <div className="workplaceInput">
                <label className="labelWorkplace" htmlFor="workplace">
                  Institution/Work Place
                </label>
                <input
                  value={props.user.work.institution}
                  className="workplace"
                  id="workplace"
                  name="workplace"
                  placeholder="Where you work"
                />
              </div>
              <div className="cityInput">
                <label className="labelCity" htmlFor="city">
                  City
                </label>
                <input
                  value={props.user.work.city}
                  className="city"
                  id="city"
                  name="city"
                  placeholder="City"
                />
              </div>
              <div className="stateInput">
                <label className="labelState" htmlFor="state">
                  State
                </label>
                <input
                  value={props.user.work.state}
                  className="state"
                  id="state"
                  name="state"
                  placeholder="State"
                />
              </div>
            </div>

            <div className="profile-contact-box">
              <div className="inputPhone">
                <label className="labelPhone" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="phone"
                  id="phone"
                  type="tel"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="314-159-2653"
                />
              </div>
              <div className="inputEmail">
                <label className="labelEmail" htmlFor="email">
                  E-mail Address
                </label>
                <input
                  className="email"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@domain.com"
                />
                <div className="delete-button">
                  <button className="delete-button" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
