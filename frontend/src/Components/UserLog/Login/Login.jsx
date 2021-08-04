import { useContext, useRef } from "react";
import Button from "../Button/Button";
import { loginCall } from "../../../apiCalls";
import { AuthContext } from "../../../context/AuthContext";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import "./Login.css";
import { Link } from "react-router-dom";
import "../UserLog.css";

export default function Login() {
  const username = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  var HandleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        username: username.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  return (
    <div className="log__container">
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
            <Button
              Log={
                isFetching ? (
                  <AutorenewIcon className="anim_loading" />
                ) : (
                  "Login"
                )
              }
            />
          </form>
        </div>
        <div>
          <div className="redirect__container">
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
