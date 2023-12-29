// ThemeProvider.js
import React, { useState } from 'react';
import ThemeContext from '../Theme_context';
import themes from '../../utils/themes'

const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(themes.cyanTheme);

  return (
    <ThemeContext.Provider value={{theme, setTheme, themes}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
