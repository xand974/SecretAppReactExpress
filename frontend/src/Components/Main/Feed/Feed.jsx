import "./Feed.css";
import PostFeed from "./PostFeed/PostFeed";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get("api/home/").then((res) => {
      return setPosts(res.data);
    });
  }, []);

  return (
    <div className="feed__container">
      <PostFeed />
      <div className="feed__cards">
        {posts.map((post) => {
          return (
            <Card
              key={post.id}
              post={post}
              // username={user.username}
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
