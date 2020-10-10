import React from "react";
import "./Checkout.css";
import WebAdImage from "../../assets/img/web_ad.jpg";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={WebAdImage} alt="Advertisement" className="checkout__ad" />
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
