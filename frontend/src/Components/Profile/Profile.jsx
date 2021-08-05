import "./Profile.css";
import defaultPic from "../../Images/default-user-image.png";
import Feed from "../Main/Feed/Feed";
import InfoUser from "../Profile/InfoUser/InfoUser";
import { useContext, useEffect, useState } from "react";
import api from "../../config/axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Profile({ userId }) {
  const [user, setUser] = useState({});
  const { username } = useParams();
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [follow, setFollow] = useState(
    currentUser.following.map((follow) => follow._id).includes(user._id)
  );

  var arr = [
    { id: 1, name: "alex" },
    { id: 4, name: "pomme" },
    { id: 5, name: "malet" },
  ];
  console.log(arr.map((a) => a.name).includes("alex"));

  useEffect(() => {
    // for (let i = 0; i < currentUser.following.length; i++) {
    //   if (currentUser.following[i]._id === user._id) {
    //     setFollow(true);
    //     break;
    //   }
    // }
    setFollow(
      currentUser.following.map((follow) => follow._id).includes(user._id)
    );
  }, [currentUser, user?._id]);

  useEffect(() => {
    username
      ? api.get(`/user?username=${username}`).then((res) => {
          setUser(res.data);
        })
      : api.get(`/user?userId=${userId}`).then((res) => {
          setUser(res.data);
        });
  }, [userId, username]);

  const HandleFollowClick = async () => {
    try {
      if (follow) {
        await api.post(`/user/unfollow/${user._id}`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await api.post(`/user/follow/${user._id}`, {
          userId: currentUser._id,
        });

        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (err) {
      console.log("erreur " + err);
    }
    setFollow(!follow);
  };
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
        <div>
          <h5>{user.username}</h5>
          <p className="bio">{user.description || "no description"}</p>
        </div>
        <div className="follow__user">
          <button onClick={HandleFollowClick}>
            {follow ? "UnFollow" : "Follow"}
          </button>
        </div>
      </div>
      <div className="profile__feed__container">
        <Feed key={user.id} username={username} />
        <InfoUser user={user} key={user.id} />
      </div>
    </div>
  );
}
