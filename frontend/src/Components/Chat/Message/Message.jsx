import "./message.css";
import * as timeago from "timeago.js";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own " : "message"}>
      <div className="message__top">
        <img
          src="https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png"
          alt=""
          className="message__image"
        />
        <p className="message__content">{message?.text}</p>
      </div>
      <div className="message__bottom">
        <p className="message__time">{timeago.format(message?.updatedAt)}</p>
      </div>
    </div>
  );
}
