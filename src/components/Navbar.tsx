import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme';

const Navbar = () => {
  const { toggleTheme, theme, colors } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { to: '/menu', label: 'Menu' },
    { to: '/order', label: 'Order' },
    { to: '/about', label: 'About' },
    { to: '/locations', label: 'Locations' },
    { to: '/contact', label: 'Contact' },
    { to: '/careers', label: 'Careers' },
    { to: '/loyalty', label: 'Loyalty' },
    { to: '/blog', label: 'Blog' },
  ];

  const styles = {
    nav: {
      background: colors.primary,
      color: colors.neutral,
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative' as 'relative',
    },
    logo: {
      fontWeight: 'bold' as 'bold',
      fontSize: '1.5rem',
      zIndex: 1001,
    },
    logoLink: {
      color: colors.neutral,
      textDecoration: 'none',
    },
    desktopNav: {
      display: 'none',
      gap: '1.5rem',
      alignItems: 'center',
    },
    mobileMenuButton: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      cursor: 'pointer',
      padding: '0.5rem',
      background: 'none',
      border: 'none',
      color: colors.neutral,
      zIndex: 1001,
    },
    hamburgerLine: {
      width: '25px',
      height: '3px',
      background: colors.neutral,
      margin: '3px 0',
      transition: '0.3s',
    },
    mobileNav: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      position: 'fixed' as 'fixed',
      top: 0,
      left: isMobileMenuOpen ? 0 : '-100%',
      width: '80%',
      height: '100vh',
      background: colors.primary,
      transition: 'left 0.3s ease',
      zIndex: 1000,
      padding: '5rem 2rem 2rem',
      boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
      gap: '2rem',
    },
    overlay: {
      display: isMobileMenuOpen ? 'block' : 'none',
      position: 'fixed' as 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999,
    },
    navLink: {
      color: colors.neutral,
      textDecoration: 'none',
      padding: '0.5rem 0',
      fontSize: '1.1rem',
      borderBottom: `1px solid ${colors.accent}`,
    },
    cartLink: {
      color: colors.cta,
      fontWeight: 'bold' as 'bold',
      textDecoration: 'none',
      padding: '0.5rem 0',
      fontSize: '1.1rem',
    },
    themeButton: {
      background: 'none',
      border: 'none',
      color: colors.cta,
      cursor: 'pointer',
      fontSize: '1.5rem',
      padding: '0.5rem 0',
    },
    desktopThemeButton: {
      marginLeft: '1rem',
      background: 'none',
      border: 'none',
      color: colors.cta,
      cursor: 'pointer',
      fontSize: '1.1rem',
    },
  };

  // Media query styles using CSS-in-JS approach
  const mediaStyles = `
    @media (min-width: 768px) {
      .desktop-nav {
        display: flex !important;
      }
      .mobile-menu-button {
        display: none !important;
      }
      .mobile-nav {
        display: none !important;
      }
      .nav-overlay {
        display: none !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaStyles}</style>
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <Link to="/" style={styles.logoLink}>Aunty IJ</Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="desktop-nav" style={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} style={styles.navLink}>
              {link.label}
            </Link>
          ))}
          <Link to="/cart" style={styles.cartLink}>Cart</Link>
          <button onClick={toggleTheme} style={styles.desktopThemeButton}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button hamburger" 
          style={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
        >
          <span style={styles.hamburgerLine}></span>
          <span style={styles.hamburgerLine}></span>
          <span style={styles.hamburgerLine}></span>
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div 
        className="nav-overlay" 
        style={styles.overlay} 
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Navigation Menu */}
      <div className="mobile-nav" style={styles.mobileNav}>
        {navLinks.map((link) => (
          <Link 
            key={link.to} 
            to={link.to} 
            style={styles.navLink}
            onClick={closeMobileMenu}
          >
            {link.label}
          </Link>
        ))}
        <Link 
          to="/cart" 
          style={styles.cartLink}
          onClick={closeMobileMenu}
        >
          Cart
        </Link>
        <button onClick={toggleTheme} style={styles.themeButton}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
    </>
  );
};

export default Navbar;
