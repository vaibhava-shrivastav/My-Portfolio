import React, { useEffect, useState } from 'react';
import './ThemeToggleButton.css';

const ThemeToggleButton = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <button
      className="theme-toggle-button"
      onClick={() => setDarkMode(prev => !prev)}
      aria-label="Toggle theme"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggleButton;
