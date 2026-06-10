import React from 'react';
import '../styles/profile.css';

function Profile() {
  return (
    <div className="profile-page">
      <h1>My Profile</h1>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">👤</div>
          <div className="profile-info">
            <h2>User Name</h2>
            <p>user@example.com</p>
            <p>+91 9876543210</p>
          </div>
        </div>
      </div>

      <div className="profile-sections">
        <div className="section">
          <h3>Recent Orders</h3>
          <p>No orders yet</p>
        </div>
        <div className="section">
          <h3>Saved Addresses</h3>
          <p>No addresses saved</p>
        </div>
        <div className="section">
          <h3>Payment Methods</h3>
          <p>No payment methods added</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
