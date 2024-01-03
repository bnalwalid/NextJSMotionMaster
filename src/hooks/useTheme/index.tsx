import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';

import Store from 'lib/Store';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import defaultTheme from 'styles/themes/default';

import config from 'config/general';

interface IUseThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

const themeStore = Store(`${config.localStorageKey}-theme`);

const themes = [defaultTheme];

interface IUseThemeProviderProps {
  children: React.ReactNode;
}

const UseThemeContext = createContext<IUseThemeContextData>({} as IUseThemeContextData);

const UseThemeProvider: React.FC<IUseThemeProviderProps> = ({ children }) => {
  // # Tema

  const [theme, setTheme] = useState<DefaultTheme>(themes[0]);
  const [themeNumber, setThemeNumber] = useState<number>(0);

  const toggleTheme = useCallback((): void => {
    setThemeNumber((oldNumber) => {
      const newTheme = oldNumber + 1;
      return newTheme < themes.length ? newTheme : 0;
    });
  }, []);

  const updateTheme = useCallback((newThemeNumber: number): void => {
    const auxTheme = themes[newThemeNumber];

    const newTheme: DefaultTheme = {
      ...auxTheme,
    };

    setTheme(newTheme);
    themeStore.setItem(`number`, String(newThemeNumber));
  }, []);

  // Verifica se existe algum tema definido na Store
  useEffect(() => {
    const storeThemeNumber = themeStore.getItem(`number`);
    if (storeThemeNumber) setThemeNumber(parseInt(storeThemeNumber, 10));
  }, []);

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

  // Atualiza o tema se o número dele mudar
  useEffect(() => {
    updateTheme(themeNumber);
  }, [themeNumber, updateTheme]);

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <UseThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UseThemeContext.Provider>
  );
};

const useTheme = (): IUseThemeContextData => {
  const context = useContext(UseThemeContext);
  if (!context) throw new Error('useTheme must be used within an UseThemeProvider');
  return context;
};

export { UseThemeProvider, useTheme };
