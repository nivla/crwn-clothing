import React from "react";

import "./menu-item.scss";

function MenuItem({ title, imageURl, size }) {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageURl})`,
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
