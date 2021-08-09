import "./Sidebar.css";
import Profile from "../SideBarProfile/SideBarProfile";
import { Bookmark, Chat, Group, VideoCall, Wifi } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import defaultPic from "../../../Images/default-user-image.png";
import Api from "../../../config/axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await Api.get(`/user/${user?._id}/friends`);
        const SetFriends = await Promise.all(
          res.data.map((r) => {
            return Api.get("/user?userId=" + r);
          })
        );
        setFriends(SetFriends.map((s) => s.data));
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);
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
          {friends?.map((user) => {
            return (
              <Link
                to={`/profile/${user.username}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <Profile
                  username={user.username}
                  profilePic={user.profilePicture || defaultPic}
                  key={user._id}
                />
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
