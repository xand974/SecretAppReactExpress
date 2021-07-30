import { useContext, useRef } from "react";
import Button from "../Button/Button";
import { loginCall } from "../../../apiCalls";
import { AuthContext } from "../../../context/AuthContext";

export default function Login() {
  const username = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  var HandleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        username: username.current.value,
        password: password.current.value,
      },
      dispatch
    );
    console.log(user);
  };

  return (
    <div className="log__form">
      <div>
        <h2>L O G I N</h2>
      </div>
      <div className="form" onSubmit={HandleSubmit}>
        <form>
          <input
            type="username"
            required
            ref={username}
            placeholder="username"
          />
          <input
            ref={password}
            required
            className="input__password"
            type="password"
            placeholder="password"
          />
          <Button Log={isFetching ? "wait" : "Login"} />
        </form>
      </div>
    </div>
  );
}
