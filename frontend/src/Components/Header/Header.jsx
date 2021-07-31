import React, { useContext } from "react";
import FormSearch from "./FormSearch";
import Title from "./Title";
import Navigation from "./Navigation";
import "./Header.css";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
  const { user } = useContext(AuthContext);
  console.log("this user", user);
  return (
    <div>
      <nav>
        <div className="nav__title">
          <Title />
        </div>

        <div className="nav__search">
          <FormSearch />
        </div>

        <div className="nav__links">
          <Navigation user={user} />
        </div>
      </nav>
    </div>
  );
}
