import React from "react";
import "./Post.css";
import { Link } from "react-router-dom"

const Post = (props) => {
  return (
    <>
      <h2 className="post-name">{props.name}</h2>
      <h3 className="post-content">{props.content}</h3>
      <h4 className="post-imgURL">{props.imgURL}</h4>
      <div>
        <button className="edit-button">
          <Link className="edit-link" to={`/posts/${props._id}/edit`}>
            Edit
          </Link>
        </button>
      </div>
    </>
  );
};

export default Post;
