import React from "react";
import "./Checkout.css";
import WebAdImage from "../../assets/img/web_ad.jpg";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={WebAdImage} alt="Advertisement" />
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
        </div>
      </div>

      <div className="checkout__right">
        <h2>Subtotal goes here</h2>
      </div>
    </div>
  );
}

export default Checkout;
