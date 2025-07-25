import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify'
import Header2 from './components/Header2/Header2'
import FoodCategory from './components/FoodCategory/FoodCategory'
import AboutUs from './components/AboutUs/AboutUs'
import ExploreMenu from './components/ExploreMenu/ExploreMenu'

const App = () => {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    <ToastContainer/>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        {/* <Header2/> */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/food-category/:categoryName" element={<FoodCategory />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/order' element={<PlaceOrder />}/>
          <Route path='/myorders' element={<MyOrders />}/>
          <Route path='/verify' element={<Verify />}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/explore-menu' element={<ExploreMenu/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

