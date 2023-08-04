import axios from "axios";
import React, { useState } from "react";
import './new.css'

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/post", {
        title,
        desc,
      })
      .then((respones) => {
        console.log("New Post", respones.data);
      })
      .catch((error) => {
        console.error("Error => ", error);
      });
  };

  return (
    <div className="new-post">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title :</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default NewPost;
