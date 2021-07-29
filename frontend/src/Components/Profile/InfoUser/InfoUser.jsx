import React from "react";
import "./InfoUser.css";
import OnlineFriend from "../../Main/Contact/OnlineFriend/OnlineFriend";

export default function InfoUser({ user }) {
  return (
    <div className="profile__infos__user">
      <div className="profile__infos">
        <h5>User Informations</h5>
        <div>
          <li>
            <strong>City :</strong> {user.city}
          </li>
          <li>
            <strong>From : </strong>
            {user.from}
          </li>
          <li>
            <strong>RelationShip :</strong> {user.relationship}
          </li>
        </div>
      </div>
      <div className="profile__friends">
        <h5>User Friends</h5>
        <div>
          {/* {user.following.map((follow) => {
            return <OnlineFriend key={follow.id} username={follow.username} />;
          })} */}
        </div>
      </div>
    </div>
  );
}
