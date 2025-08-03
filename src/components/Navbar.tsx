// import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme';

const Navbar = () => {
  const { toggleTheme, theme, colors } = useTheme();
  return (
    <nav style={{ background: colors.primary, color: colors.neutral, padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        <Link to="/" style={{ color: colors.neutral, textDecoration: 'none' }}>Aunty IJ</Link>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/menu" style={{ color: colors.neutral }}>Menu</Link>
        <Link to="/order" style={{ color: colors.neutral }}>Order</Link>
        <Link to="/about" style={{ color: colors.neutral }}>About</Link>
        <Link to="/locations" style={{ color: colors.neutral }}>Locations</Link>
        <Link to="/contact" style={{ color: colors.neutral }}>Contact</Link>
        <Link to="/careers" style={{ color: colors.neutral }}>Careers</Link>
        <Link to="/loyalty" style={{ color: colors.neutral }}>Loyalty</Link>
        <Link to="/blog" style={{ color: colors.neutral }}>Blog</Link>
        <Link to="/cart" style={{ color: colors.cta, fontWeight: 'bold' }}>Cart</Link>
        <button onClick={toggleTheme} style={{ marginLeft: '1rem', background: 'none', border: 'none', color: colors.cta, cursor: 'pointer', fontSize: '1.1rem' }}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
