import React from 'react'
import './Menu.css'
import { menu_list } from '../../food-del-assets/assets/frontend_assets/assets'
const Menu = ({category, setCategory}) => {
  return (
    <div className='menu'>
      <div className="menu-container">
        <h1>Explore our menu</h1>
        <p>Discover our delicious menu featuring appetizers, main courses, desserts, and beverages. From spicy starters to sweet treats, explore flavors crafted with care. Fresh ingredients, diverse cuisines, and tasty meals for every craving.</p>
        <div className="menu-lists">
            {
                menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev===item.menu_name?"all":item.menu_name)} className='menu-list-item' key={index}>
                            <img className={category === item.menu_name?"active":''} src={item.menu_image} alt={item.name} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Menu
