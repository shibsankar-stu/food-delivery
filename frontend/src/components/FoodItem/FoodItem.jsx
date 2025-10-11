import React, { useState } from "react";
import "./FoodItem.css";
import { assets } from "../../food-del-assets/assets/frontend_assets/assets";

const FoodItem = ({ id, name, description, price, image }) => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="food image" />
        {!itemCount ? (
          <img
            onClick={() => setItemCount((prev) => prev + 1)}
            className="add"
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p> {itemCount} </p>
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
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
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default FoodItem;
