import React, { useState } from 'react';

const Auth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      if (mode === 'signup') {
        setSignupSuccess(true);
      } else {
        // For sign in, just reload or redirect as before (could be improved)
        window.location.href = '/';
      }
    }, 1200);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {signupSuccess ? (
          <div style={styles.successWrapper}>
            <div style={styles.checkmark}>
              <svg style={styles.svg} viewBox="0 0 24 24">
                <path fill="currentColor" d="M20.285 6.709a1 1 0 0 0-1.414-1.418l-8.285 8.293-3.293-3.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l9-9z" />
              </svg>
            </div>
            <div style={styles.successText}>Welcome to our Team</div>
            <div style={styles.confirmText}>A confirmation message has been sent to your mail</div>
          </div>
        ) : (
          <>
            <h2 style={styles.title}>{mode === 'signin' ? 'Sign In' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                style={styles.input}
              />
              {error && <div style={styles.error}>{error}</div>}
              <button type="submit" style={styles.button} disabled={loading}>
                {loading ? 'Loading...' : mode === 'signin' ? 'Sign In' : 'Sign Up'}
              </button>
            </form>
            <div style={styles.switchMode}>
              {mode === 'signin' ? (
                <>
                  Don't have an account?{' '}
                  <span style={styles.link} onClick={() => setMode('signup')}>
                    Sign Up
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <span style={styles.link} onClick={() => setMode('signin')}>
                    Sign In
                  </span>
                </>
              )}
            </div>
          </>
        )}
      </div>
      <div style={styles.bgGradient}></div>
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

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  card: {
    zIndex: 2,
    background: 'rgba(255,255,255,0.95)',
    borderRadius: '20px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
    padding: '3rem 2.5rem',
    minWidth: '350px',
    maxWidth: '90vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backdropFilter: 'blur(4px)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '2rem',
    color: '#4f46e5',
    letterSpacing: '1px',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  input: {
    padding: '0.9rem 1.2rem',
    borderRadius: '8px',
    border: '1px solid #c7d2fe',
    fontSize: '1.1rem',
    outline: 'none',
    transition: 'border 0.2s',
    background: '#f1f5f9',
  },
  button: {
    padding: '1rem',
    borderRadius: '8px',
    border: 'none',
    background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
    color: '#fff',
    fontWeight: 600,
    fontSize: '1.1rem',
    cursor: 'pointer',
    boxShadow: '0 2px 8px 0 rgba(99,102,241,0.15)',
    transition: 'background 0.2s',
  },
  error: {
    color: '#ef4444',
    fontSize: '1rem',
    textAlign: 'center',
  },
  switchMode: {
    marginTop: '1.5rem',
    fontSize: '1rem',
    color: '#64748b',
    textAlign: 'center',
  },
  link: {
    color: '#4f46e5',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'underline',
    marginLeft: '0.3rem',
  },
  bgGradient: {
    position: 'absolute',
    top: '-20%',
    left: '-20%',
    width: '140%',
    height: '140%',
    zIndex: 1,
    background: 'radial-gradient(circle at 60% 40%, #818cf8 0%, #f1f5f9 80%)',
    opacity: 0.18,
    pointerEvents: 'none',
  },
  successWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 250,
    textAlign: 'center',
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
    marginBottom: '0.5rem',
  },
  confirmText: {
    color: '#64748b',
    fontSize: '1.1rem',
    marginTop: '0.5rem',
  },
};

export default Auth;
