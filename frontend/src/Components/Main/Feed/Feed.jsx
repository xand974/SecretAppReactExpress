import "./Feed.css";
import PostFeed from "./PostFeed/PostFeed";
import Card from "../Card/Card";
import { useContext, useEffect, useState } from "react";
import api from "../../../config/axios";
import { AuthContext } from "../../../context/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  const { user } = useContext(AuthContext);
  useEffect(() => {
    username
      ? api.get(`/home/timenote/${username}`).then((res) => {
          setPosts(res.data);
        })
      : api.get("/home/timenote/all/" + user._id).then((res) => {
          return setPosts(
            res.data.sort((post1, post2) => {
              return new Date(post2.date) - new Date(post1.date);
            })
          );
        });
  }, [username, user]);

  return (
    <div className="feed__container">
      <PostFeed />
      <div className="feed__cards">
        {posts.map((post) => {
          return <Card key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
