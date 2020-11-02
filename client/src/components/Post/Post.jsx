import React, { useState } from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { deletePost } from "../../services/Posts.js";

const Post = (props) => {
  function handleDelete() {
    deletePost(props.id);
    props.set((prev) => !prev);
  }

  return (
    <>
      <h2 className="post-name">{props.name}</h2>
      <h3 className="post-content">{props.content}</h3>
      <h4 className="post-imgURL">{props.imgURL}</h4>
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
