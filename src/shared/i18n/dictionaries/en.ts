import { Dictionary } from '../types';

/** English dictionary — must satisfy the shape defined by `ru`. */
export const en: Dictionary = {
  nav: {
    home: 'HOME',
    projects: 'PROJECTS',
    articles: 'ARTICLES',
  },
  common: {
    play: 'PLAY',
    code: 'CODE',
    read: 'READ',
    allProjects: 'ALL PROJECTS',
    back: 'BACK TO ARTICLES',
    author: 'AUTHOR',
    sources: 'SOURCES',
    viewCert: 'VIEW CERT',
    complete: 'COMPLETE',
  },
  title: {
    edition: '16-BIT FRONTEND',
    player: 'PLAYER 1',
    role: 'frontend developer',
    pressStart: 'PRESS',
    copyright: '© 1991 EUGENE SOFT · ALL RIGHTS RESERVED',
    ready: 'PLAYER 1 READY!',
  },
  levels: {
    banner: 'LEVEL SELECT',
    projects: { title: 'My projects', desc: 'PORTFOLIO STAGE' },
    about: { title: 'About me', desc: 'PLAYER PROFILE' },
    articles: { title: 'I write articles', desc: 'DEVLOG WORLD' },
    contacts: { title: 'Contacts', desc: 'INSERT COIN' },
  },
  stageSelect: {
    banner: 'STAGE SELECT',
  },
  player: {
    banner: 'CHARACTER SELECT',
    class: 'CLASS · FRONTEND DEV',
    bio: 'Hi! I build frontends: fast, tidy interfaces with React and TypeScript. I love clean code, retro aesthetics and a good soundtrack while I work',
    stats: 'STATS',
    inventory: 'INVENTORY · STACK',
  },
  achievements: {
    banner: 'ACHIEVEMENTS UNLOCKED',
    world: 'WORLD',
  },
  bonus: {
    banner: 'BONUS STAGE · SKILL CLOUD',
    unlocked: 'CHEAT ACCEPTED · BONUS STAGE UNLOCKED',
  },
  contacts: {
    banner: 'INSERT COIN',
    subtitle: "CONTINUE? — drop me a line, let's start a new game together",
    thanks: 'THANKS FOR PLAYING · WAZZUPJOHNNY.RU',
    newGame: 'NEW GAME!',
    secretHint: '🕹️ SECRET CODE — type it on the keyboard or tap in order',
    telegram: '1UP · message me',
    github: '2UP · check the code',
    email: '3UP · send an email',
  },
  projectsPage: {
    banner: '🗂️ MY PROJECTS',
    lead: 'PORTFOLIO STAGE — pick a tech filter and clear the level. {count} projects in the archive',
    empty: 'NO STAGE FOUND · reset the filters',
  },
  articlesPage: {
    banner: '📜 DEVLOG WORLD',
    lead: 'Here I write about development, frameworks and tools. Pick an entry and read',
    notFound: 'GAME OVER · ARTICLE NOT FOUND',
  },
  error: {
    title: 'GAME OVER',
    subtitle: "CONTINUE? — there's no such page, but the game is not over yet",
    code: 'ERROR 404',
    crashSubtitle: '!@#$%, something went wrong — restart the game',
    crashCode: 'SYSTEM ERROR',
    home: 'BACK HOME',
  },
  tweaks: {
    title: 'TWEAKS',
    palette: 'CARTRIDGE PALETTE',
    crt: 'CRT TV',
    scanlines: 'Scanlines',
    flicker: 'Flicker',
    floor: 'Grid floor',
    open: 'Themes and settings',
  },
};
