import { createContext, useContext } from 'react';

export interface SegaContextValue {
  showToast: (msg: string) => void;
  addCredit: () => void;
}

export const SegaContext = createContext<SegaContextValue | null>(null);

export const useSega = (): SegaContextValue => {
  const ctx = useContext(SegaContext);

  if (!ctx) {
    throw new Error('useSega must be used within <Sega>');
  }

  return ctx;
};
