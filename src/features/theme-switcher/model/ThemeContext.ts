import { createContext } from 'react';

import { PaletteId } from './palettes';

export interface ThemeValue {
  palette: PaletteId;
  setPalette: (value: PaletteId) => void;
  crt: boolean;
  setCrt: (value: boolean) => void;
  flicker: boolean;
  setFlicker: (value: boolean) => void;
  floor: boolean;
  setFloor: (value: boolean) => void;
}

export const ThemeContext = createContext<ThemeValue | null>(null);
