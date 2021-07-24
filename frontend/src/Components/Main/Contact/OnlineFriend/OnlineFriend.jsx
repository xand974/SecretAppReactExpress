import React from "react";
import image from "../../../../Images/default-user-image.png";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import "./OnlineFriend.css";
export default function OnlineFriend() {
  return (
    <div className="online__main">
      <div className="online__image__container">
        <img className="online__image" src={image} alt="profile" />
        <FiberManualRecordIcon className="online" />
      </div>
      <div>
        <p className="online__name">Morgane Lartin</p>
      </div>
    </div>
  );
}
