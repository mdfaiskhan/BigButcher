import React from 'react';
import './FreshMeatPage.css';
import { assets } from '../../assets/assets';

const FreshMeatPage = () => {
  return (
    <div className="fresh-meat-container">
      <div className="fresh-meat-left">
        <img src={assets.banimg} alt="Fresh Meat" className="fresh-meat-image" />
      </div>
      <div className="fresh-meat-right">
        <h1>Fresh & Premium Meat Delivered</h1>
        <h2>Buy Beef Online in Bangalore</h2>
        <h3>Delivered Fresh, Halal & Convenient</h3>
        <p>
          Looking for fresh, halal meat in Bangalore? Big Butcher offers premium beef, chicken, lamb, and more, delivered directly to your door. Enjoy top-quality, fresh meat with ease and convenience – all with our fast, reliable delivery service.
        </p>
        <p>
          Make your meals easier and tastier by choosing Big Butcher – the best way to buy fresh, halal meat online in Bangalore.
        </p>
        <a href="/explore-menu">
  <button className="shop-now-btn">Shop Now</button>
</a>

      </div>
    </div>
  );
};

export default FreshMeatPage;
