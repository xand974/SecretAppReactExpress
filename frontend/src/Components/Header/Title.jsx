import React from "react";
import "./Title.css";
import { Link } from "react-router-dom";
export default function Title() {
  return (
    <Link style={{ textDecoration: "none", color: "black" }} to="/">
      <h1 className="title">StScrt 🔒 </h1>
    </Link>
  );
}
