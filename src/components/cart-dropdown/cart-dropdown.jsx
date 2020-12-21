import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.componnet";
import CustomButton from "../custom-button/custom-button";

import "./cart-dropdown.scss";

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <CustomButton>GO TO CHEKTOUT</CustomButton>
      </div>
    </div>
  );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
