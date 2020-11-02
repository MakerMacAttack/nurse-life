import React, { useState } from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { deletePost } from "../../services/Posts.js";

const Post = (props) => {
  const { name, content, imgURL } = props;

  function handleDelete() {
    deletePost(props.id);
    props.set((prev) => !prev);
  }

  let fullPost = <h1>Something went wrong</h1>;

  function compilePost() {
    if (/.+\.(jpg|jpeg|png|apng|gif|bmp|svg)$/.test(imgURL)) {
      fullPost = (
        <div>
          <h2 className="post-name">{name}</h2>
          <h3 className="post-content">{content}</h3>
          <img className="post-image" src={imgURL} alt="Image with post" />
        </div>
      );
    } else {
      fullPost = (
        <div>
          <h2 className="post-name">{name}</h2>
          <h3 className="post-content">{content}</h3>
        </div>
      );
    }
  }

  compilePost();

  return (
    <>
      {fullPost}
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
