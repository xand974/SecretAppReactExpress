import { useRef } from "react";
import Button from "../Button/Button";

export default function Login() {
  const email = useRef();
  const password = useRef();

  var HandleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value);
  };

  return (
    <div className="login__form">
      <div>
        <h2>L O G I N</h2>
      </div>
      <div className="form" onSubmit={HandleSubmit}>
        <form>
          <input type="email" required ref={email} placeholder="username" />
          <input
            ref={password}
            required
            className="input__password"
            type="password"
            placeholder="password"
          />
          <Button Log="Login" />
        </form>
      </div>
    </div>
  );
}
