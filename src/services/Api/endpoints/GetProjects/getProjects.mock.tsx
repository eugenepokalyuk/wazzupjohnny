import { Urls } from '@services/Route/urls';

export interface ProjectItemProps {
  url?:string;
  urlGitHub:string;
  img?:string;
  badges:string[];
  title:string;
  description:string;
  hint?:string;
}

export const projectArray:ProjectItemProps[] = [
  {
    url: 'https://astro-blog-gold-kappa.vercel.app/',
    urlGitHub: 'https://github.com/eugenepokalyuk/astro-blog',
    badges: ['Astro', 'TypeScript', 'PReact', 'Alpine.js', 'Tailwind'],
    title: 'Blog',
    description: 'Блог, построенный с помощью Astro — современного фреймворка для сайтов, поддерживающего серверные компоненты и Tailwind CSS для стилизации',
    hint: 'Современный блог на Astro и Tailwind CSS',
  },
  {
    url: 'https://next-ujjo-hot-sauce.vercel.app/',
    urlGitHub: 'https://github.com/eugenepokalyuk/next-ujjo-hot-sauce',
    badges: ['Next', 'React', 'TypeScript', 'Tailwind'],
    title: 'Ujjo Hot Sauce',
    description: 'Сайт на Next.js с Tailwind CSS для продажи уникального продукта — острого соуса для кофе. Включает адаптивные компоненты: шапку, бегущую строку, карточки товаров с нестандартными рамками',
    hint: 'У этого проекта есть сайт — обязательно посмотри!',
  },
  {
    url: 'https://eugenepokalyuk.github.io/react-burger',
    urlGitHub: 'https://github.com/eugenepokalyuk/react-burger',
    badges: ['React', 'TypeScript', 'Redux', 'jest', 'websocket', 'cypress'],
    title: 'Stellar Burger',
    description: 'Веб-приложение позволяет собирать и заказывать уникальные бургеры, перетаскивая ингредиенты. Есть просмотр информации об ингредиентах, отслеживание заказов в реальном времени и история заказов',
    hint: 'Конструктор бургеров с отслеживанием заказов',
  },
  {
    url: 'https://xn--d1acamsh7dwd.net/',
    urlGitHub: 'https://github.com/eugenepokalyuk/react-tg-web-app-dementia',
    badges: ['React', 'Redux', 'Telegram WebApp'],
    title: 'Фитнес для мозга',
    description: 'Разработка сайта и тестов для сайта деменция.нет',
    hint: 'Узнай больше о деменции',
  },
  {
    url: 'https://eugenepokalyuk.github.io/react-pet-store/',
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
    description: 'Онлайн-магазин для животных. Список товаров, корзина, форма оплаты, анимации, виджет карты',
    hint: 'Интернет-магазин с корзиной и оплатой',
  },
  {
    url: Urls.MusicPlaylist,
    urlGitHub: 'https://github.com/eugenepokalyuk/react-music-collection',
    badges: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    title: 'Music collection',
    description: 'Список музыкальной коллекции пользователя Яндекс Музыки',
    hint: 'Просмотр коллекции музыки Яндекс',
  },
  {
    url: 'https://vue-skateboarding.vercel.app/',
    urlGitHub: 'https://github.com/eugenepokalyuk/vue-skateboarding',
    badges: ['Vue 3', 'Vite', 'Tailwind', 'PostCSS', 'Vue Router'],
    title: 'Skateboarding',
    description: 'SkateHut был основан в 2007 году Марком Йохансен-Бергом после семейной поездки во Флориду. Его сын увидел Heelys в парке, и семья решила привезти их в Великобританию, где их не было в продаже. Так начался бизнес по продаже Heelys и скейтбордов',
    hint: 'История создания магазина скейтбордов и Heelys',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-skilla',
    badges: ['React', 'TypeScript', 'Redux', 'Date-fns', 'SCSS'],
    title: 'Call Management System',
    description:
      'Система управления звонками на React и TypeScript. Позволяет просматривать, фильтровать и взаимодействовать с записями звонков',
    hint: 'Интерфейс для работы с историей звонков и фильтрацией',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-mindbox',
    badges: ['React', 'TypeScript', 'Tailwind', 'Jest'],
    title: 'todos',
    description:
      'Список ToDo, где пользователь может управлять своими задачами. Приложение построено с использованием React, TypeScript, Tailwind CSS и localStorage для постоянного хранения данных',
    hint: 'Классическое приложение для управления задачами с сохранением',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-crafttech',
    badges: ['React', 'TypeScript', 'sass', 'konva'],
    title: 'Web Paint',
    description:
      'Это приложение, предоставляет собой бесконечный холст, на котором пользователь может добавлять фигуры и манипулировать ими. Также есть возможность отмены действий в обе стороны и изменение заднего фона',
    hint: 'Интерактивный графический редактор с отменой действий',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-madsoft',
    badges: ['React', 'TypeScript', 'Redux', 'Tailwind', 'Formik'],
    title: 'Информационная система для проверки знаний учащихся школы',
    description:
      'В школе проводятся промежуточные аттестации учащихся в формате теста',
    hint: 'Система тестирования знаний для образовательных учреждений',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-airnet',
    badges: ['React', 'TypeScript'],
    title: 'AirNet To-Do list',
    description:
      'To-Do лист в виде календаря, где каждый день представлен списком задач. При нажатии на день открывается модальное окно со списком задач, в котором можно создавать новые задачи, удалять их и отмечать выполненными',
    hint: 'Задачник с календарём и модальными окнами',
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
    description: 'Безопасное одностраничное веб-приложение для выполнения операций CRUD (создание, чтение, обновление, удаление) с данными, хранящимися на сервере',
    hint: 'SPA для работы с серверными данными',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-personik',
    badges: ['React', 'TypeScript', 'Tailwind', 'React Router v6'],
    title: 'The game of cities',
    description: 'Веб-приложение — игра в города на время. Цель — назвать как можно больше реальных городов. Включает проверку городов с помощью ИИ, анимацию прогресса и отображение результатов',
    hint: 'Игра в города с проверкой и анимацией',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-mtg',
    badges: ['React', 'TypeScript', 'Redux', 'Vite'],
    title: 'SPA Application with Header and Reviews for MTG',
    description:
      'Одностраничное приложение на React (классовые компоненты) с Redux и TypeScript. Содержит шапку с изображением, выбор языка, живые часы и основной раздел со списком отзывов с пагинацией',
    hint: 'SPA с отзывами, пагинацией и переключением языка',
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
    description: 'Веб-приложение на React для управления поездками. Включает список поездок, подробные карточки, поиск, фильтрацию и пагинацию',
    hint: 'Система для учёта и фильтрации поездок',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/next-aceplace',
    badges: ['Next', 'React', 'TypeScript', 'CSS/SCSS', 'DaData API', 'SSR'],
    title: 'Organization Info Finder',
    description: 'Приложение на Next.js для поиска организаций по ИНН с отображением подробной информации. Данные берутся из DaData API',
    hint: 'Поиск информации об организациях по ИНН',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/static-helper-designcareer',
    badges: ['HTML', 'CSS', 'JavaScript'],
    title: 'Helper: как максимально быстро прокачать карьеру дизайнера',
    description: 'Как максимально быстро прокачать карьеру дизайнера. Интенсив создан на основе исследования карьер ведущих дизайнеров. Топ 5 фишек для буста дизайн карьеры',
    hint: 'Гайд для быстрого карьерного роста дизайнеров',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/static-helper-garantiya',
    badges: ['HTML', 'CSS', 'JavaScript'],
    title: 'Helper: теперь с гарантией трудоустройства',
    description: 'Рассказываем как мы сделали по-настоящему прозрачную гарантию трудоустройства для дизайнеров',
    hint: 'Прозрачная гарантия трудоустройства для дизайнеров',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/static-helper-main-page',
    badges: ['HTML', 'CSS', 'JavaScript'],
    title: 'Helper - Платформа прокачки карьеры дизайнеров',
    description: 'Прокачиваем карьеру продуктовых, веб, UX/UI и графических дизайнеров. За 3-4 месяца ты усилишь скиллы и упакуешь портфолио, так, чтобы за тебя «дрались» HR-ы',
    hint: 'Платформа для развития и упаковки портфолио дизайнеров',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/next-generate-qr',
    badges: ['Next', 'React', 'TypeScript', 'ShadCN-ui'],
    title: 'Beauty QR Code Generation',
    description: 'Веб-приложение на Next.js для генерации QR-кодов с настраиваемыми фонами. Интеграция с внешними API для создания QR-кодов и динамических изображений по запросу пользователя',
    hint: 'Генератор QR-кодов с кастомными фонами',
  },
  {
    urlGitHub:
      'https://github.com/eugenepokalyuk/react-helper-personal-account',
    badges: ['React', 'Redux', 'TypeScript', 'Tailwind', 'Vite'],
    title: 'Helper. Designer\'s profile',
    description: 'Минимальная сборка React с TypeScript и Vite, поддержкой HMR и ESLint. Подходит для быстрой разработки профиля дизайнера с интеграцией Redux и Tailwind CSS',
    hint: 'Шаблон профиля дизайнера для быстрой разработки',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/helper-become-designer',
    badges: ['React', 'Redux', 'TypeScript', 'Tailwind', 'Vite'],
    title: 'Helper. Become designer',
    description: 'Минимальная сборка React-приложения с HMR и ESLint. Поддержка плагинов для быстрого обновления и рекомендации по расширению конфигурации для продакшена',
    hint: 'Шаблон для старта карьеры дизайнера',
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
    description: 'Позволяет управлять рабочими местами и вести финансовый учёт. Сотрудники клуба могут устанавливать время игры, видеть выручку, базу сотрудников и посетителей, а также управлять продажей товаров (напитки, еда)',
    hint: 'Админ-панель для компьютерного клуба',
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
    description: 'FreeToGame предоставляет доступ к лучшим бесплатным многопользовательским и MMO-играм, а также вознаграждает игроков бесплатным премиум-лутом и эксклюзивными бонусами',
    hint: 'Каталог бесплатных онлайн-игр с бонусами',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/next-inwood',
    badges: ['React', 'TypeScript', 'Next', 'Tailwind'],
    title: 'Inwood',
    description: 'Стильный сайт с адаптивным дизайном и современной UI/UX для эксклюзивной коллекции мебели. Включает карусель товаров, подробные карточки, спецпредложения и футер с соцсетями',
    hint: 'Сайт мебельного бренда с современным дизайном',
  },
  {
    urlGitHub: 'https://github.com/eugenepokalyuk/react-real-estate',
    badges: ['React', 'TypeScript', 'css-modules'],
    title: 'Real Estate',
    description: 'Лендинг компании, специализирующейся на экстерьере недвижимости. Современный и интуитивный интерфейс на React, акцент на портфолио реализованных проектов с качественными фото и описаниями',
    hint: 'Лендинг для компании по экстерьеру недвижимости',
  },
];
