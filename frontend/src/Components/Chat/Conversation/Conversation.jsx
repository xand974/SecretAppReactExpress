import React, { useEffect, useState } from "react";
import defaultPic from "../../../Images/default-user-image.png";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Api from "../../../config/axios";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const FetchUser = async () => {
      const friendId = conversation.members.find(
        (member) => member !== currentUser._id
      );
      try {
        const res = await Api.get("/user?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    FetchUser();
  }, [conversation, currentUser._id]);

  return (
    <div>
      <div className="online__main">
        <div className="online__image__container">
          <img
            className="online__image"
            src={user?.profilePicture || defaultPic}
            alt="profile"
          />
          <FiberManualRecordIcon className="online" />
        </div>
        <div>
          <p className="online__name">{user?.username}</p>
        </div>
      </div>
    </div>
  );
}
