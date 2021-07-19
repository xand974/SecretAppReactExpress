import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Dropdown from "./Dropdown";
import defaultPic from "../../Images/default-user-image.png";

export default function Navigation() {
  return (
    <div className="nav__li">
      <Link style={{ textDecoration: "none" }} to="/">
        <li className="list">Home</li>
      </Link>
      <div className="drop">
        <Link style={{ textDecoration: "none" }} to="/post">
          <li className="list">Poster</li>
        </Link>
        <Dropdown />
      </div>

      <Link className="list" style={{ textDecoration: "none" }} to="/chat">
        <li>Chat</li>
      </Link>

      <Link className="list" style={{ textDecoration: "none" }} to="/contact">
        <li>Contact</li>
      </Link>
      <Link
        className="list"
        style={{ textDecoration: "none" }}
        to="/profile/:id"
      >
        <img src={defaultPic} alt="user default" />
      </Link>
    </div>
  );
}
