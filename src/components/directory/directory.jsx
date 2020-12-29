import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import MenuItem from "../menu-item/menu-item";

import "./directory.scss";

function Directory({ sections }) {
  const menuItems = sections.map(({ id, ...otherSectionProps }) => {
    return <MenuItem key={id} {...otherSectionProps} />;
  });

  return <div className="directory-menu">{menuItems}</div>;
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
