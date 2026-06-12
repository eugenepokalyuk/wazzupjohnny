export interface ProjectItemProps {
  created: number;
  url?: string;
  urlGitHub?: string;
  img?: string;
  badges: string[];
  title: string;
  description: string;
  favorite?: boolean;
}

enum Tag {
  // Стили и препроцессоры
  CSS = 'CSS',
  SCSS = 'SCSS',
  SASS = 'SASS',
  PostCSS = 'PostCSS',
  CSSModules = 'CSS Modules',
  CSSInJS = 'CSS in JS',
  Tailwind = 'Tailwind',

  // Фреймворки и библиотеки UI
  Astro = 'Astro',
  PReact = 'PReact',
  React = 'React',
  Vue3 = 'Vue 3',
  Next = 'Next',
  Alpine = 'Alpine',
  RadixUI = 'Radix UI',
  ShadCNUI = 'ShadCN UI',
  MaterialUI = 'Material UI',
  AntDesign = 'Ant Design',
  FramerMotion = 'Framer Motion',
  Konva = 'Konva',

  // Маршрутизация
  ReactRouterV6 = 'React Router V6',
  VueRouter = 'Vue Router',

  // Языки программирования и рантаймы
  TypeScript = 'TypeScript',
  JavaScript = 'JavaScript',
  Python = 'Python',
  NodeJS = 'NodeJS',

  // Тестирование
  Jest = 'Jest',
  Cypress = 'Cypress',

  // Состояние и управление
  Redux = 'Redux',
  RTK = 'Redux Toolkit',
  RxJS = 'RxJS',
  ReduxSaga = 'Redux Saga',
  Formik = 'Formik',

  // Веб и серверные технологии
  SSR = 'SSR',
  Vite = 'Vite',
  Webpack = 'Webpack',
  Websocket = 'Websocket',
  WebApp = 'Telegram WebApp',

  // API и бэкенд
  FastAPI = 'FastAPI',
  Pydantic = 'Pydantic',
  Uvicorn = 'Uvicorn',
  SQLAlchemy = 'SQLAlchemy',
  DaDataAPI = 'DaData API',

  // Утилиты и прочее
  DateFNS = 'Date FNS',
  ChartJS = 'Chart.js',
  DND = 'DND',

  // Разметка
  HTML = 'HTML',
}

export const projectArray: ProjectItemProps[] = [
  {
    url: 'https://eugenepokalyuk.github.io/ctypto-analysis/',
    urlGitHub: 'https://github.com/eugenepokalyuk/ctypto-analysis',
    badges: [
      Tag.React,
      Tag.TypeScript,
      Tag.Redux,
      Tag.RTK,
      Tag.FramerMotion,
      Tag.SCSS,
      Tag.Vite,
    ],
    title: 'Crypto Advisor',
    description:
      'Веб-приложение для технического анализа криптовалютного рынка и управления инвестиционным портфелем',
    created: 2026,
  },
  {
    url: 'https://forma-one.ru/',
    badges: [Tag.Next, Tag.TypeScript, Tag.Redux, Tag.RxJS, Tag.SCSS],
    favorite: true,
    title: 'Форма',
    description:
      'Форма помогает не теряться в зале. Открываешь приложение — видишь что делать сегодня, сколько подходов и с каким весом. Никакого стресса, только удовольствие от тренировки',
    created: 2026,
  },
  {
    badges: [
      Tag.React,
      Tag.TypeScript,
      Tag.Redux,
      Tag.RxJS,
      Tag.Vite,
      Tag.SCSS,
    ],
    title: 'Askymo - Кастдев‑опросы без агентства',
    description:
      'B Askymo бренды проводят кампании по анализу потенциальных покупателей и исследованию рынка. В опросах нет сбора персональной информации',
    created: 2025,
  },
  {
    badges: [
      Tag.React,
      Tag.TypeScript,
      Tag.Redux,
      Tag.ReduxSaga,
      Tag.Vite,
      Tag.SCSS,
    ],
    title: 'Web3 Crypto проект',
    description: 'К сожалению ничего сказать, показать помимо стэка не могу',
    created: 2025,
  },
  {
    url: 'https://myhalsa.ru/',
    badges: [
      Tag.React,
      Tag.TypeScript,
      Tag.Redux,
      Tag.RxJS,
      Tag.Webpack,
      Tag.SCSS,
    ],
    favorite: true,
    title: 'Halsa',
    description:
      'С 2018 года Halsa создаёт персональные и проверенные решения для красоты и здоровья, одобренные врачами',
    created: 2025,
  },
  {
    url: 'https://astro-blog-gold-kappa.vercel.app/',
    urlGitHub: 'https://github.com/eugenepokalyuk/astro-blog',
    badges: [Tag.Astro, Tag.PReact, Tag.TypeScript, Tag.Alpine, Tag.Tailwind],
    title: 'Blog',
    description:
      'Блог, построенный с помощью Astro — современного фреймворка для сайтов, поддерживающего серверные компоненты и Tailwind CSS для стилизации',
    created: 2024,
  },
  {
    url: 'https://next-ujjo-hot-sauce.vercel.app/',
    urlGitHub: 'https://github.com/eugenepokalyuk/next-ujjo-hot-sauce',
    badges: [Tag.React, Tag.TypeScript, Tag.Next, Tag.Tailwind],
    title: 'Ujjo Hot Sauce',
    description:
      'Сайт на Next.js с Tailwind CSS для продажи уникального продукта — острого соуса для кофе. Включает адаптивные компоненты: шапку, бегущую строку, карточки товаров с нестандартными рамками',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-burger',
    badges: [
      Tag.TypeScript,
      Tag.React,
      Tag.Redux,
      Tag.Websocket,
      Tag.Jest,
      Tag.Cypress,
      Tag.Tailwind,
    ],
    title: 'Stellar Burger',
    description:
      'Веб-приложение позволяет собирать и заказывать уникальные бургеры, перетаскивая ингредиенты. Есть просмотр информации об ингредиентах, отслеживание заказов в реальном времени и история заказов',
    created: 2023,
  },
  {
    url: 'https://xn--d1acamsh7dwd.net/',
    urlGitHub: 'https://github.com/eugenepokalyuk/react-tg-web-app-dementia',
    badges: [Tag.React, Tag.Redux, Tag.WebApp],
    title: 'Фитнес для мозга',
    description: 'Разработка сайта и тестов для сайта деменция.нет',
    created: 2023,
  },
  {
    url: 'https://eugenepokalyuk.github.io/react-pet-store/',
    urlGitHub: 'https://github.com/eugenepokalyuk/react-pet-store',
    badges: [
      Tag.React,
      Tag.TypeScript,
      Tag.Redux,
      Tag.Vite,
      Tag.Tailwind,
      Tag.RadixUI,
      Tag.FramerMotion,
    ],
    title: 'Online pet store',
    description:
      'Онлайн-магазин для животных. Список товаров, корзина, форма оплаты, анимации, виджет карты',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-music-collection',
    badges: [Tag.React, Tag.TypeScript, Tag.Vite, Tag.Tailwind],
    title: 'Music collection',
    description: 'Список музыкальной коллекции пользователя Яндекс Музыки',
    created: 2024,
  },
  {
    url: 'https://vue-skateboarding.vercel.app/',
    urlGitHub: 'https://github.com/eugenepokalyuk/vue-skateboarding',
    badges: [Tag.Vue3, Tag.VueRouter, Tag.Vite, Tag.PostCSS, Tag.Tailwind],
    title: 'Skateboarding',
    description:
      'SkateHut был основан в 2007 году Марком Йохансен-Бергом после семейной поездки во Флориду. Его сын увидел Heelys в парке, и семья решила привезти их в Великобританию, где их не было в продаже. Так начался бизнес по продаже Heelys и скейтбордов',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-freetogame',
    badges: [
      Tag.React,
      Tag.TypeScript,
      Tag.Redux,
      Tag.Vite,
      Tag.Jest,
      Tag.CSSModules,
      Tag.CSSInJS,
      Tag.NodeJS,
    ],
    title: 'Free to game',
    description:
      'FreeToGame предоставляет доступ к лучшим бесплатным многопользовательским и MMO-играм, а также вознаграждает игроков бесплатным премиум-лутом и эксклюзивными бонусами',
    created: 2023,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/next-generate-qr',
    badges: [Tag.React, Tag.TypeScript, Tag.Next, Tag.ShadCNUI],
    title: 'Beauty QR Code Generation',
    description:
      'Веб-приложение на Next.js для генерации QR-кодов с настраиваемыми фонами. Интеграция с внешними API для создания QR-кодов и динамических изображений по запросу пользователя',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-skilla',
    badges: [Tag.React, Tag.TypeScript, Tag.Redux, Tag.SCSS, Tag.DateFNS],
    title: 'Call Management System',
    description:
      'Система управления звонками на React и TypeScript. Позволяет просматривать, фильтровать и взаимодействовать с записями звонков',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-mindbox',
    badges: [Tag.React, Tag.TypeScript, Tag.Jest, Tag.Tailwind],
    title: 'todos',
    description:
      'Список ToDo, где пользователь может управлять своими задачами. Приложение построено с использованием React, TypeScript, Tailwind CSS и localStorage для постоянного хранения данных',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-crafttech',
    badges: [Tag.React, Tag.TypeScript, Tag.SASS, Tag.Konva],
    title: 'Web Paint',
    description:
      'Это приложение, предоставляет собой бесконечный холст, на котором пользователь может добавлять фигуры и манипулировать ими. Также есть возможность отмены действий в обе стороны и изменение заднего фона',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-madsoft',
    badges: [Tag.React, Tag.TypeScript, Tag.Redux, Tag.Formik, Tag.Tailwind],
    title: 'Информационная система для проверки знаний учащихся школы',
    description:
      'В школе проводятся промежуточные аттестации учащихся в формате теста',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-airnet',
    badges: [Tag.React, Tag.TypeScript],
    title: 'AirNet To-Do list',
    description:
      'To-Do лист в виде календаря, где каждый день представлен списком задач. При нажатии на день открывается модальное окно со списком задач, в котором можно создавать новые задачи, удалять их и отмечать выполненными',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-pryaniky',
    badges: [
      Tag.React,
      Tag.TypeScript,
      Tag.ReactRouterV6,
      Tag.Redux,
      Tag.ReduxSaga,
      Tag.Formik,
      Tag.MaterialUI,
    ],
    title: 'Pryaniky SPA',
    description:
      'Безопасное одностраничное веб-приложение для выполнения операций CRUD (создание, чтение, обновление, удаление) с данными, хранящимися на сервере',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-personik',
    badges: [Tag.React, Tag.TypeScript, Tag.ReactRouterV6, Tag.Tailwind],
    title: 'The game of cities',
    description:
      'Веб-приложение — игра в города на время. Цель — назвать как можно больше реальных городов. Включает проверку городов с помощью ИИ, анимацию прогресса и отображение результатов',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-mtg',
    badges: [Tag.React, Tag.TypeScript, Tag.Redux, Tag.Vite],
    title: 'SPA Application with Header and Reviews for MTG',
    description:
      'Одностраничное приложение на React (классовые компоненты) с Redux и TypeScript. Содержит шапку с изображением, выбор языка, живые часы и основной раздел со списком отзывов с пагинацией',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-iway',
    badges: [
      Tag.React,
      Tag.TypeScript,
      Tag.ReactRouterV6,
      Tag.Redux,
      Tag.Vite,
      Tag.AntDesign,
      Tag.SCSS,
    ],
    title: 'Trips Management System',
    description:
      'Веб-приложение на React для управления поездками. Включает список поездок, подробные карточки, поиск, фильтрацию и пагинацию',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/next-aceplace',
    badges: [
      Tag.React,
      Tag.TypeScript,
      Tag.Next,
      Tag.SSR,
      Tag.DaDataAPI,
      Tag.SCSS,
    ],
    title: 'Organization Info Finder',
    description:
      'Приложение на Next.js для поиска организаций по ИНН с отображением подробной информации. Данные берутся из DaData API',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/static-helper-designcareer',
    badges: [Tag.HTML, Tag.CSS, Tag.JavaScript],
    title: 'Helper: как максимально быстро прокачать карьеру дизайнера',
    description:
      'Как максимально быстро прокачать карьеру дизайнера. Интенсив создан на основе исследования карьер ведущих дизайнеров. Топ 5 фишек для буста дизайн карьеры',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/static-helper-garantiya',
    badges: [Tag.HTML, Tag.CSS, Tag.JavaScript],
    title: 'Helper: теперь с гарантией трудоустройства',
    description:
      'Рассказываем как мы сделали по-настоящему прозрачную гарантию трудоустройства для дизайнеров',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/static-helper-main-page',
    badges: [Tag.HTML, Tag.CSS, Tag.JavaScript],
    title: 'Helper - Платформа прокачки карьеры дизайнеров',
    description:
      'Прокачиваем карьеру продуктовых, веб, UX/UI и графических дизайнеров. За 3-4 месяца ты усилишь скиллы и упакуешь портфолио, так, чтобы за тебя «дрались» HR-ы',
    created: 2024,
  },
  {
    urlGitHub:
      'https://github.com/eugenepokalyuk/react-helper-personal-account',
    badges: [Tag.React, Tag.TypeScript, Tag.Redux, Tag.Vite, Tag.Tailwind],
    title: "Helper. Designer's profile",
    description:
      'Минимальная сборка React с TypeScript и Vite, поддержкой HMR и ESLint. Подходит для быстрой разработки профиля дизайнера с интеграцией Redux и Tailwind CSS',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/helper-become-designer',
    badges: [Tag.React, Tag.TypeScript, Tag.Redux, Tag.Vite, Tag.Tailwind],
    title: 'Helper. Become designer',
    description:
      'Минимальная сборка React-приложения с HMR и ESLint. Поддержка плагинов для быстрого обновления и рекомендации по расширению конфигурации для продакшена',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/next-inwood',
    badges: [Tag.React, Tag.TypeScript, Tag.Next, Tag.Tailwind],
    title: 'Inwood',
    description:
      'Стильный сайт с адаптивным дизайном и современной UI/UX для эксклюзивной коллекции мебели. Включает карусель товаров, подробные карточки, спецпредложения и футер с соцсетями',
    created: 2024,
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-real-estate',
    badges: [Tag.React, Tag.TypeScript, Tag.CSSModules],
    title: 'Real Estate',
    description:
      'Лендинг компании, специализирующейся на экстерьере недвижимости. Современный и интуитивный интерфейс на React, акцент на портфолио реализованных проектов с качественными фото и описаниями',
    created: 2024,
  },
];
