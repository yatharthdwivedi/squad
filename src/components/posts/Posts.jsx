import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts")
      .then((response) => {
        if (response) {
          setPosts(response.data);
          console.log(posts);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="posts">
      <h2>All Posts</h2>
      <div className="cards">
        {posts?.map((post) => (
          <div className="posts-card" key={post.id}>
            <div className="post-img">
              <img src={post.cover} alt={post.title} className="image" />
            </div>
            <div className="details">
              <h2 className="title">{post.title}</h2>
              <p className="date">Created at : {post.createdAt}</p>
              <Link to={`/posts/${post.id}`} className="link">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/new-post" className="create-post-btn">
        Create New Post
      </Link>
    </div>
  );
};

export default Posts;
