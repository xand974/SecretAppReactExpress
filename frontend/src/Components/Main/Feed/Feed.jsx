import "./Feed.css";
import PostFeed from "./PostFeed/PostFeed";
import Card from "../Card/Card";
import { Post } from "../../../Data/Data";
export default function Feed() {
  return (
    <div className="feed__container">
      <PostFeed />
      <div className="feed__cards">
        {Post.map((post) => {
          return (
            <Card
              key={post.id}
              comments={post.comments}
              date={post.date}
              postImage={post.postImage}
              likes={post.likes}
            />
          );
        })}
      </div>
    </div>
  );
}
