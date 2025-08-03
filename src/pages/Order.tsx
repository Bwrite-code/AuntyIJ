import React, { useState } from 'react';
import { useTheme } from '../theme';
import { useCart } from '../context/CartContext';

const Order = () => {
  const { colors } = useTheme();
  const { cartItems, placeOrder, updateProfile } = useCart();
  const [formData, setFormData] = useState({ name: '', email: '', address: '', phone: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    placeOrder(formData);
    updateProfile(formData);
    alert(`Order placed successfully!`);
    setFormData({ name: '', email: '', address: '', phone: '' });
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const styles = {
    main: {
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      textAlign: 'center' as 'center',
      marginBottom: '3rem',
    },
    title: {
      fontSize: '3rem',
      color: colors.primary,
    },
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      gap: '2rem',
    },
    cartContainer: {
      flex: 1,
      padding: '2rem',
      border: `1px solid ${colors.primary}`,
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    },
    cartItem: {
      display: 'flex',
      justifyContent: 'space-between' as 'space-between',
      alignItems: 'center' as 'center',
      marginBottom: '1rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid #ddd',
    },
    form: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      gap: '1rem',
    },
    input: {
      padding: '0.8rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    submitButton: {
      padding: '1rem',
      backgroundColor: colors.primary,
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1.2rem',
      cursor: 'pointer',
    },
  };

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>Order Online</h1>
      </header>
      <div style={styles.container}>
        <div style={styles.cartContainer}>
          <h2>Your Order</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} style={styles.cartItem}>
                <span>{item.name} x {item.quantity} - ${item.price.toFixed(2)}</span>
              </div>
            ))
          )}
          <h3>Total: ${total.toFixed(2)}</h3>
          <form style={styles.form} onSubmit={handleSubmit}>
            <h3>Delivery Details</h3>
            <input style={styles.input} type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
            <input style={styles.input} type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
            <input style={styles.input} type="text" name="address" placeholder="Delivery Address" value={formData.address} onChange={handleInputChange} required />
            <input style={styles.input} type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required />
            <button style={styles.submitButton} type="submit">Place Order</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Order;
