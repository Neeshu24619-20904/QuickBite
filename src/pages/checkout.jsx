import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/checkout.css';

const Checkout = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    navigate('/order-success');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handlePlaceOrder} className="checkout-form">
        <label>
          Full Name:
          <input type="text" required />
        </label>
        <label>
          Address:
          <input type="text" required />
        </label>
        <label>
          Phone Number:
          <input type="tel" required />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
