import React, { useEffect, useState } from "react";
import "./InfoUser.css";
import OnlineFriend from "../../Main/Contact/OnlineFriend/OnlineFriend";
import Api from "../../../config/axios";
export default function InfoUser({ user }) {
  const [friendsUser, setFriendsUser] = useState([]);
  useEffect(() => {
    var fetchFriends = async () => {
      try {
        const res = await Api.get(`/user/${user._id}/friends`);
        return setFriendsUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFriends();
  }, [user._id]);
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
          {friendsUser.map((follow, index) => {
            return <OnlineFriend key={follow._id} username={follow.username} />;
          })}
        </div>
      </div>
    </div>
  );
}
