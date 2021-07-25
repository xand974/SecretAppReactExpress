import React from "react";
import defaultProfilePicture from "../../../Images/user__default.jpeg";
export default function Profile({ profilePic, username }) {
  return (
    <div>
      <img src={profilePic || defaultProfilePicture} alt="profile" />
      <li className="profile__li">{username}</li>
    </div>
  );
}
