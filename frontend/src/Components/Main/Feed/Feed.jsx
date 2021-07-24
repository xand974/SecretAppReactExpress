import "./Feed.css";
import PostFeed from "./PostFeed/PostFeed";
import Card from "../Card/Card";
export default function Feed() {
  return (
    <div className="feed__container">
      <PostFeed />
      <div className="feed__cards">
        <Card />
      </div>
    </div>
  );
}
