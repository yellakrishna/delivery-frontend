import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodDisplay from '../FoodDisplay/FoodDisplay'

const ExploreMenu = ({category,setCategory}) => {
  // const [category,setCategory] = useState("All")

  const {menu_list} = useContext(StoreContext);
  
  return (
    <>
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className='both-flex'>
      {/* <FoodDisplay/> */}
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                    <p>{item.menu_name}</p>
                </div>
                
            )
        })}
      </div>
      <hr />
 
      </div>
    </div>
    
    </>
    
  )
}

export default ExploreMenu
