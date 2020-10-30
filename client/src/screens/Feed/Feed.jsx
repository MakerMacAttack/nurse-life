import React from "react";
import PostCreate from "../../components/PostCreate/PostCreate";
import PostList from "../../components/PostList/PostList";

export default function Feed(props) {
  const posts = {
    name: "mac",
    content: "first post",
    imgURL:
      "https://developer.nvidia.com/sites/default/files/akamai/embedded/images/2018-power-up-logo-promo.jpg",
  };

  return (
    <div>
      <PostCreate />
      <PostList posts={posts} />
    </div>
  );
}
