import React, { useState } from "react";
import "./FormSearch.css";

export default function FormSearch() {
  const [userInput, setUserInput] = useState("");
  var HandleChange = (e) => {
    const search = e.target.value;
    setUserInput(search);
  };
  return (
    <div className="search__container">
      <form>
        <input
          spellCheck={false}
          onChange={HandleChange}
          value={userInput}
          type="text"
          name="title"
        />
        <button>Rechercher</button>
      </form>
    </div>
  );
}
