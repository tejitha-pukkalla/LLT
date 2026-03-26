import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const colors = {
    primary: '#1B365D',      // Deep navy from logo
    secondary: '#2E8B8B',    // Teal/cyan from logo circuit
    accent: '#3BB3B3',       // Lighter teal accent
    highlight: '#00D4AA',    // Bright cyan highlight
    dark: {
      bg: '#0A0F1C',
      card: '#111827',
      text: '#F8FAFC',
      muted: '#94A3B8'
    },
    light: {
      bg: '#FAFBFC',
      card: '#FFFFFF',
      text: '#1E293B',
      muted: '#64748B'
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;