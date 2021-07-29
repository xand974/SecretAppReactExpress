import React, { useEffect, useState } from "react";
import defaultPic from "../../../Images/default-user-image.png";
import { Favorite, MoreHoriz, ThumbUp } from "@material-ui/icons";
import "./Card.css";
import * as timeago from "timeago.js";
import { Link } from "react-router-dom";
import api from "../../../config/axios";

export default function Card({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isFav, setIsFav] = useState(false);
  var [likesCount, setLikesCount] = useState(post.likes.length);
  const [user, setUser] = useState({});

  useEffect(() => {
    api.get(`/user?userId=${post.userId}`).then((res) => {
      setUser(res.data);
    });
  }, [post.userId]);

  var HandleLikeClick = () => {
    setIsLiked(!isLiked);
    setIsFav(!isFav);
    setLikesCount(isLiked || isFav ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__profile">
          <Link to={`/profile/${user.username}`}>
            <img
              src={user.profilePicture || defaultPic}
              className="card__profile__image"
              alt="profile"
            />
          </Link>

          <span>{user.username}</span>
          <small>Updated {timeago.format(post.date)}</small>
        </div>
        <div className="card__more">
          <MoreHoriz className="more" />
        </div>
      </div>
      <div className="card__body">
        <p>{post.content}</p>
        <div>
          {post.postImage == null ? (
            <div />
          ) : (
            <img
              src={post.postImage}
              className="card__content__image"
              alt="content "
            />
          )}
        </div>
      </div>
      <div className="card__footer">
        <div className="card__footer__logo">
          <ThumbUp
            className="thumb"
            style={{ background: isLiked ? "rgb(126, 126, 253)" : "#a8a8a8" }}
            onClick={HandleLikeClick}
          />
          <Favorite
            className="fav"
            tabIndex="1"
            style={{
              background: isFav ? "rgb(250, 82, 82)" : "#a8a8a8",
              outline: "none",
            }}
            onClick={HandleLikeClick}
          />
          <span className="post__liked">{likesCount} People like it</span>
        </div>
        <div className="post__comment">
          <p>{post.comments} comments</p>
        </div>
      </div>
    </div>
  );
}
