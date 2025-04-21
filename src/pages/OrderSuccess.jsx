import React from 'react';
import { Link } from 'react-router-dom';
import './ordersuccess.css';

const OrderSuccess = () => {
  return (
    <div className="order-success-container">
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Thank you for your order.</p>
      <Link to="/" className="go-home-btn">Go to Home</Link>
    </div>
  );
};

export default OrderSuccess;
