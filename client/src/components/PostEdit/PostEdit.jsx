import React, { useState, useEffect } from "react";
import "./PostEdit.css";
import { useParams, Redirect } from "react-router-dom";
import { getPost, updatePost } from "../../services/Posts.js";

const PostEdit = (props) => {
  const [post, setPost] = useState({
    content: "",
    imgURL: "",
  });
  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await updatePost(id, post);
    setUpdated(updated);
  };
  if (isUpdated) {
    return <Redirect to={`/`} />;
  }

  return (
    <div className="post-edit">
      <form className="edit-form" onSubmit={handleSubmit}>
        <span>Post Content</span>
        <textarea
          className="post-edit-input-content"
          placeholder=""
          maxLength="200"
          value={post.content}
          name="content"
          required
          onChange={handleChange}
        />
        <span>Image URL</span>
        <input
          className="post-edit-edit-img"
          placeholder=""
          value={post.imgURL}
          name="imgURL"
          onChange={handleChange}
        />
        <button type="submit" className="post-edit-save-button">
          Save!
        </button>
      </form>
    </div>
  );
};

export default PostEdit;
