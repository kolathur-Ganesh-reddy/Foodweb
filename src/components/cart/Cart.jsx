// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../../components/cart/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, addToCart, decreaseQuantity } = useCart();

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price);
    return total + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);

  const handleOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert("Order placed successfully!");
      clearCart();
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="cart-empty">No items in cart.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Price: Rs. {item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.name)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                  <p>Subtotal: Rs. {(item.price * item.quantity).toFixed(2)}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.name)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="total-section">Total: Rs. {totalPrice.toFixed(2)}</h3>

          <div className="cart-actions">
            <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
            <button className="order-btn-2" onClick={handleOrder}>Order Now</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
