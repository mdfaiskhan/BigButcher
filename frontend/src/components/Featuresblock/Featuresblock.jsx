import React from "react";
import "./Featuresblock.css";
import { FaShoppingCart, FaUtensils, FaFire, FaCut } from "react-icons/fa";
import { assets } from "../../assets/assets";

const FeaturesBlock = () => {
  const features = [
    {
      heading: "Bulk Order",
      text: "Get discounts on your bulk purchase and enjoy the fresh meat.",
      icon: <FaShoppingCart />, // Icon for Bulk Order
      img: assets.feature1, // Replace with assets.feature1
    },
    {
      heading: "Restaurants",
      text: "Serve your customers extra rich fresh meat.",
      icon: <FaUtensils />, // Icon for Restaurants
      img: assets.feature2, // Replace with assets.feature2
    },
    {
      heading: "Barbeque",
      text: "Pepper your Party with Big Butcher's Meat and experience the change.",
      icon: <FaFire />, // Icon for Barbeque
      img: assets.feature3, // Replace with assets.feature3
    },
    {
      heading: "Customize",
      text: "Cut your meat to your preference with Big Butcher's experts.",
      icon: <FaCut />, // Icon for Customize
      img: assets.feature4, // Replace with assets.feature4
    },
  ];

  return (
    <div className="features-wrapper">
      <div className="line top-line"></div>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-box" key={index}>
            <div className="feature-icon-wrapper">{feature.icon}</div>
            <h3 className="feature-heading">{feature.heading}</h3>
            <p className="feature-text">{feature.text}</p>
            <img className="feature-image" src={feature.img} alt={feature.heading} />
          </div>
        ))}
      </div>
      <div className="line bottom-line"></div>
    </div>
  );
};

export default FeaturesBlock;



