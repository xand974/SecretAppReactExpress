import React from "react";
import Register from "./Register";
import Login from "./Login/Login";
import "./UserLog.css";

export default function UserLog() {
  return (
    <div className="log__container">
      <Register />
      <Login />
    </div>
  );
}
