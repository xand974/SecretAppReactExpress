import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Main.css";
import Api from "../../config/axios";

export default function Main() {
  const [userPosts, setUserPost] = useState([]);

  useEffect(() => {
    Api.get("/home")
      .then((res) => {
        console.log(res);
        return setUserPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userPosts]);

  return (
    <div className="cards">
      {userPosts.map((post) => {
        return (
          <Card
            key={post._id}
            title={post.title}
            content={post.content}
            id={post._id}
          />
        );
      })}
      <Card title="Apple" content="i like apples" id="1" />
      <p>Hier</p>
    </div>
  );
}
