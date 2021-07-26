import React from "react";
import "./InfoUser.css";
import OnlineFriend from "../../Main/Contact/OnlineFriend/OnlineFriend";

export default function InfoUser() {
  return (
    <div className="profile__infos__user">
      <div className="profile__infos">
        <h5>User Informations</h5>
        <div>
          <li>
            <strong>City :</strong> London
          </li>
          <li>
            <strong>From : </strong>Réunion
          </li>
          <li>
            <strong>RelationShip :</strong> Single
          </li>
        </div>
      </div>
      <div className="profile__friends">
        <h5>User Friends</h5>
        <div>
          <OnlineFriend username="Pomme" />
        </div>
      </div>
    </div>
  );
}
