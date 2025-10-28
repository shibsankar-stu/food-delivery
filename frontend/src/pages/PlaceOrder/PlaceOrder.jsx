import React, { useContext } from "react";
import "./placeorder.css";
import { StoreContext } from "../../context/storeContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div>
      <form>
        <div className="place-order">
          <div className="place-order-left">
            <p>Delivery information </p>
            <div className="multi-fields">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="last name" />
            </div>
            <div className="multi-fields">
              <input type="email" placeholder="Email address" />
              <input type="text" placeholder="Street" />
            </div>
            <div className="multi-fields">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
            </div>
            <div className="multi-fields">
              <input type="text" placeholder="Pin code" />
              <input type="text" placeholder="Country" />
            </div>
            <input type="text" placeholder="Phone" />
          </div>
          <div className="place-order-left">
            <div className="cart-total">
              <h3> Cart Total </h3>

              <div className="cart-total-details">
                <p> Subtotal </p>
                <b> {getTotalCartAmount()} </b>
              </div>
              <div className="cart-total-details">
                <p>Delivery</p>
                <b> {10} </b>
              </div>
              <div className="cart-total-details">
                <p>Total</p>
                <b> {getTotalCartAmount() + 10} </b>
              </div>
              <button onClick={() => navigate("/order")}>
                PROCEED TO PAYMENT
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
