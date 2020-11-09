import React, { useState } from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { deletePost } from "../../services/Posts.js";
import { getUser } from "../../services/Users";

const Post = (props) => {
  const { content, imgURL, date } = props;
  const [name, setName] = useState("");
  // let fullPost = null;

  function populateName(user) {
    setName(`${user.name.first} ${user.name.last}`);
    // compilePost();
  }

  async function fetchName() {
    try {
      const user = await getUser(props.user);
      populateName(user);
    } catch (error) {
      setName(`Author has been deleted`);
    }
  }

  async function handleDelete() {
    await deletePost(props.id);
    props.set((prev) => !prev);
  }

  // function compilePost() {
  //   console.log(name);
  //   if () {
  //     fullPost = (
  //       <div className="post-container">
  //         {/* <h2 className="post-name">{name}</h2>
  //         <h3 className="post-content">{content}</h3> */}
  //         <img className="post-image" src={imgURL} alt="post" />
  //       </div>
  //     );
  //   } else {
  //     fullPost = <div></div>;
  //   }
  // }

  fetchName();

  const alphaMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let timeStamp = date.split("-", 3);
  let numericDate = timeStamp[2].split("T", 1);
  let numericMonth = timeStamp[1];
  let alphaMonth = alphaMonths[numericMonth - 1];

  return (
    <div className="post-single-post">
      <div className="post-user-data">
        <img className="post-profile-pic" src="./assets/images/blank-profile-picture.png"/>
        <h3 className="post-name">{name}</h3>
        <h3 className="post-date">{alphaMonth} {numericDate}, {timeStamp[0]}</h3>
      </div>
      <div className="post-content-data">
        <h3 className="post-content">{content}</h3>
        {/.+\.(jpg|jpeg|png|apng|gif|bmp|svg)$/.test(imgURL) ? (
          <img className="post-image" src={imgURL} alt="post" />
        ) : (
          <div></div>
        )}
        <div>
          <button className="edit-button">
            <Link className="edit-link" to={`/posts/${props.id}/edit`}>
              Edit
            </Link>
          </button>
        </div>
        <div className="delete-button">
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
