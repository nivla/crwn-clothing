import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import "./menu-item.scss";

function MenuItem({ title, imageUrl, linkUrl, size }) {
  let history = useHistory();
  let location = useLocation();

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${location.pathname}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOWA</span>
      </div>
    </div>
  );
}

export default MenuItem;
