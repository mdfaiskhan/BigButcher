// import React, { useContext } from 'react'
// import './ExploreMenu.css'
// import { StoreContext } from '../../Context/StoreContext'

// const ExploreMenu = ({category,setCategory}) => {

//   const {menu_list} = useContext(StoreContext);
  
//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore our menu</h1>
//       <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
//       <div className="explore-menu-list">
//         {menu_list.map((item,index)=>{
//             return (
//                 <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
//                     <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
//                     <p>{item.menu_name}</p>
//                 </div>
//             )
//         })}
//       </div>
//       <hr />
//     </div>
//   )
// }

// export default ExploreMenu

// import React, { useContext } from 'react';
// import './ExploreMenu.css';
// import { StoreContext } from '../../Context/StoreContext';

// const ExploreMenu = ({ category, setCategory }) => {
//   const { menu_list } = useContext(StoreContext);

//   // Function to handle category selection and toggling between categories
//   const handleCategoryChange = (itemName) => {
//     setCategory((prev) => (prev === itemName ? 'All' : itemName));
//   };

//   return (
//     <div className="explore-menu" id="explore-menu">
//       <h1>Explore Our Menu</h1>
//       <p className="explore-menu-text">
//         Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
//       </p>
//       <div className="explore-menu-list">
//         {menu_list.map((item, index) => {
//           return (
//             <div
//               onClick={() => handleCategoryChange(item.menu_name)}
//               key={index}
//               className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''}`}
//             >
//               <div className="menu-item-card">
//                 <img
//                   src={item.menu_image}
//                   className="menu-item-image"
//                   alt={item.menu_name}
//                 />
//                 <p>{item.menu_name}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <hr />
//     </div>
//   );
// };

// export default ExploreMenu;



import React, { useContext } from "react";
import "./ExploreMenu.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const ExploreMenu = () => {
  const { menu_list } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleCategoryChange = (categoryName) => {
    navigate(`/food-category/${categoryName}`);
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>View Our Menu</h1>
      <p className="explore-menu-text">
      "Savour a variety of premium meats, handpicked to satisfy your cravings. Elevate your meals with our fresh, high-quality cuts delivered straight to your door!"
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => handleCategoryChange(item.menu_name)}
            key={index}
            className="explore-menu-list-item"
          >
            <div className="menu-item-card">
              <img
                src={item.menu_image}
                className="menu-item-image"
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
