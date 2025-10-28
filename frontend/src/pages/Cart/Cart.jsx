import React, { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import "./cart.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { food_list, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          {
            if (cartItems[item._id] > 0) {
              return (
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <button onClick={() => removeFromCart(item._id)}>
                    Remove
                  </button>
                </div>
              );
            }
          }
        })}
      </div>
      <div className="cart-footer">
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
            Proceet to checkout
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Ifyou have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
