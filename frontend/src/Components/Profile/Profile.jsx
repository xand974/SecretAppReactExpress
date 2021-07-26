import "./Profile.css";
import InfoUser from "./InfoUser/InfoUser";
import defaultPic from "../../Images/default-user-image.png";
import PostFeed from "../Main/Feed/PostFeed/PostFeed";
import Card from "../Main/Card/Card";
import { User, Post } from "../../Data/Data";
export default function Profile() {
  const userFound = User.filter((user) => user.id === 2)[0];
  const postsFound = Post.filter((post) => post.userId === userFound.id);
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
        <div className="profile__feed">
          <PostFeed image={userFound.profilePic} />
          {postsFound.map((post) => {
            return (
              <Card
                comments={post.comments}
                content={post.content}
                postImage={post.postImage}
                likes={post.likes}
                date={post.date}
                username={userFound.username}
                defaultImage={userFound.profilePic}
              />
            );
          })}
        </div>
        <InfoUser />
      </div>
    </div>
  );
}
