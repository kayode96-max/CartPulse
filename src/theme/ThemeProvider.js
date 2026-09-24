import React, { createContext, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { colors } from './tokens';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const systemScheme = useColorScheme();
  const [mode, setMode] = useState(systemScheme === 'dark' ? 'dark' : 'light');

  const theme = useMemo(() => ({
    mode,
    colors: colors[mode],
    isDark: mode === 'dark',
    setMode,
    toggle: () => setMode((current) => current === 'dark' ? 'light' : 'dark'),
  }), [mode]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return theme;
}
