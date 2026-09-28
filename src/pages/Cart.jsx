import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    mobile: ''
  });
  const [selectedPayment, setSelectedPayment] = useState('');

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const totalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const handleProceedToCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    setShowCheckout(true);
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.address || !customerInfo.mobile) {
      alert('Please fill in all details');
      return;
    }
    setShowCheckout(false);
    setShowPayment(true);
  };

  const handlePayment = (method) => {
    setSelectedPayment(method);
    setShowPayment(false);
    setShowSuccess(true);
    localStorage.removeItem('cart');
    setCart([]);
  };

  const handleContinueShopping = () => {
    setShowSuccess(false);
    window.location.href = '/categories';
  };

  if (showSuccess) {
    return (
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-card success-card">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2>Order Confirmed!</h2>
            <p className="success-message">Thank you for ordering with LUSTRALIS!</p>
            <p className="delivery-message">Your order will be delivered as soon as possible.</p>
            <button className="auth-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showPayment) {
    return (
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-card payment-card">
            <h2>Select Payment Method</h2>
            <div className="payment-options">
              <div 
                className={`payment-option ${selectedPayment === 'Google Pay' ? 'selected' : ''}`}
                onClick={() => handlePayment('Google Pay')}
              >
                <div className="payment-icon">📱</div>
                <div className="payment-info">
                  <h3>Google Pay</h3>
                  <p>Pay using Google Pay</p>
                </div>
              </div>
              
              <div 
                className={`payment-option ${selectedPayment === 'Credit/Debit Card' ? 'selected' : ''}`}
                onClick={() => handlePayment('Credit/Debit Card')}
              >
                <div className="payment-icon">💳</div>
                <div className="payment-info">
                  <h3>Credit / Debit Card</h3>
                  <p>Visa, Mastercard, RuPay, Amex</p>
                </div>
              </div>
              
              <div 
                className={`payment-option ${selectedPayment === 'Cash on Delivery' ? 'selected' : ''}`}
                onClick={() => handlePayment('Cash on Delivery')}
              >
                <div className="payment-icon">💵</div>
                <div className="payment-info">
                  <h3>Cash on Delivery</h3>
                  <p>Pay when you receive the order</p>
                </div>
              </div>
            </div>
            <button className="back-btn" onClick={() => setShowPayment(false)}>
              Back to Details
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showCheckout) {
    return (
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-card checkout-card">
            <h2>Confirm Your Details</h2>
            <form onSubmit={handleAddressSubmit}>
              <div className="form-group">
                <label>FULL NAME</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>DELIVERY ADDRESS</label>
                <textarea
                  placeholder="Enter your complete address"
                  rows="3"
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>MOBILE NUMBER</label>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={customerInfo.mobile}
                  onChange={(e) => setCustomerInfo({...customerInfo, mobile: e.target.value})}
                  required
                />
              </div>
              
              <div className="order-summary">
                <h3>Order Summary</h3>
                {cart.map(item => (
                  <div key={item.id} className="order-item">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="order-total">
                  <strong>Total Amount:</strong>
                  <strong>${calculateTotal()}</strong>
                </div>
              </div>
              
              <div className="checkout-actions">
                <button type="submit" className="auth-btn">
                  Proceed to Payment
                </button>
                <button type="button" className="back-btn" onClick={() => setShowCheckout(false)}>
                  Back to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card cart-card">
          <h1>Shopping Cart</h1>
          
          {cart.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-icon">🛒</div>
              <h2>Your Cart is Empty</h2>
              <p>Looks like you haven't added any items to your cart yet.</p>
              <button className="auth-btn" onClick={() => window.location.href = '/categories'}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-category">{item.subcategory}</p>
                      <div className="item-price">${item.price.toFixed(2)}</div>
                    </div>
                    <div className="item-quantity">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <div className="item-total">${(item.price * item.quantity).toFixed(2)}</div>
                    <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                ))}
              </div>
              
              <div className="cart-summary">
                <div className="summary-row">
                  <span>Total Items:</span>
                  <span>{totalItems()}</span>
                </div>
                <div className="summary-row total">
                  <span>Total Amount:</span>
                  <span>${calculateTotal()}</span>
                </div>
                <button className="auth-btn" onClick={handleProceedToCheckout}>
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;