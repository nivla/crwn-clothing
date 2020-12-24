import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CartItem from "../cart-item/cart-item.componnet";
import CustomButton from "../custom-button/custom-button";

import "./cart-dropdown.scss";

function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHEKTOUT
        </CustomButton>
      </div>
    </div>
  );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

const mapDispatchToProps = (dipsatch) => ({});

export default withRouter(connect(mapStateToProps)(CartDropdown));
