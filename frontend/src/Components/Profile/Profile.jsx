import "./Profile.css";
import InfoUser from "./InfoUser/InfoUser";
import defaultPic from "../../Images/default-user-image.png";
import PostFeed from "../Main/Feed/PostFeed/PostFeed";
import Card from "../Main/Card/Card";

export default function Profile() {
  return (
    <div>
      <div className="background__user">
        <img
          className="background__user__image"
          src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
          alt=""
        />
        <img className="profile__picture" src={defaultPic} alt="" />
      </div>
      <div className="name__user__container">
        <h5>Alexandre Malet</h5>
        <p className="bio">J'aime les pommes</p>
      </div>
      <div className="profile__feed__container">
        <div className="profile__feed">
          <PostFeed />
          <Card />
        </div>
        <InfoUser />
      </div>
    </div>
  );
}
