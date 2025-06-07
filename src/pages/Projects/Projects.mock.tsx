interface ProjectItemProps {
  url?:string;
  urlGitHub:string;
  img?:string;
  badges:string[];
  title:string;
  description:string;
}

export const ProjectArray:ProjectItemProps[] = [
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-skilla',
    badges: ['React', 'TypeScript', 'Redux', 'Date-fns', 'SCSS'],
    title: 'Call Management System',
    description:
      'This project is a call management system built using React and TypeScript. It provides an interface to display, filter and interact with call records.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-mindbox',
    badges: ['React', 'TypeScript', 'Tailwind', 'Jest'],
    title: 'todos',
    description:
      'Список ToDo, где пользователь может управлять своими задачами. Приложение построено с использованием React, TypeScript, Tailwind CSS и localStorage для постоянного хранения данных.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-crafttech',
    badges: ['React', 'TypeScript', 'sass', 'konva'],
    title: 'Web Paint',
    description:
      'Это приложение, предоставляет собой бесконечный холст, на котором пользователь может добавлять фигуры и манипулировать ими. Также есть возможность отмены действий в обе стороны и изменение заднего фона.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-madsoft',
    badges: ['React', 'TypeScript', 'Redux', 'Tailwind', 'Formik'],
    title: 'Информационная система для проверки знаний учащихся школы.',
    description:
      'В школе проводятся промежуточные аттестации учащихся в формате теста.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-airnet',
    badges: ['React', 'TypeScript'],
    title: 'AirNet To-Do list',
    description:
      'To-Do sheet in the form of a calendar, where each day is presented as a list of tasks. Clicking on a day opens a modal window with a list of tasks. In this window you can create new tasks, delete them and mark them as completed.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-pryaniky',
    badges: [
      'React',
      'TypeScript',
      'React Router v6',
      'Redux',
      'Redux Saga',
      'Material UI',
      'Formik',
    ],
    title: 'Pryaniky SPA',
    description:
      'The application is a secure one-page web application that provides CRUD operations (create, read, update, delete) on data stored on the server',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-personik',
    badges: ['React', 'TypeScript', 'Tailwind', 'React Router v6'],
    title: 'The game of cities',
    description:
      'This web application is a game of cities for time. The goal of the game is to name as many real cities as possible. The application includes a game with “AI” validation of cities, animation of progress bar and display of game results.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-mtg',
    badges: ['React', 'TypeScript', 'Redux', 'Vite'],
    title: 'SPA Application with Header and Reviews for MTG',
    description:
      'This project is a Single Page Application (SPA) built using React (class components), Redux, TypeScript, and Vite. The application consists of a header with an image, a language dropdown, a live clock, and a main section displaying a list of reviews with pagination.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-iway',
    badges: [
      'React',
      'TypeScript',
      'Redux',
      'Vite',
      'Ant Design',
      'SCSS',
      'React Router v6',
    ],
    title: 'Trips Management System',
    description:
      'The Trips Management System is a React-based web application designed to manage and display trip details. It includes features such as trip listing, detailed trip views, search and filtering capabilities, and pagination.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/next-aceplace',
    badges: ['Next', 'React', 'TypeScript', 'CSS/SCSS', 'DaData API', 'SSR'],
    title: 'Organization Info Finder',
    description:
      'This project is a Next.js application that allows users to search for organizations by their tax identification number (INN) and display detailed information about the organization. The data is fetched from the DaData API.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/static-helper-designcareer',
    badges: ['HTML', 'CSS', 'JavaScript'],
    title: 'Helper: как максимально быстро прокачать карьеру дизайнера',
    description:
      'Как максимально быстро прокачать карьеру дизайнера. Интенсив создан на основе исследования карьер ведущих дизайнеров. Топ 5 фишек для буста дизайн карьеры.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/static-helper-garantiya',
    badges: ['HTML', 'CSS', 'JavaScript'],
    title: 'Helper: теперь с гарантией трудоустройства',
    description:
      'Рассказываем как мы сделали по-настоящему прозрачную гарантию трудоустройства для дизайнеров.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/static-helper-main-page',
    badges: ['HTML', 'CSS', 'JavaScript'],
    title: 'Helper - Платформа прокачки карьеры дизайнеров',
    description:
      'Прокачиваем карьеру продуктовых, веб, UX/UI и графических дизайнеров. За 3-4 месяца ты усилишь скиллы и упакуешь портфолио, так, чтобы за тебя «дрались» HR-ы.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/vue-skateboarding',
    badges: ['Vue 3', 'Vite', 'Tailwind', 'PostCSS', 'Vue Router'],
    title: 'Skateboarding',
    description:
      'SkateHut was established in 2007 by Mark Johansen-Berg following a family holiday to Florida with his wife and three sons. When his eldest son spotted a pair of Heelys in one of the theme parks, he just had to have a pair! Upon arriving back to the UK, they realised that Heelys were nowhere to be seen. Mark and his family decided to do something about it.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/next-generate-qr',
    badges: ['Next', 'React', 'TypeScript', 'ShadCN-ui'],
    title: 'Beauty QR Code Generation',
    description:
      'Project appears to be a Next.js web application designed for generating QR codes with customizable backgrounds. The application integrates with external APIs for both QR code generation and dynamic background image creation based on user-provided prompts.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/astro-blog',
    badges: ['Astro', 'TypeScript', 'PReact', 'Alpine.js', 'Tailwind'],
    title: 'Blog',
    description:
      'A blog built using Astro, a modern website building framework that allows for server-side visual components and integrates with Tailwind CSS for styling.',
  },
  {
    url: 'https://next-ujjo-hot-sauce.vercel.app/',
    urlGitHub: 'https://github.com/eugenepokalyuk/next-ujjo-hot-sauce',
    badges: ['Next', 'React', 'TypeScript', 'Tailwind'],
    title: 'Ujjo Hot Sauce',
    description: 'The project includes a website on Next.js with Tailwind CSS to sell a unique product - spicy coffee sauce. Includes adaptive components: header, ticker, product cards with non-standard borders.',
  },
  {
    urlGitHub:
      'https://github.com/eugenepokalyuk/react-helper-personal-account',
    badges: ['React', 'Redux', 'TypeScript', 'Tailwind', 'Vite'],
    title: 'Helper. Designer\'s profile',
    description:
      'Minimal React setup using TypeScript and Vite, featuring Hot Module Replacement (HMR) and ESLint rules. It supports official plugins for fast refresh with Babel or SWC and guides on expanding ESLint configurations for production. It\'s tailored for developers seeking a streamlined React framework with Redux, TypeScript, and Tailwind CSS integration.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/helper-become-designer',
    badges: ['React', 'Redux', 'TypeScript', 'Tailwind', 'Vite'],
    title: 'Helper. Become designer',
    description:
      'Minimal setup for React applications with Hot Module Replacement (HMR) and ESLint rules. It supports official plugins like @vitejs/plugin-react and @vitejs/plugin-react-swc for fast refresh, and provides guidance for expanding ESLint configuration for production-ready apps',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-pet-store',
    badges: [
      'React',
      'Redux',
      'TypeScript',
      'Tailwind',
      'Radix-ui',
      'Vite',
      'Framer Motion',
    ],
    title: 'Online pet store',
    description:
      'Online store for pets. List of goods, shopping cart, payment form for goods, animations, map widget',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-music-collection',
    badges: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    title: 'Music collection',
    description: 'List of the Yandex Music user\'s music collection',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react_python-gameclub',
    img: 'https://private-user-images.githubusercontent.com/111701135/307546444-5cdb353f-52ea-455d-887f-bfa021538830.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTcyNTE5NjYsIm5iZiI6MTcxNzI1MTY2NiwicGF0aCI6Ii8xMTE3MDExMzUvMzA3NTQ2NDQ0LTVjZGIzNTNmLTUyZWEtNDU1ZC04ODdmLWJmYTAyMTUzODgzMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYwMVQxNDIxMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lZmZkZWQxY2JmNTFmNzIyYTY2YjAyMTYzYmI0MzZhNmFmN2Q1M2EwMTM3NmMzYTU3NDJmMjA3ZTQwOTUwNmE0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.j2m0ktCNS0vDTi6K38K4r-P5bMUfNZfKBJSmm4D9w80',
    badges: [
      'React',
      'TypeScript',
      'Tailwind',
      'Redux',
      'Chart.js',
      'Python',
      'FastAPI',
      'Pydantic',
      'Uvicorn',
      'SQLAlchemy',
      'Router Router v6',
      'DND',
    ],
    title: 'Панель управления компьютерным клубом',
    description:
      'Предоставляет возможность управлять рабочими местами и проводить финансовый учет. Панель позволит сотрудникам клуба с одного рабочего компьютера устанавливать доступное время игры/работы за каждым компьютером или PlayStation 5 внутри клуба. Она также предоставит информацию о выручке за смену, сумме наличных в кассе, а также содержать базу данных сотрудников и посетителей клуба. Дополнительно, панель будет иметь базу данных с текущими товарами (напитки, еда), которые предлагаются на продажу.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-freetogame',
    badges: [
      'React',
      'Redux',
      'TypeScript',
      'CSS Modules',
      'css-in-js',
      'Vite',
      'NodeJS',
      'Jest',
    ],
    title: 'Free to game',
    description:
      'FreeToGame provides access to the best free-to-play multiplayer games and MMO Games while rewarding gamers with free premium in-game loot and exclusive perks.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/next-inwood',
    badges: ['React', 'TypeScript', 'Next', 'Tailwind'],
    title: 'Inwood',
    description:
      'A stylish website featuring a responsive design with a modern UI/UX, offering an exclusive furniture collection. It integrates a product carousel, detailed item views, a special package section, and a comprehensive footer with social links and navigation. The site uses Next.js, TypeScript, and TailwindCSS.',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-real-estate',
    badges: ['React', 'TypeScript', 'css-modules'],
    title: 'Real Estate',
    description:
      'The landing page of a company specializing in the exterior of real estate is a modern and intuitive web interface created on React. The main page focuses on the company\'s portfolio of projects, showing high-quality images and descriptions of implemented exterior solutions for various types of real estate',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-burger',
    badges: ['React', 'TypeScript', 'Redux', 'jest', 'websocket', 'cypress'],
    title: 'Stellar Burger',
    description:
      'The web application allows you to order unique burgers of your own assembly. The burgers are created by dragging and dropping ingredients into the burger builder area and placing an order, information on ingredients can be opened by clicking on an item, all orders are tracked in real time, you can view the history of all orders in the order feed.',
  },
];
