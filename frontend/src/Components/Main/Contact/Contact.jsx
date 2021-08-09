import "./Contact.css";
import Notification from "./Notifications/Notification";
import Pub from "./Pub/Pub";

export default function Contact() {
  return (
    <div className="contact__container">
      <Notification />
      <Pub />
    </div>
  );
}
