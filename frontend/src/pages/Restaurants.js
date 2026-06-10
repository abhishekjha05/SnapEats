import React, { useState } from 'react';
import '../styles/restaurants.css';

function Restaurants() {
  const [restaurants] = useState([
    {
      id: 1,
      name: 'Spice Palace',
      rating: 4.5,
      deliveryTime: '30 mins',
      image: '🍛',
      cuisine: 'Indian',
      price: '₹₹',
    },
    {
      id: 2,
      name: 'Pizza Paradise',
      rating: 4.7,
      deliveryTime: '25 mins',
      image: '🍕',
      cuisine: 'Italian',
      price: '₹₹',
    },
    {
      id: 3,
      name: 'Burger Bliss',
      rating: 4.3,
      deliveryTime: '20 mins',
      image: '🍔',
      cuisine: 'American',
      price: '₹',
    },
    {
      id: 4,
      name: 'Noodle House',
      rating: 4.6,
      deliveryTime: '28 mins',
      image: '🍜',
      cuisine: 'Asian',
      price: '₹₹',
    },
    {
      id: 5,
      name: 'Sushi Sensation',
      rating: 4.8,
      deliveryTime: '35 mins',
      image: '🍣',
      cuisine: 'Japanese',
      price: '₹₹₹',
    },
    {
      id: 6,
      name: 'Healthy Bites',
      rating: 4.4,
      deliveryTime: '30 mins',
      image: '🥗',
      cuisine: 'Health Food',
      price: '₹₹',
    },
  ]);

  return (
    <div className="restaurants-page">
      <h1>Popular Restaurants</h1>
      <div className="restaurants-grid">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card manjusa-pattern">
            <div className="restaurant-image">{restaurant.image}</div>
            <div className="restaurant-info">
              <h3>{restaurant.name}</h3>
              <div className="restaurant-meta">
                <span className="cuisine">{restaurant.cuisine}</span>
                <span className="price">{restaurant.price}</span>
              </div>
              <div className="restaurant-footer">
                <span className="rating">⭐ {restaurant.rating}</span>
                <span className="delivery-time">⏱️ {restaurant.deliveryTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
