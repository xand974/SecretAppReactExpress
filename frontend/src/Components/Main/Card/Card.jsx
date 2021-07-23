import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ title, content, id }) {
  return (
    <div className="card">
      <div className="card__header">
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        <div className="card__content">
          <p>{content}</p>
        </div>
        <div>
          <div>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={{
                pathname: "/post",
                search: `?id=${id}`,
              }}
              replace
            >
              <p className="link">Lire +</p>
            </Link>
          </div>
        </div>
        <div className="card__footer">
          <i className="far fa-heart"></i>
          <i className="fas fa-comments"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>
    </div>
  );
}
