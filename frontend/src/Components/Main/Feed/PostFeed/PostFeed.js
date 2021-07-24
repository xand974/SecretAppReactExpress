import React from "react";
import imageToImport from "../../../../Images/default-user-image.png";
import { Album, EmojiEmotions, LocationCity } from "@material-ui/icons";
import "./PostFeed.css";
export default function PostFeed() {
  return (
    <div className="feed__post">
      <div className="feed__top">
        <div className="post__image">
          <img src={imageToImport} alt="profile" />
        </div>
        <div className="feed__input">
          <input placeholder="What's in your mind" />
        </div>
      </div>

      <hr />
      <div className="logo__container">
        <li className="feed__logo">
          <Album className="logo" />
          <span>Photo ou Video</span>
        </li>
        <li className="feed__logo">
          <LocationCity className="logo" />
          <span>Localisation</span>
        </li>
        <li className="feed__logo">
          <EmojiEmotions className="logo" />
          <span>Emotions</span>
        </li>
        <button className="feed__post__button">Poster !</button>
      </div>
    </div>
  );
}