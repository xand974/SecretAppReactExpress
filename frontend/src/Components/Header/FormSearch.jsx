import React from "react";
import "./FormSearch.css";

export default function FormSearch() {
  return (
    <div className="search__container">
      <form>
        <input spellCheck={false} type="text" />
        <button>Rechercher</button>
      </form>
    </div>
  );
}
