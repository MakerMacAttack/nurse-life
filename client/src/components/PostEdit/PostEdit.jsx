import React, { useState, useEffect } from "react";
import "./PostEdit.css";
import { useParams, Redirect } from "react-router-dom";
import { getPost, updatePost } from "../../services/posts";

const PostEdit = (props) => {
  const [post, setPost] = useState({
    name: "",
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
    return <Redirect to={`/posts/${props.match.params.id}`} />;
  }
  return (
    <div className="post-edit">
      <form className="edit-form" onSubmit={handleSubmit}>
        <input
          className="input-name"
          placeholder=""
          value={post.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-content"
          placeholder=""
          value={post.content}
          name="content"
          required
          onChange={handleChange}
        />
        <input
          className="edit-img"
          placeholder=""
          value={post.imgURL}
          name="image"
        />
        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
};
export default PostEdit;
