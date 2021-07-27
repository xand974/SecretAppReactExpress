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
  var HandleLikeClick = () => {
    console.log(isLiked);
    setIsLiked(!isLiked);
    setLikesCount(++likes);
  };
  const [isFav, setIsFav] = useState(false);
  var [likesCount, setLikesCount] = useState(likes);

  var HandleFavClick = () => {
    setIsFav(!isFav);
    setLikesCount(++likes);
  };
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
          <ThumbUp
            className="thumb"
            style={{ background: isLiked ? "rgb(126, 126, 253)" : "#a8a8a8" }}
            onClick={HandleLikeClick}
          />
          <Favorite
            className="fav"
            style={{ background: isFav ? "rgb(250, 82, 82)" : "#a8a8a8" }}
            onClick={HandleFavClick}
          />
          <span className="post__liked">
            {isLiked || isFav ? ++likesCount : likesCount} People like it
          </span>
        </div>
        <div className="post__comment">
          <p>{comments} comments</p>
        </div>
      </div>
    </div>
  );
}
