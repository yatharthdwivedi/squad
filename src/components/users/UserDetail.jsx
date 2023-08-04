import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./details.css";

const UserDetail = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  //   if (!user) {
  //     return <div>No User</div>;
  //   }

  return (
    <div className="user">
      <div className="details">
       
          <img src={user?.avatar} alt={user?.name} className="image" />

        
          <div className="name">{user?.name}</div>
          <div className="about">{user?.about}</div>
          <div className="details"><span>Email :</span> {user?.email}</div>
     
          <Link to={`/posts`} className="link">
            View Posts
          </Link>
          <Link to="/" className="back-link">
            Back to Users
          </Link>
        
      </div>
    </div>
  );
};

export default UserDetail;
