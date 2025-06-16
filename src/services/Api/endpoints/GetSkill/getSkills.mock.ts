export interface Skill {
  name: string;
  color: string;
  backgroundColor: string;
}

const technologies = [
  { name: 'HTML5', color: '#FFF', backgroundColor: '#FF7A00' },
  { name: 'CSS3', color: '#FFF', backgroundColor: '#0038FF' },
  { name: 'JavaScript', color: '#333', backgroundColor: '#FFD600' },
  { name: 'TypeScript', color: '#FFFFFF', backgroundColor: '#007ACC' },
  { name: 'WebSocket', color: '#FFFFFF', backgroundColor: '#800000' },
  { name: 'SQL', color: '#FFFFFF', backgroundColor: '#E38D13' },
];

const libraries = [
  { name: 'React', color: '#000', backgroundColor: '#61DAFB' },
  { name: 'axios', color: '#FFFFFF', backgroundColor: '#3E863D' },
  { name: 'Matter.js', color: '#FFFFFF', backgroundColor: '#00A8C5' },
  { name: 'Alpine', color: '#2c3441', backgroundColor: '#72afd9' },
  { name: 'Preact', color: '#FFFFFF', backgroundColor: '#673ab8' },
  { name: 'dotenv', color: '#000000', backgroundColor: '#61C911' },
];

const stateManagers = [
  { name: 'Redux', color: '#FFFFFF', backgroundColor: '#764ABC' },
  { name: 'Redux-thunk', color: '#FFFFFF', backgroundColor: '#764ABC' },
  { name: 'MobX', color: '#FFFFFF', backgroundColor: '#ff9955' },
];

const bundlers = [
  { name: 'Webpack 5', color: '#000000', backgroundColor: '#8DD6F9' },
  { name: 'Vite', color: '#FFFFFF', backgroundColor: '#646fff' },
  { name: 'npm scripts', color: '#FFFFFF', backgroundColor: '#CB3837' },
];

const uiKits = [
  { name: 'Tailwind', color: '#FFFFFF', backgroundColor: '#38B2AC' },
  { name: 'Material UI', color: '#FFFFFF', backgroundColor: '#0081CB' },
  { name: 'Shadcn UI', color: '#2D2D2D', backgroundColor: '#FFD23F' },
  { name: 'Radix', color: '#FFFFFF', backgroundColor: '#591c48' },
];

const ciCd = [
  { name: 'Nginx', color: '#FFFFFF', backgroundColor: '#009639' },
  { name: 'GitHub', color: '#FFFFFF', backgroundColor: '#968683' },
  { name: 'GitLab', color: '#FFFFFF', backgroundColor: '#fa8c76' },
  { name: 'Jenkins', color: '#FFFFFF', backgroundColor: '#F1502F' },
];

const versionControl = [
  { name: 'Git', color: '#FFFFFF', backgroundColor: '#F1502F' },
];

const methodologies = [
  { name: 'BEM', color: '#64D544', backgroundColor: '#000000' },
];

const tools = [
  { name: 'Electron', color: '#000000', backgroundColor: '#41B883' },
  { name: 'npx', color: '#000000', backgroundColor: '#C12127' },
  { name: 'npm', color: '#FFFFFF', backgroundColor: '#CB3837' },
  { name: 'SQLite', color: '#FFFFFF', backgroundColor: '#003B57' },
  { name: 'ESLint', color: '#FFFFFF', backgroundColor: '#4B32C3' },
];

const testing = [
  { name: 'Jest', color: '#FFFFFF', backgroundColor: '#99425B' },
  { name: 'Cypress', color: '#FFFFFF', backgroundColor: '#17202C' },
];

const styling = [
  { name: 'PostCSS', color: '#FFFFFF', backgroundColor: '#DD3A0A' },
  { name: 'SCSS', color: '#FFFFFF', backgroundColor: '#CD6799' },
  { name: 'Figma', color: '#FFFFFF', backgroundColor: '#0ACF83' },
];

const educational = [
  { name: 'ES6', color: '#000000', backgroundColor: '#F7DF1E' },
  { name: 'Frontend', color: '#FFFFFF', backgroundColor: '#6CC24A' },
];

const misc = [
  { name: 'cors', color: '#FFFFFF', backgroundColor: '#F0653D' },
  { name: 'Astro', color: '#FFFFFF', backgroundColor: '#b845ed' },
];

export const skillsMock = [
  ...technologies,
  ...libraries,
  ...stateManagers,
  ...bundlers,
  ...uiKits,
  ...ciCd,
  ...versionControl,
  ...methodologies,
  ...tools,
  ...testing,
  ...styling,
  ...educational,
  ...misc,
];
