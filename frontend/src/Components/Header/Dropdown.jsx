import React from "react";
import "./Dropdown.css";
export default function Dropdown({ listLinks }) {
  return (
    <div className="dropdown__nav">
      <ul>
        {listLinks.map((list) => {
          return <li>{list}</li>;
        })}
      </ul>
    </div>
  );
}
