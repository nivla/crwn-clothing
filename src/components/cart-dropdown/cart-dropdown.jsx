import React from "react";
import CustomButton from "../custom-button/custom-button";

import "./cart-dropdown.scss";

function CartDropdown(props) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>GO TO CHEKTOUT</CustomButton>
      </div>
    </div>
  );
}

export default CartDropdown;
