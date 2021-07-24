import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../../../Images/default-user-image.png";
import { Favorite, MoreHoriz, ThumbUp } from "@material-ui/icons";
import "./Card.css";

export default function Card({ title, content, id }) {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__profile">
          <img
            src={defaultImage}
            className="card__profile__image"
            alt="profile"
          />
          <span>Alexandre Malet</span>
          <small>Updated 5 mins ago</small>
        </div>
        <div className="card__more">
          <MoreHoriz className="more" />
        </div>
      </div>
      <div className="card__body">
        <p>my First post !</p>
        <div>
          <img
            src="https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png"
            className="card__content__image"
            alt="profile"
          />
        </div>
      </div>
      <div className="card__footer">
        <div className="card__footer__logo">
          <ThumbUp className="thumb" />
          <Favorite className="fav" />
          <span className="post__liked">3 People like it</span>
        </div>
        <div className="post__comment">
          <p>9 comments</p>
        </div>
      </div>
    </div>
  );
}
