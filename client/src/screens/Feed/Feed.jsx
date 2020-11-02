import React, { useState, useEffect } from "react";
import PostCreate from "../../components/PostCreate/PostCreate";
import PostList from "../../components/PostList/PostList";
import { getPosts } from "../../services/Posts";

export default function Feed(props) {
  const [posts, setPosts] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, [trigger]);

  return (
    <div>
      <PostCreate />
      <PostList posts={posts} set={setTrigger} />
    </div>
  );
}
