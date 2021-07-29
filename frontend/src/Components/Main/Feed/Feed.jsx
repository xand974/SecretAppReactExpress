import "./Feed.css";
import PostFeed from "./PostFeed/PostFeed";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import Axios from "axios";

const api = Axios.create({ baseURL: "http://localhost:3001/api" });

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    username
      ? api.get(`/home/timenote/${username}`).then((res) => {
          console.log(res.data);
          setPosts(res.data);
        })
      : api.get("/home/").then((res) => {
          console.log(res);
          return setPosts(res.data);
        });
  }, [username]);

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
