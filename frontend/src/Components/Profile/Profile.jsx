import "./Profile.css";
import InfoUser from "./InfoUser/InfoUser";
import defaultPic from "../../Images/default-user-image.png";
import PostFeed from "../Main/Feed/PostFeed/PostFeed";
import Card from "../Main/Card/Card";
import { User } from "../../Data/Data";
import Api from "../../config/axios";
import Axios from "axios";
import { useEffect, useState } from "react";

export default function Profile({ username }) {
  const [userPost, setUserPost] = useState([]);
  useEffect(() => {
    Api.get(`http://localhost:3001/api/home/timenote/${username}`).then(
      (res) => {
        return setUserPost(res.data);
      }
    );
  }, [username]);

  const userFound = User.filter((user) => user.id === 2)[0];
  return (
    <div>
      <div className="background__user">
        <img
          className="background__user__image"
          src={userFound.background_pic || defaultPic}
          alt=""
        />
        <img
          className="profile__picture"
          src={userFound.profilePic || defaultPic}
          alt=""
        />
      </div>
      <div className="name__user__container">
        <h5>Alexandre Malet</h5>
        <p className="bio">J'aime les pommes</p>
      </div>
      <div className="profile__feed__container">
        <div className="feed__container">
          <PostFeed />
          <div className="feed__cards">
            {userPost.map((post) => {
              return <Card post={post} key={post.id} />;
            })}
          </div>
        </div>
        <InfoUser />
      </div>
    </div>
  );
}
