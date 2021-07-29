import "./Profile.css";
import defaultPic from "../../Images/default-user-image.png";
import { User } from "../../Data/Data";
import Feed from "../Main/Feed/Feed";
import InfoUser from "../Profile/InfoUser/InfoUser";

export default function Profile() {
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
        <Feed username="xand974" />
        <InfoUser />
      </div>
    </div>
  );
}
