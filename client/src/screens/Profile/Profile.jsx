import React, { useState } from "react";
import "./Profile.css";
import { deleteUser, updateUser } from "../../services/Users.js";

function Profile(props) {
  const [profile, setProfile] = useState({
    name: props.user.name,
    gender: props.user.gender,
    birthday: props.user.birthday,
    work: props.user.work,
    contact: props.user.contact,
  });
  const [name, setName] = useState(profile.name);
  const [birthday, setBirthday] = useState(profile.birthday);
  const [work, setWork] = useState(profile.work);
  const [contact, setContact] = useState(profile.contact);

  async function handleDelete() {
    await deleteUser(props.user._id);
    props.set((prev) => !prev);
  }

  function handleContact(e) {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  }

  function handleWork(e) {
    const { name, value } = e.target;
    setWork({
      ...work,
      [name]: value,
    });
  }

  function handleBirthday(e) {
    const [year, month, day] = e.target.value.split("-");
    setBirthday({
      year,
      month,
      day,
    });
  }

  function handleName(e) {
    const { value } = e.target;
    const part = e.target.name;
    setName({
      ...name,
      [part]: value,
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setProfile({
      ...profile,
      name,
      birthday,
      work,
      contact,
    });
    makeProfile(profile);
  }

  async function makeProfile(profile) {
    await updateUser(props.user._id, profile);
    alert("Your profile information has been updated.");
  }

  if (!props.user) {
    return <h1>Loading...</h1>;
  }

  const date = `${props.user.birthday.year.toString()}-${
    props.user.birthday.month < 10
      ? `0${props.user.birthday.month.toString()}`
      : `${props.user.birthday.month.toString()}`
  }-${props.user.birthday.day.toString()}`;

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
            <form onSubmit={handleSubmit}>
              <button type="submit" className="save-profile-button2">
                Save
              </button>
            </form>
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
                value={name.first}
                className="first"
                name="first"
                onChange={handleName}
              />
              <label className="labelSecond" htmlFor="last">
                Last Name
              </label>
              <input
                value={name.last}
                className="last"
                name="last"
                onChange={handleName}
              />
            </div>

            <div className="profile-gender-box">
              <label className="labelGender" htmlFor="gender">
                {" "}
                Gender{" "}
              </label>

              <select className="gender" name="gender" onChange={handleChange}>
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
                // value={`${profile.birthday.year}-${profile.birthday.month}-${profile.birthday.day}`}
                value={date}
                className="birthday"
                type="date"
                id="birthday"
                name="birthday"
                onChange={handleBirthday}
              />
            </div>

            <div className="profile-work-box">
              <div className="workplaceInput">
                <label className="labelWorkplace" htmlFor="workplace">
                  Institution/Work Place
                </label>
                <input
                  value={work.institution}
                  className="workplace"
                  id="workplace"
                  name="institution"
                  placeholder="Where you work"
                  onChange={handleWork}
                />
              </div>
              <div className="cityInput">
                <label className="labelCity" htmlFor="city">
                  City
                </label>
                <input
                  value={work.city}
                  className="city"
                  id="city"
                  name="city"
                  placeholder="City"
                  onChange={handleWork}
                />
              </div>
              <div className="stateInput">
                <label className="labelState" htmlFor="state">
                  State
                </label>
                <input
                  value={work.state}
                  className="state"
                  id="state"
                  name="state"
                  placeholder="State"
                  onChange={handleWork}
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
                  value={contact.phone}
                  onChange={handleContact}
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
                  value={contact.email}
                  onChange={handleContact}
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
