import React from "react";
import FormSearch from "./FormSearch";
import Title from "./Title";
import Navigation from "./Navigation";
import "./Header.css";

export default function Header() {
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
          <Navigation />
        </div>
      </nav>
    </div>
  );
}
