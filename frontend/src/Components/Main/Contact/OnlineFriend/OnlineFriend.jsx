import React, { useEffect, useState } from "react";
import defaultPic from "../../../../Images/default-user-image.png";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Api from "../../../../config/axios";

import "./OnlineFriend.css";
export default function OnlineFriend({
  username,
  onlineFriend,
  setCurrentChat,
  user,
}) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await Api.get("/user/" + user?._id + "/friends");
      setFriends(res.data);
    };
    getFriends();
  }, [user]);

  useEffect(() => {
    //check si le user est connecté : si il y a un web socket ou non
    setOnlineFriends(
      friends.filter((f) => onlineFriend.some((fr) => fr.userId === f._id))
    );
  }, [friends, onlineFriend]);

  const handleOpenConversation = async (friend) => {
    try {
      const res = await Api.get(
        `/conversation/find/${user?._id}/${friend?._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="online__main">
      {onlineFriends.map((o) => {
        return (
          <>
            <div
              className="online__image__container"
              onClick={() => {
                handleOpenConversation(o);
              }}
            >
              <img
                className="online__image"
                src={o?.profilePicture || defaultPic}
                alt="profile"
              />
              <FiberManualRecordIcon className="online" />
            </div>
            <div>
              <p className="online__name">{o?.username || username}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}
