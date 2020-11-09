import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createUser } from "../../services/Users";
import "./Register.css";

export default function Register(props) {
  const [profile, setProfile] = useState({
    name: {
      first: "",
      last: "",
    },
    gender: "",
    password: "",
    birthday: {
      year: 0,
      month: 0,
      day: 0,
    },
    work: {
      institution: "",
      state: "",
      city: "",
    },
    contact: {
      phone: "",
      email: "",
    },
    privacy: {
      anonymous: false,
      locationServices: true,
    },
  });
  const [name, setName] = useState({
    first: "",
    last: "",
  });
  const [birthday, setBirthday] = useState({
    year: 0,
    month: 0,
    day: 0,
  });
  const [work, setWork] = useState({
    institution: "",
    state: "",
    city: "",
  });
  const [contact, setContact] = useState({
    phone: "",
    email: "",
  });

  const history = useHistory();

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

  async function handleSubmit(e) {
    e.preventDefault();
    setProfile({
      ...profile,
      name,
      birthday,
      work,
      contact,
    });
    await makeProfile(profile);
  }

  async function makeProfile(profile) {
    await createUser(profile);
    alert("Profile created. Please log-in with your new credentials.");
    history.push("/sign-in");
  }

  return (
    <div className="profile-master">
      <div className="profile-master2">
        <div className="profile-header-top">
          <div className="profile-header">
            <div className="pic-box">
              <img
                className="profile-pic"
                src="./assets/images/ProfilePic.png"
                alt="User-profile"
              />
              <p className="edit-pic">Edit Profile Picture</p>
            </div>
            <h1>Create Account</h1>
          </div>
          <div className="save-profile-button">
            <form onSubmit={handleSubmit}>
              <button type="submit" className="save-profile-button2">
                Create Account
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
                className="first"
                name="first"
                value={name.first}
                onChange={handleName}
              />
              <label className="labelSecond" htmlFor="last">
                Last Name
              </label>
              <input
                className="last"
                name="last"
                value={name.last}
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
                <label className="labelPassword" htmlFor="password">
                  Password
                </label>
                <input
                  className="password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Choose a password"
                  value={profile.password}
                  onChange={handleChange}
                />
            </div>

            <div className="profile-bday-box">
              <label className="labelBirthday" htmlFor="birthday">
                Date of birth
              </label>
              <input
                className="birthday"
                type="date"
                id="birthday"
                name="birthday"
                value={`${birthday.year}-${birthday.month}-${birthday.day}`}
                onChange={handleBirthday}
              />
            </div>

            <div className="profile-work-box">
              <div className="workplaceInput">
                <label className="labelWorkplace" htmlFor="workplace">
                  Institution/Work Place
                </label>
                <input
                  className="workplace"
                  id="workplace"
                  name="institution"
                  placeholder="Where you work"
                  value={work.institution}
                  onChange={handleWork}
                />
              </div>
              <div className="cityInput">
                <label className="labelCity" htmlFor="city">
                  City
                </label>
                <input
                  className="city"
                  id="city"
                  name="city"
                  placeholder="City"
                  value={work.city}
                  onChange={handleWork}
                />
              </div>
              <div className="stateInput">
                <label className="labelState" htmlFor="state">
                  State
                </label>
                <input
                  className="state"
                  id="state"
                  name="state"
                  placeholder="State"
                  value={work.state}
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
              </div>
              </div>
          </div>
        </form>
      </div>
    </div>
  );
}
