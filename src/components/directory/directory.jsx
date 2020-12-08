import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item";
import initialSections from "./data";

import "./directory.scss";

function Directory(props) {
  const [sections, setSections] = useState(initialSections);

  const menuItems = sections.map(({ title, imageUrl, size, id }) => {
    return <MenuItem key={id} title={title} imageURl={imageUrl} size={size} />;
  });

  return <div className="directory-menu">{menuItems}</div>;
}

export default Directory;
