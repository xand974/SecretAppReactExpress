import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Dropdown from "./Dropdown";
import defaultPic from "../../Images/default-user-image.png";

export default function Navigation() {
  var postLinks = [
    "Un post",
    "Un vis sur le site ",
    "Sur vos réseaux sociaux préférés",
  ];
  var chatLinks = ["Commencer", "Comment ça fonctionne ?"];
  var accountLinks = ["Gérer votre compte", "Déconnexion"];
  return (
    <div className="nav__li">
      <Link style={{ textDecoration: "none" }} to="/">
        <li className="list">Home</li>
      </Link>
      <div className="drop">
        <Link style={{ textDecoration: "none" }} to="/post">
          <li className="list">Poster</li>
        </Link>
        <Dropdown listLinks={postLinks} />
      </div>

      <div className="drop">
        <Link className="list" style={{ textDecoration: "none" }} to="/chat">
          <li>Chat</li>
        </Link>
        <Dropdown listLinks={chatLinks} />
      </div>

      <Link className="list" style={{ textDecoration: "none" }} to="/contact">
        <li>Contact</li>
      </Link>

      <div className="drop">
        <Link
          className="list"
          style={{ textDecoration: "none" }}
          to="/profile/:id"
        >
          <img src={defaultPic} alt="user default" />
        </Link>
        <Dropdown listLinks={accountLinks} />
      </div>
    </div>
  );
}
