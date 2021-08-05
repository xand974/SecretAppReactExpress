import "./chat.css";
import OnlineFriend from "../Main/Contact/OnlineFriend/OnlineFriend";
export default function Chat() {
  return (
    <div className="chat__container">
      <div className="chat__menu">
        <form className="chat__form__menu">
          <input placeholder="Rechercher un ami" />
        </form>

        <OnlineFriend username="Momo" />
        <OnlineFriend username="Momo" />
        <OnlineFriend username="Momo" />
      </div>
      <div className="chat__box"></div>
      <div className="chat__online__friends"></div>
    </div>
  );
}
