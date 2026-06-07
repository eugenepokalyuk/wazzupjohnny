import { Links } from '@utils/constants';
import { projectArray, ProjectItemProps, skillsMock } from '@services/Api';

/** Core skills get the highlighted "core" chip treatment and lead the list. */
const CORE_SKILLS = new Set([
  'Next',
  'React',
  'TypeScript',
  'Redux',
  'JavaScript',
  'Git',
  'SCSS',
]);

export const CORE_SKILL_NAMES = [...CORE_SKILLS];

export interface InventoryChip {
  name: string;
  core: boolean;
}

/** Skill inventory derived from the real skills mock (deduped, core first). */
const dedupedSkills = Array.from(
  new Map(skillsMock.map((s) => [s.name, s])).values(),
);

const coreChips: InventoryChip[] = CORE_SKILL_NAMES.filter((name) =>
  dedupedSkills.some((s) => s.name === name),
).map((name) => ({ name, core: true }));

const restChips: InventoryChip[] = dedupedSkills
  .filter((s) => !CORE_SKILLS.has(s.name))
  .map((s) => ({ name: s.name, core: false }));

export const INVENTORY: InventoryChip[] = [...coreChips, ...restChips];

export interface Stat {
  name: string;
  value: number;
}

/** Character stat bars (illustrative, matches the Sega design). */
export const STATS: Stat[] = [
  { name: 'HTML', value: 96 },
  { name: 'CSS', value: 94 },
  { name: 'JS', value: 92 },
  { name: 'REACT', value: 90 },
  { name: 'TS', value: 85 },
  { name: 'NODE', value: 72 },
  { name: 'COFFEE', value: 99 },
];

export const MEDALS = ['🥇', '🏅', '⭐', '💎', '🎖️', '🏆', '👑'];

export interface LevelCard {
  no: string;
  icon: string;
  title: string;
  desc: string;
  href: string;
}

/** Level Select cards — `/` hrefs route to a page, `#` hrefs scroll in-page. */
export const LEVELS: LevelCard[] = [
  {
    no: '01',
    icon: '🗂️',
    title: 'Мои проекты',
    desc: 'PORTFOLIO STAGE',
    href: '/projects/',
  },
  {
    no: '02',
    icon: '👾',
    title: 'Немного о себе',
    desc: 'PLAYER PROFILE',
    href: '#player',
  },
  {
    no: '03',
    icon: '📜',
    title: 'Пишу статьи',
    desc: 'DEVLOG WORLD',
    href: '/articles/',
  },
  {
    no: '04',
    icon: '🪙',
    title: 'Контакты',
    desc: 'INSERT COIN',
    href: '#coin',
  },
];

/** Featured projects (with a live link) for the in-page STAGE SELECT teaser. */
export const FEATURED_PROJECTS: ProjectItemProps[] = projectArray
  .filter((p) => p.url || p.urlGitHub)
  .slice(0, 4);

export interface ContactCard {
  icon: string;
  label: string;
  hint: string;
  href: string;
}

export const CONTACTS: ContactCard[] = [
  {
    icon: '✈️',
    label: 'Telegram',
    hint: '1UP · напиши в личку',
    href: Links.Telegram,
  },
  {
    icon: '🐙',
    label: 'GitHub',
    hint: '2UP · посмотри код',
    href: Links.GitHub,
  },
  {
    icon: '✉️',
    label: 'Email',
    hint: '3UP · напиши письмо',
    href: 'mailto:eugene.pokalyuk@gmail.com',
  },
];

export const PLAYER_NAME = 'ЕВГЕНИЙ';

export const CHAR_BIO =
  'Привет! Я занимаюсь фронтенд-разработкой: собираю быстрые, аккуратные интерфейсы на React и TypeScript. Люблю чистый код, ретро-эстетику и хороший саундтрек к работе';

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

export { PALETTES } from '@components/sega/theme';
export type { PaletteId } from '@components/sega/theme';
