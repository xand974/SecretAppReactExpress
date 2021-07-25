import React from "react";
import { Link } from "react-router-dom";
import defaultPic from "../../../Images/default-user-image.png";
import { Favorite, MoreHoriz, ThumbUp } from "@material-ui/icons";
import "./Card.css";

export default function Card({
  postImage,
  content,
  likes,
  date,
  comments,
  username,
  defaultImage,
}) {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__profile">
          <img
            src={defaultImage == null ? defaultPic : defaultImage}
            className="card__profile__image"
            alt="profile"
          />
          <span>{username}</span>
          <small>Updated {date}</small>
        </div>
        <div className="card__more">
          <MoreHoriz className="more" />
        </div>
      </div>
      <div className="card__body">
        <p>{content}</p>
        <div>
          <img src={postImage} className="card__content__image" alt="profile" />
        </div>
      </div>
      <div className="card__footer">
        <div className="card__footer__logo">
          <ThumbUp className="thumb" />
          <Favorite className="fav" />
          <span className="post__liked">{likes} People like it</span>
        </div>
        <div className="post__comment">
          <p>{comments} comments</p>
        </div>
      </div>
    </div>
  );
}
