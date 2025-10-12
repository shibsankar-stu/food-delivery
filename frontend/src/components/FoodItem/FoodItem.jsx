import React, { useState , useContext} from "react";
import "./FoodItem.css";
import { assets } from "../../food-del-assets/assets/frontend_assets/assets";
import {StoreContext} from '../../context/storeContext'

const FoodItem = ({ id, name, description, price, image }) => {
  const {cartItems, setCartItems, addtoCart, removeFromCart} = useContext(StoreContext)
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="food image" />
        {!cartItems[id] ? (
          <img
            onClick={() => addtoCart(id)}
            className="add"
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id) }
              src={assets.remove_icon_red}
              alt=""
            />
            <p> {cartItems[id]} </p>
            <img
              onClick={() => addtoCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">₹ {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
