import "./Sidebar.css";
import Profile from "../Profile/Profile";
import { Bookmark, Chat, Group, VideoCall, Wifi } from "@material-ui/icons";
import { User } from "../../../Data/Data";
export default function Sidebar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__links">
        <li>
          <Wifi style={{ fontSize: "25px" }} />
          <span>Feed</span>
        </li>
        <li>
          <Chat style={{ fontSize: "25px" }} />
          <span>Chat</span>
        </li>
        <li>
          <VideoCall style={{ fontSize: "25px" }} />
          <span>Video</span>
        </li>
        <li>
          <Group style={{ fontSize: "25px" }} />
          <span>Groups</span>
        </li>
        <li>
          <Bookmark style={{ fontSize: "25px" }} />
          <span>Bookmark</span>
        </li>
        <button className="sidebar__button">Show More</button>
        <hr className="sidebar__line" />
        <ul className="sidebar__profile">
          {User.map((user) => {
            return (
              <Profile
                username={user.username}
                profilePic={user.profilePic}
                key={user.id}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
