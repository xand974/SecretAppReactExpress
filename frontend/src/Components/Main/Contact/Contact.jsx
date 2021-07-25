import "./Contact.css";
import OnlineFriend from "./OnlineFriend/OnlineFriend";
import Notification from "./Notifications/Notification";
import Pub from "./Pub/Pub";
import { User } from "../../../Data/Data";

export default function Contact() {
  return (
    <div className="contact__container">
      <Notification />
      <Pub />
      <div className="online__friend">
        <p className="text__bold">Online Friend</p>
      </div>
      <div>
        {User.map((user) => {
          return (
            <OnlineFriend
              username={user.username}
              picture={user.profilePic}
              key={user.id}
            />
          );
        })}
      </div>
    </div>
  );
}
