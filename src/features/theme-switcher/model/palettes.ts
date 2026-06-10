/** Session-storage keys for the persisted Sega theme. */
export enum ThemeStorageKey {
  Palette = 'sega-palette',
  Crt = 'sega-crt',
  Flicker = 'sega-flicker',
  Floor = 'sega-floor',
}

/** Cartridge palettes for the user-facing theme switcher. */
export const PALETTES = [
  { id: 'genesis', label: 'Genesis', preview: ['#ffce1a', '#2f7bff'] },
  { id: 'neon', label: 'Neon', preview: ['#ff2e88', '#00e5ff'] },
  { id: 'dreamcast', label: 'Dreamcast', preview: ['#ff6a00', '#5cc0ff'] },
] as const;

export type PaletteId = (typeof PALETTES)[number]['id'];
