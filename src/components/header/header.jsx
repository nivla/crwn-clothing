import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.scss";

function Header(props) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/Contact">
          Contact
        </Link>
        <Link className="option" to="/shop">
          Shop
        </Link>
      </div>
    </div>
  );
}

export default Header;
