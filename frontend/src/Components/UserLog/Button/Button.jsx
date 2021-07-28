import "./Button.css";

export default function Button({ Log }) {
  return (
    <div className="btn__log">
      <button type="submit">{Log}</button>
    </div>
  );
}
