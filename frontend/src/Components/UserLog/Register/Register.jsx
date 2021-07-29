import Button from "../Button/Button";
export default function Register() {
  var HandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="log__form">
      <div>
        <h2>R E G I S T E R</h2>
      </div>
      <div className="form">
        <form onSubmit={HandleSubmit}>
          <input type="email" placeholder="username" />
          <input
            className="input__password"
            type="password"
            placeholder="password"
          />
          <Button Log="Register" />
        </form>
      </div>
    </div>
  );
}
