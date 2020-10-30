import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <>
      <Link className="post" to={`/posts/${props._id}`}>
        <h2 className="post-name">{props.name}</h2>
        <h3 className="post-content">{props.content}</h3>
        <h4 className="post-imgURL">{props.imgURL}</h4>
      </Link>
    </>
  );
};

export default Post;