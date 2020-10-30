import React from "react";
import "./Post.css";


const Post = (props) => {
  return (
    <>
        <h2 className="post-name">{props.name}</h2>
        <h3 className="post-content">{props.content}</h3>
        <h4 className="post-imgURL">{props.imgURL}</h4>
    </>
  );
};

export default Post;