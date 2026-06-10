export enum KonamiStorageKey {
  BonusUnlocked = 'sega-bonus-unlocked',
}

/**
 * Konami code sequence, compared against `KeyboardEvent.code` so it stays
 * layout-independent (works on a Cyrillic keyboard too).
 */
export const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

export type ArrowDir = 'up' | 'down' | 'left' | 'right';

export type KonamiKey =
  | { type: 'arrow'; dir: ArrowDir }
  | { type: 'text'; label: string };

/** Keycaps shown in the footer hint (arrows rendered via ArrowUpIcon). */
export const KONAMI_KEYS: KonamiKey[] = [
  { type: 'arrow', dir: 'up' },
  { type: 'arrow', dir: 'up' },
  { type: 'arrow', dir: 'down' },
  { type: 'arrow', dir: 'down' },
  { type: 'arrow', dir: 'left' },
  { type: 'arrow', dir: 'right' },
  { type: 'arrow', dir: 'left' },
  { type: 'arrow', dir: 'right' },
  { type: 'text', label: 'B' },
  { type: 'text', label: 'A' },
];
