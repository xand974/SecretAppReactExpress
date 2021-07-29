import "./Profile.css";
import defaultPic from "../../Images/default-user-image.png";
import Feed from "../Main/Feed/Feed";
import InfoUser from "../Profile/InfoUser/InfoUser";
import { useEffect, useState } from "react";
import api from "../../config/axios";
import { useParams } from "react-router-dom";

export default function Profile({ userId }) {
  const [user, setUser] = useState({});
  const { username } = useParams();

  useEffect(() => {
    username
      ? api.get(`/user?username=${username}`).then((res) => {
          setUser(res.data);
        })
      : api.get(`/user?userId=${userId}`).then((res) => {
          setUser(res.data);
        });
  }, [userId, username]);
  return (
    <div>
      <div className="background__user">
        <img
          className="background__user__image"
          src={user.backgroundPicture || defaultPic}
          alt=""
        />
        <img
          className="profile__picture"
          src={user.profilePicture || defaultPic}
          alt=""
        />
      </div>
      <div className="name__user__container">
        <h5>{user.username}</h5>
        <p className="bio">{user.description || "no description"}</p>
      </div>
      <div className="profile__feed__container">
        <Feed key={user.id} username={username} />
        <InfoUser user={user} key={user.id} />
      </div>
    </div>
  );
}
