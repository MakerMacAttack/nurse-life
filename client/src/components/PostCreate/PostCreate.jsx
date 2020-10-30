import React from "react";
import "./PostCreate.css";
import { createPost } from "../../services/Posts";
import { Redirect } from "react-router-dom";

const PostCreate = (props) => {
  const [post, setPost] = useState({
    name: "",
    content: "",
    imgURL: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createPost(post);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/posts`} />;
  }

  return (
    <Layout user={props.user}>
      <form className="post-form" onSubmit={handleSubmit}>
        <input
          className="input-name"
          placeholder="Name"
          value={post.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-content"
          placeholder="Content"
          value={post.content}
          name="content"
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="ImageLink"
          value={post.imgURL}
          name="imgURL"
          onChange={handleChange}
        />
        <button type="submit" className="post-button">
          Post
        </button>
      </form>
    </Layout>
  );
};

export default PostCreate;

// Note, this is the one we expect to be a modal, so we have to look that up.
