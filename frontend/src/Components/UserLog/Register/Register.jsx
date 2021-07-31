import { useRef } from "react";
import Button from "../Button/Button";
import Api from "../../../config/axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "../UserLog.css";
export default function Register() {
  const history = useHistory();

  var HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Api.post("/user/register", {
        username: username.current.value,
        password: password.current.value,
      });
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const username = useRef();
  const password = useRef();
  return (
    <div className="log__container">
      <div className="log__form">
        <div>
          <h2>R E G I S T E R</h2>
        </div>
        <div className="form">
          <form onSubmit={HandleSubmit}>
            <input ref={username} type="text" placeholder="username" />
            <input
              ref={password}
              className="input__password"
              type="password"
              placeholder="password"
            />
            <Button Log="Register" />
          </form>
        </div>
        <div className="redirect__container">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
