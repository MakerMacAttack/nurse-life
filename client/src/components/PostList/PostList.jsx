import React from "react";
import Post from "../Post/Post";

export default function PostList(props) {
  return (
    <div id="post-list">
      {props.posts.map((post) => (
        <Post
          key={post._id}
          name={post.name}
          content={post.content}
          imgURL={post.imgURL}
          id={post._id}
          set={props.set}
        />
      ))}
    </div>
  );
}
