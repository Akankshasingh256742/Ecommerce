import React from 'react';
import "./cart-dropdown.scss";

function CartDropdown() {
  return (
    <div>
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <button>GO TO CHECKOUT</button>
        </div>
    </div>
  )
}

export default CartDropdown