import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Dropdown from "./Dropdown";

export default function Navigation() {
  return (
    <div className="nav__li">
      <Link style={{ textDecoration: "none" }} to="/">
        <li>Home</li>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/post">
        <li>
          Poster
          <Dropdown />
        </li>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/chat">
        <li>Chat</li>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/contact">
        <li>Contact</li>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/profile/:id">
        <img src="./default-user-image.png" alt="user default" />
      </Link>
    </div>
  );
}
