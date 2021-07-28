import Button from "../Button/Button";

export default function Login() {
  return (
    <div className="login__form">
      <div>
        <h2>{/* L <br /> O <br /> G <br /> I <br /> N */}L O G I N</h2>
      </div>
      <div className="form">
        <form>
          <input type="text" placeholder="username" />
          <input
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
