import { ProjectItemProps, projectArray } from '@entities/project';
import { skillsMock } from '@entities/skill';

export const PLAYER_NAME = 'ЕВГЕНИЙ';

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
const dedupedSkills = Array.from(new Map(skillsMock.map((s) => [s.name, s])).values());

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
  { name: 'REACT', value: 90 },
  { name: 'TS', value: 85 },
  { name: 'JS', value: 92 },
  { name: 'HTML', value: 96 },
  { name: 'CSS', value: 94 },
  { name: 'NODE', value: 72 },
  { name: 'COFFEE', value: 99 },
];

export const MEDALS = ['🥇', '🏅', '⭐', '💎', '🎖️', '🏆', '👑'];

export type LevelKey = 'projects' | 'about' | 'articles' | 'contacts';

export interface LevelCard {
  key: LevelKey;
  no: string;
  icon: string;
  to: { type: 'route'; name: 'projects' | 'articles' } | { type: 'anchor'; hash: string };
}

/** Level Select cards — text comes from the dictionary, keyed by `key`. */
export const LEVELS: LevelCard[] = [
  { key: 'projects', no: '01', icon: '🗂️', to: { type: 'route', name: 'projects' } },
  { key: 'about', no: '02', icon: '👾', to: { type: 'anchor', hash: '#player' } },
  { key: 'articles', no: '03', icon: '📜', to: { type: 'route', name: 'articles' } },
  { key: 'contacts', no: '04', icon: '🪙', to: { type: 'anchor', hash: '#coin' } },
];

/** Featured projects (with a live link) for the in-page STAGE SELECT teaser. */
export const FEATURED_PROJECTS: ProjectItemProps[] = projectArray
  .filter((p) => p.url || p.urlGitHub)
  .slice(0, 4);
