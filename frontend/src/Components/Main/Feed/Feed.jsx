import "./Feed.css";
import PostFeed from "./PostFeed/PostFeed";
import Card from "../Card/Card";
import { Post, User } from "../../../Data/Data";
import { useEffect, useState } from "react";
// import Axios from "../../../config/axios";
import Axios from "axios";

export default function Feed() {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    Axios.get("api/home/").then((res) => {
      console.log(res.data);
      return setPosts(res.data);
    });
  }, []);

  return (
    <div className="feed__container">
      <PostFeed />
      <div className="feed__cards">
        {post.map((post) => {
          return (
            <Card
              key={post.id}
              comments={post.comments}
              date={post.date}
              postImage={post.postImage}
              likes={post.likes.length}
              // username={
              //   User.filter((user) => user.id === post.userId)[0].username
              // }
              // defaultImage={
              //   User.filter((user) => user.id === post.userId)[0].profilePic
              // }
            />
          );
        })}
      </div>
    </div>
  );
}
