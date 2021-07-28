import React, { useState } from "react";
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
  const [isLiked, setIsLiked] = useState(false);
  const [isFav, setIsFav] = useState(false);
  var [likesCount, setLikesCount] = useState(likes);

  var HandleLikeClick = () => {
    setIsLiked(!isLiked);
    setIsFav(!isFav);
    setLikesCount(isLiked || isFav ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__profile">
          <img
            src={defaultImage || defaultPic}
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
          {postImage == null ? (
            <div />
          ) : (
            <img
              src={postImage}
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
          <p>{comments} comments</p>
        </div>
      </div>
    </div>
  );
}
