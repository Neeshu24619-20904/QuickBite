import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();


  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * parseFloat(item.price.replace(/[₹$,]/g, '')),
    0
  );

  const decreaseQty = (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (item.quantity === 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, item.quantity - 1);
    }
  };

  const increaseQty = (id) => {
    const item = cartItems.find((i) => i.id === id);
    updateQuantity(id, item.quantity + 1);
  };

  return (
    <div className="cart">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛒</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: {item.price}</p>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
                <button onClick={() => removeFromCart(item.id)} className="remove-item">
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <span>Total:</span> <span> ₹{total.toFixed(2)}</span>
          </div>
          <Link to="/checkout" className="checkout-btn">
  <button  className="place-order">Proceed to Checkout</button>
</Link>
          
        </div>
        
      )}


    </div>
  );
}
