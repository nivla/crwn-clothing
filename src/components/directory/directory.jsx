import React from "react";
import MenuItem from "../menu-item/menu-item";
import sections from "./data";

import "./directory.scss";

function Directory(props) {
  const menuItems = sections.map(({ id, ...otherSectionProps }) => {
    return <MenuItem key={id} {...otherSectionProps} />;
  });

  return <div className="directory-menu">{menuItems}</div>;
}

export default Directory;
