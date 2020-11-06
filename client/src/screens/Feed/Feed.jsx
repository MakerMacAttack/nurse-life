import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PostCreate from "../../components/PostCreate/PostCreate";
import PostList from "../../components/PostList/PostList";
import { getPosts } from "../../services/Posts";
import { getUser } from "../../services/Users";

export default function Feed(props) {
  const [posts, setPosts] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const history = useHistory();

  const register = localStorage.getItem("loggedin");

  if (props.user === null) {
    if (!!register) {
      const currentUser = getUser(register);
      props.setUser(currentUser);
    } else {
      history.push("/sign-in");
    }
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, [trigger]);

  return (
    <div>
      <PostCreate set={setTrigger} user={props.user} />
      <PostList posts={posts} set={setTrigger} />
    </div>
  );
}
