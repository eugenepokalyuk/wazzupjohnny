import { useSessionStorage } from 'usehooks-ts';

/** Session-storage keys (no magic strings scattered around the codebase). */
export enum SegaStorageKey {
  Palette = 'sega-palette',
  Crt = 'sega-crt',
  Flicker = 'sega-flicker',
  Floor = 'sega-floor',
  BonusUnlocked = 'sega-bonus-unlocked',
}

/** Cartridge palettes for the user-facing theme switcher. */
export const PALETTES = [
  { id: 'genesis', label: 'Genesis', preview: ['#ffce1a', '#2f7bff'] },
  { id: 'neon', label: 'Neon', preview: ['#ff2e88', '#00e5ff'] },
  { id: 'dreamcast', label: 'Dreamcast', preview: ['#ff6a00', '#5cc0ff'] },
] as const;

export type PaletteId = (typeof PALETTES)[number]['id'];

export interface SegaTheme {
  palette: PaletteId;
  setPalette: (value: PaletteId) => void;
  crt: boolean;
  setCrt: (value: boolean | ((prev: boolean) => boolean)) => void;
  flicker: boolean;
  setFlicker: (value: boolean) => void;
  floor: boolean;
  setFloor: (value: boolean) => void;
}

/**
 * Persisted Sega theme state (palette + CRT toggles), shared across every page.
 * usehooks-ts keeps all instances in sync within the tab, so switching the
 * palette on one page updates the others on navigation.
 */
export const useSegaTheme = (): SegaTheme => {
  const [palette, setPalette] = useSessionStorage<PaletteId>(
    SegaStorageKey.Palette,
    'genesis',
  );
  const [crt, setCrt] = useSessionStorage<boolean>(SegaStorageKey.Crt, true);
  const [flicker, setFlicker] = useSessionStorage<boolean>(
    SegaStorageKey.Flicker,
    true,
  );
  const [floor, setFloor] = useSessionStorage<boolean>(
    SegaStorageKey.Floor,
    true,
  );

  return {
    palette,
    setPalette,
    crt,
    setCrt,
    flicker,
    setFlicker,
    floor,
    setFloor,
  };
};
