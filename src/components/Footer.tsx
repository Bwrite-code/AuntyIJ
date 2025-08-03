// import React from 'react';
import { useTheme } from '../theme';

const Footer = () => {
  const { colors } = useTheme();
  return (
    <footer style={{ background: colors.primary, color: colors.neutral, textAlign: 'center', padding: '1.5rem 0', marginTop: '2rem' }}>
      <div>© {new Date().getFullYear()} Technokwrite. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
