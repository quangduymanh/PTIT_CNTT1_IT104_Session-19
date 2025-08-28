import React from 'react';
import { useTheme } from '../ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <h1>My Themed App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Theme hiện tại: {theme.toUpperCase()}</p>
    </header>
  );
};

export default Header;
