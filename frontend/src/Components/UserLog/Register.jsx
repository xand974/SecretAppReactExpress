import React from "react";

export default function Register() {
  return (
    <div className="register__form">
      <div>
        <h2>
          {/* R <br /> E <br /> G <br /> I <br /> S <br /> T <br /> E <br /> R */}
          R E G I S T E R
        </h2>
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
