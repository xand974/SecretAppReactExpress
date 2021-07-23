import "./Main.css";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Contact from "./Contact/Contact";

export default function Main() {
  return (
    <div className="main">
      <Sidebar />
      <Feed />
      <Contact />
    </div>
  );
}
