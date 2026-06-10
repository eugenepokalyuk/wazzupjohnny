import { createContext, useContext } from 'react';

export interface HomeContextValue {
  showToast: (msg: string) => void;
}

export const HomeContext = createContext<HomeContextValue | null>(null);

export const useHome = (): HomeContextValue => {
  const ctx = useContext(HomeContext);

  if (!ctx) {
    throw new Error('useHome must be used within the Home page');
  }

  return ctx;
};
