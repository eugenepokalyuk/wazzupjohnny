import { useContext } from 'react';

import { ThemeContext, ThemeValue } from './ThemeContext';

export const useTheme = (): ThemeValue => {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error('useTheme must be used within <ThemeProvider>');
  }

  return ctx;
};
