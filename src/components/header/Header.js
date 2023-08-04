import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Users</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
