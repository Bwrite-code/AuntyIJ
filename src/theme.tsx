import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ThemeType = 'light' | 'dark';

const colors = {
  light: {
    primary: '#D62828', // Deep Red
    accent: '#F77F00', // Warm Orange
    neutral: '#F5F5F5', // Light Grey
    text: '#252422', // Dark Navy
    cta: '#FCA311', // Bright Yellow
    background: '#FFFFFF',
  },
  dark: {
    primary: '#D62828',
    accent: '#F77F00',
    neutral: '#252422', // Use dark navy as background
    text: '#F5F5F5', // Light text
    cta: '#FCA311',
    background: '#181818',
  },
};

interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
  colors: typeof colors.light;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  const value = {
    theme,
    toggleTheme,
    colors: colors[theme],
  };
  return (
    <ThemeContext.Provider value={value}>
      <div style={{ background: colors[theme].background, color: colors[theme].text, minHeight: '100vh', transition: 'background 0.4s, color 0.4s' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
