import React from "react";
import { Redeem } from "@material-ui/icons";
import "./Notification.css";

export default function Notification() {
  return (
    <div className="gif__container">
      <Redeem className="gift" />
      <p>
        <strong>Alexandre Malet</strong> t'a envoyé un cadeau, regarde !
      </p>
    </div>
  );
}
