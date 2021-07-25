import React from "react";
import defaultPic from "../../../../Images/default-user-image.png";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import "./OnlineFriend.css";
export default function OnlineFriend({ username, picture }) {
  return (
    <div className="online__main">
      <div className="online__image__container">
        <img
          className="online__image"
          src={picture || defaultPic}
          alt="profile"
        />
        <FiberManualRecordIcon className="online" />
      </div>
      <div>
        <p className="online__name">{username}</p>
      </div>
    </div>
  );
}
