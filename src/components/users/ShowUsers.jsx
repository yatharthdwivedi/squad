import React, { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="users">
        <h1 className="heading">All Users</h1>
        <div className="users-list">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <Link to={`/users/${user.id}`}>
                {user.avatar && (
                  <img src={user.avatar} alt={`Avatar of ${user.name}`} />
                )}
                <h2>{user.name}</h2>
                <p>{user.about}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowUsers;
