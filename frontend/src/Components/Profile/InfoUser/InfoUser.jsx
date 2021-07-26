import React from "react";
import "./InfoUser.css";
import OnlineFriend from "../../Main/Contact/OnlineFriend/OnlineFriend";
import { User } from "../../../Data/Data";
export default function InfoUser() {
  const userFound = User.filter((user) => user.id === 2)[0];
  return (
    <div className="profile__infos__user">
      <div className="profile__infos">
        <h5>User Informations</h5>
        <div>
          <li>
            <strong>City :</strong> {userFound.city}
          </li>
          <li>
            <strong>From : </strong>
            {userFound.from}
          </li>
          <li>
            <strong>RelationShip :</strong> {userFound.relationship}
          </li>
        </div>
      </div>
      <div className="profile__friends">
        <h5>User Friends</h5>
        <div>
          {userFound.friend.map((friend) => {
            return <OnlineFriend key={friend.id} username={friend.username} />;
          })}
        </div>
      </div>
    </div>
  );
}
