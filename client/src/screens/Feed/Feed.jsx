import React, { useState, useEffect } from "react";
import PostCreate from "../../components/PostCreate/PostCreate";
import PostList from "../../components/PostList/PostList";
import { getPosts } from "../../services/Posts";

export default function Feed(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <PostCreate />
      <PostList posts={posts} />
    </div>
  );
}
