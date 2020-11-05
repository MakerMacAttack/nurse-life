import React, { useState } from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { deletePost } from "../../services/Posts.js";
import { getUser } from "../../services/Users";

const Post = (props) => {
  const { content, imgURL } = props;
  const [name, setName] = useState("");
  // let fullPost = null;

  function populateName(user) {
    setName(`${user.name.first} ${user.name.last}`);
    // compilePost();
  }

  async function fetchName() {
    const user = await getUser(props.user);
    populateName(user);
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

  return (
    <>
      <h2 className="post-name">{name}</h2>
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
    </>
  );
};

export default Post;
