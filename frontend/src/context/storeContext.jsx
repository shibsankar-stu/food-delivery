import { createContext, useEffect, useState } from "react";
import axios from "axios";
// import { food_list } from "../food-del-assets/assets/frontend_assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  
  const url = "http://localhost:4000"
  const [cartItems, setCartItems] = useState({})
  const [token, setToken] = useState()
  const [food_list, setFoodList] = useState([])
  const addtoCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems(prev => ({...prev, [itemId]: 1}))
    } else {
      setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1}) )
    }
  }
  const removeFromCart = (itemId) => {
    setCartItems(prev => ({...prev, [itemId]: prev[itemId] - 1}) )
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((food) => food._id === item);
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  }

  const getFoods = async () => {
    const respons = await axios.get(url+"/api/food/listfood")
    setFoodList(respons.data.foods)
  }
   useEffect(() => {
    getFoods()
   },[])
 


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addtoCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider