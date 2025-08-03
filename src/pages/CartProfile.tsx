import React from 'react';
import { useTheme } from '../theme';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartProfile = () => {
  const { colors } = useTheme();
  const { cartItems, orderHistory, removeFromCart, updateQuantity, userProfile } = useCart();
  const navigate = useNavigate();

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const styles = {
    main: {
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
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
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '2rem',
    },
    leftColumn: {},
    rightColumn: {},
    section: {
      marginBottom: '2rem',
      padding: '2rem',
      border: `1px solid ${colors.primary}`,
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      color: colors.primary,
      marginBottom: '1.5rem',
    },
    cartItem: {
      display: 'flex',
      alignItems: 'center' as 'center',
      marginBottom: '1rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid #ddd',
    },
    itemImage: {
      width: '100px',
      height: '100px',
      objectFit: 'cover' as 'cover',
      borderRadius: '8px',
      marginRight: '1.5rem',
    },
    itemDetails: {
      flexGrow: 1,
    },
    itemName: {
      fontSize: '1.2rem',
      fontWeight: 'bold' as 'bold',
    },
    itemPrice: {
      color: colors.text,
    },
    quantityControl: {
      display: 'flex',
      alignItems: 'center' as 'center',
      gap: '0.5rem',
    },
    quantityButton: {
      padding: '0.2rem 0.5rem',
      cursor: 'pointer',
    },
    removeButton: {
      color: '#ff4d4d',
      cursor: 'pointer',
      marginLeft: '1rem',
    },
    checkoutButton: {
      width: '100%',
      padding: '1rem',
      fontSize: '1.2rem',
      backgroundColor: colors.primary,
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    profileInfo: {
        lineHeight: 1.6,
    },
    orderItem: {
        display: 'flex',
        justifyContent: 'space-between' as 'space-between',
        padding: '0.5rem 0',
    }
  };

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>My Account</h1>
      </header>

      <div style={styles.container}>
        <div style={styles.leftColumn}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Shopping Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map(item => (
                <div key={item.id} style={styles.cartItem}>
                  <img src={item.image} alt={item.name} style={styles.itemImage} />
                  <div style={styles.itemDetails}>
                    <p style={styles.itemName}>{item.name}</p>
                    <p style={styles.itemPrice}>${item.price.toFixed(2)}</p>
                  </div>
                  <div className="quantity-control">
                    <button style={styles.quantityButton} onClick={() => updateQuantity(item.name, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button style={styles.quantityButton} onClick={() => updateQuantity(item.name, 1)}>+</button>
                  </div>
                  <span style={styles.removeButton} onClick={() => removeFromCart(item.name)}>&#10005;</span>
                </div>
              ))
            )}
            <h3>Total: ${cartTotal.toFixed(2)}</h3>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button style={styles.checkoutButton} onClick={handleCheckout}>
                Proceed to Checkout <span style={{ marginLeft: 8, fontSize: '1.3em' }}>→</span>
              </button>
            </div>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Order History</h2>
            {orderHistory.map(order => (
                <div key={order.id} style={styles.orderItem}>
                    <span>Order #{order.id} - {order.date}</span>
                    <span>${order.total.toFixed(2)}</span>
                    <span>{order.status}</span>
                </div>
            ))}
          </div>
        </div>

        <div style={styles.rightColumn}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>My Profile</h2>
            <div style={styles.profileInfo}>
                <p><strong>Name:</strong> {userProfile.name}</p>
                <p><strong>Email:</strong> {userProfile.email}</p>
                <p><strong>Phone:</strong> {userProfile.phone}</p>
                <p><strong>Address:</strong> {userProfile.address}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartProfile;
