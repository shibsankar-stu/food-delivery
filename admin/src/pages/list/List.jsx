import React, { useEffect, useState } from "react";
import axios from "axios";
import './List.css'

const List = () => {
    const url = "http://localhost:4000"
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFoods = async () => {
    try {
      const res = await axios.get(`${url}/api/food/listfood`);
      if (res.data.success) {
        setFoods(res.data.foods);
        console.log(res.data.foods)
      }
    } catch (error) {
      console.error("Error fetching foods:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeFoods = async (id) => {
   const response =  await axios.post(`${url}/api/food/remove`, {id})
   fetchFoods()
   console.log(response)
  }

  useEffect(() => {
    fetchFoods();
  }, []);

  if (loading) return <p className="text-center mt-4">Loading...</p>;

  return (
   <>
   <div className="food-list">
      {foods.length === 0 ? (
        <p className="no-food">No food items found.</p>
      ) : (
        foods.map((food, index) => (
          <div key={index} className="food-card" >
            {food.image && (
              <img
                src={`${url}/images/${food.image}`}
                alt={food.name}
                className="food-image"
              />
            )}
            <h2 className="food-name">{food.name}</h2>
            <p className="food-description">{food.description}</p>
            <p className="food-price">Price: ₹{food.price}</p>
            <p className="food-category">Category: {food.category}</p>
            <button onClick={(e) => removeFoods(food._id)} className="remove-btn" >Remove Food</button>
          </div>
        ))
      )}
    </div>
   </>
  );
};

export default List;
