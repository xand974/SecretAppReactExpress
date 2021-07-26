import React from "react";

export default function Login() {
  return (
    <div className="login__form">
      <div>
        <h2>{/* L <br /> O <br /> G <br /> I <br /> N */}L O G I N</h2>
      </div>
      <div className="form">
        <form>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
        </form>
      </div>
    </div>
  );
}
