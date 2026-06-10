import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/order-tracking.css';

function OrderTracking() {
  const { id } = useParams();
  const [orderStatus, setOrderStatus] = useState('preparing');

  const statuses = ['confirmed', 'preparing', 'ready', 'on-the-way', 'delivered'];
  const statusIndex = statuses.indexOf(orderStatus);

  return (
    <div className="order-tracking">
      <h1>Order #{id}</h1>
      
      <div className="tracking-container">
        <div className="status-timeline">
          {statuses.map((status, index) => (
            <div key={status} className={`timeline-item ${index <= statusIndex ? 'active' : ''}`}>
              <div className="timeline-dot"></div>
              <span className="status-label">{status.charAt(0).toUpperCase() + status.slice(1)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="order-info">
        <h2>Order Details</h2>
        <p>Current Status: <strong>{orderStatus}</strong></p>
        <p>Estimated Delivery: 30 minutes</p>
      </div>
    </div>
  );
}

export default OrderTracking;
