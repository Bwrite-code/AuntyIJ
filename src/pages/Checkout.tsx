import React, { useState } from 'react';
import { useTheme } from '../theme';

const Checkout = () => {
  const { colors } = useTheme();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [form, setForm] = useState({
    name: '',
    card: '',
    expiry: '',
    cvc: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const styles = {
    container: {
      maxWidth: 400,
      margin: '4rem auto',
      padding: '2rem',
      border: `1px solid ${colors.primary}`,
      borderRadius: 10,
      background: '#fff',
      boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
      textAlign: 'center' as 'center',
    },
    title: {
      fontSize: '2rem',
      color: colors.primary,
      marginBottom: '1.5rem',
    },
    input: {
      width: '100%',
      padding: '0.7rem',
      margin: '0.5rem 0',
      border: `1px solid ${colors.primary}`,
      borderRadius: 5,
      fontSize: '1rem',
    },
    button: {
      width: '100%',
      padding: '1rem',
      fontSize: '1.1rem',
      backgroundColor: colors.primary,
      color: '#fff',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      marginTop: '1rem',
    },
    checkmarkWrapper: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 200,
    },
    checkmark: {
      width: 80,
      height: 80,
      borderRadius: '50%',
      background: '#4BB543',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem',
      animation: 'pop 0.5s',
    },
    svg: {
      width: 40,
      height: 40,
      color: '#fff',
    },
    successText: {
      color: '#4BB543',
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    '@keyframes pop': {
      '0%': { transform: 'scale(0.5)' },
      '80%': { transform: 'scale(1.1)' },
      '100%': { transform: 'scale(1)' },
    },
  };

  return (
    <div style={styles.container}>
      {step === 'form' ? (
        <>
          <div style={styles.title}>Checkout</div>
          <form onSubmit={handleSubmit}>
            <input
              style={styles.input}
              name="name"
              placeholder="Name on Card"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              style={styles.input}
              name="card"
              placeholder="Card Number"
              value={form.card}
              onChange={handleChange}
              required
              maxLength={19}
              pattern="[0-9 ]*"
            />
            <input
              style={styles.input}
              name="expiry"
              placeholder="MM/YY"
              value={form.expiry}
              onChange={handleChange}
              required
              maxLength={5}
              pattern="[0-9/]*"
            />
            <input
              style={styles.input}
              name="cvc"
              placeholder="CVC"
              value={form.cvc}
              onChange={handleChange}
              required
              maxLength={4}
              pattern="[0-9]*"
            />
            <input
              style={styles.input}
              name="address"
              placeholder="Billing Address"
              value={form.address}
              onChange={handleChange}
              required
            />
            <button style={styles.button} type="submit">Pay Now</button>
          </form>
        </>
      ) : (
        <div style={styles.checkmarkWrapper}>
          <div style={styles.checkmark}>
            <svg style={styles.svg} viewBox="0 0 24 24">
              <path fill="currentColor" d="M20.285 6.709a1 1 0 0 0-1.414-1.418l-8.285 8.293-3.293-3.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l9-9z" />
            </svg>
          </div>
          <div style={styles.successText}>Payment Successfully 👍<p>Your order is on its way</p></div>
        </div>
      )}
      <style>{`
        @keyframes pop {
          0% { transform: scale(0.5); }
          80% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Checkout;
