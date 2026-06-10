import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  const features = [
    { icon: '⚡', title: 'Super Fast Delivery', description: 'Get your food in 30 minutes' },
    { icon: '🎨', title: 'Beautiful Design', description: 'Manjusa art-inspired interface' },
    { icon: '🍽️', title: 'Wide Selection', description: 'Choose from 1000+ restaurants' },
    { icon: '💳', title: 'Secure Payment', description: 'Multiple payment options' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Order Your Favorite Food Instantly</h1>
          <p className="hero-subtitle">Fast, Fresh, and Delivered to Your Door</p>
          <Link to="/restaurants" className="btn-primary hero-btn">
            Explore Restaurants →
          </Link>
        </div>
        <div className="hero-image">
          <div className="hero-decoration">🍕🍔🍜</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Why Choose SnapEats?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Order?</h2>
        <p>Browse thousands of restaurants and find your favorite meal</p>
        <Link to="/restaurants" className="btn-secondary">
          Start Ordering Now
        </Link>
      </section>
    </div>
  );
}

export default Home;
