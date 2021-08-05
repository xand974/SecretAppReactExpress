import "./chat.css";
import OnlineFriend from "../Main/Contact/OnlineFriend/OnlineFriend";
import Message from "./Message/Message";
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
      <div className="chat__box">
        <div className="chatbox__wrap">
          <div className="chatbox__top">
            <Message own={true} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
          </div>
          <div className="chatbox__bottom"></div>
        </div>
      </div>
      <div className="chat__online__friends"></div>
    </div>
  );
}
