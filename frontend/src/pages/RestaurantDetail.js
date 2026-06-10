import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/restaurant-detail.css';

function RestaurantDetail() {
  const { id } = useParams();

  const menu = [
    { id: 1, name: 'Butter Chicken', price: 250, image: '🍛' },
    { id: 2, name: 'Paneer Tikka', price: 200, image: '🥘' },
    { id: 3, name: 'Biryani', price: 300, image: '🍚' },
    { id: 4, name: 'Naan', price: 50, image: '🥖' },
  ];

  return (
    <div className="restaurant-detail">
      <div className="restaurant-header">
        <h1>Restaurant #{id}</h1>
        <div className="restaurant-header-info">
          <span>⭐ 4.5</span>
          <span>⏱️ 30 mins</span>
          <span>📍 2.5 km away</span>
        </div>
      </div>

      <h2>Menu</h2>
      <div className="menu-grid">
        {menu.map((item) => (
          <div key={item.id} className="menu-item">
            <div className="menu-item-image">{item.image}</div>
            <h4>{item.name}</h4>
            <p className="price">₹{item.price}</p>
            <button className="btn-primary">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantDetail;
