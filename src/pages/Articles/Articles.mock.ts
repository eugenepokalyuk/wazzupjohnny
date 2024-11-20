import { Article, ContentType } from '@pages/Articles/Articles.types.ts';

export const ArticlesMock: Article[] = [
  {
    id: '1',
    slug: 'redux-reselect',
    title:
      'Управление состоянием в React с помощью Redux Toolkit и Reselect: Оптимизация производительности и упрощение селекторов',
    date: '2024-11-21',
    author: 'Евгений Покалюк',
    content: [
      {
        type: ContentType.Paragraph,
        content:
          'В современном веб-разработке управление состоянием играет ключевую роль. При разработке сложных приложений на React важно не только эффективно управлять состоянием, но и обеспечивать производительность. Redux Toolkit и Reselect помогают разработчикам справляться с этими задачами, предлагая мощные инструменты для упрощения работы с состоянием и оптимизации',
      },
      {
        type: ContentType.Paragraph,
        content:
          'В этом блоге мы подробно рассмотрим, как использовать Redux Toolkit и Reselect для управления состоянием в React-приложениях. Мы также разберем, как их использование позволяет упростить селекторы и улучшить производительность',
      },
      { type: ContentType.Heading, content: '1. Что такое Redux Toolkit?' },
      { type: ContentType.Subheading, content: 'Почему Redux Toolkit?' },
      {
        type: ContentType.Paragraph,
        content:
          'Redux Toolkit (RTK) — это официальная надстройка над Redux, которая упрощает процесс настройки и использования Redux. Без RTK, разработка с Redux может быть громоздкой из-за большого количества шаблонного кода, сложной структуры и ручной настройки middleware',
      },
      {
        type: ContentType.List,
        content: '',
        listTitle: 'Основные преимущества Redux Toolkit:',
        listItems: [
          'Упрощенная настройка хранилища (store)',
          'Встроенные средства для работы с асинхронными действиями (thunks)',
          'Инструменты для работы с неизменяемыми данными',
          'Уменьшение шаблонного кода благодаря функции createSlice',
        ],
      },
      { type: ContentType.Subheading, content: 'Установка Redux Toolkit' },
      {
        type: ContentType.Paragraph,
        content: 'Для начала работы установим Redux Toolkit и React-Redux:',
      },
      {
        type: ContentType.Code,
        content: `npm install @reduxjs/toolkit react-redux`,
      },
      {
        type: ContentType.Heading,
        content: '2. Основные концепции Redux Toolkit',
      },
      { type: ContentType.Subheading, content: '2.1 configureStore' },
      {
        type: ContentType.Paragraph,
        content: 'Для начала работы установим Redux Toolkit и React-Redux:',
      },
      {
        type: ContentType.Paragraph,
        content:
          'Функция configureStore упрощает настройку хранилища. Она автоматически добавляет middleware для работы с асинхронными запросами и интеграции DevTools',
      },
      {
        type: ContentType.Paragraph,
        content: 'Пример настройки хранилища:',
      },
      {
        type: ContentType.Code,
        content: `import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});`,
      },
      { type: ContentType.Subheading, content: '2.2 createSlice' },
      {
        type: ContentType.Paragraph,
        content:
          'Функция createSlice объединяет описание действий (actions) и редьюсеров (reducers). Это сокращает количество шаблонного кода',
      },
      {
        type: ContentType.Code,
        content: `import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  
  initialState: { value: 0 },
  
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    
    decrement: (state) => {
      state.value -= 1;
    },
    
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;`,
      },
      { type: ContentType.Heading, content: '3. Что такое Reselect?' },
      {
        type: ContentType.Paragraph,
        content:
          'Reselect — это библиотека для создания мемоизированных селекторов. Селекторы — это функции, которые извлекают данные из состояния Redux. Мемоизация предотвращает повторные вычисления, если входные данные не изменились, что повышает производительность приложения.',
      },
      {
        type: ContentType.Paragraph,
        content: 'Установка Reselect:',
      },
      {
        type: ContentType.Code,
        content: `npm install reselect`,
      },
      {
        type: ContentType.List,
        content: '',
        listTitle: 'Преимущества Reselect:',
        listItems: [
          'Мемоизация: Экономит ресурсы, пересчитывая данные только при изменении входных данных',
          'Композиция селекторов: Позволяет комбинировать селекторы для сложных вычислений',
          'Улучшение производительности: Особенно полезно при работе с большими наборами данных',
        ],
      },
      {
        type: ContentType.Heading,
        content: '4. Использование Redux Toolkit и Reselect',
      },
      {
        type: ContentType.Paragraph,
        content:
          'Давайте рассмотрим, как сочетать Redux Toolkit и Reselect для управления состоянием и оптимизации производительности',
      },
      {
        type: ContentType.Subheading,
        content: '4.1 Настройка хранилища',
      },
      {
        type: ContentType.Paragraph,
        content:
          'Создадим простое приложение для управления списком задач. Начнем с настройки хранилища:',
      },
      {
        type: ContentType.Code,
        content: `import { configureStore } from '@reduxjs/toolkit';

import tasksReducer from './features/tasks/tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});`,
      },
      {
        type: ContentType.Subheading,
        content: '4.2 Создание slice для задач',
      },
      {
        type: ContentType.Code,
        content: `import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  
  initialState: [
    { id: 1, title: 'Learn Redux', completed: false },
    { id: 2, title: 'Build an app', completed: true },
  ],
  
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
  
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
  
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, toggleTask } = tasksSlice.actions;`,
      },
      {
        type: ContentType.Subheading,
        content: '4.3 Использование Reselect для селекторов',
      },
      {
        type: ContentType.Paragraph,
        content: 'Создадим мемоизированные селекторы для фильтрации задач:',
      },
      {
        type: ContentType.Code,
        content: `import { createSelector } from 'reselect';

const selectTasks = (state) => state.tasks;

export const selectCompletedTasks = createSelector(
  [selectTasks], (tasks) => tasks.filter(
    (task) => task.completed)
  );

export const selectIncompleteTasks = createSelector(
  [selectTasks], (tasks) => tasks.filter(
    (task) => !task.completed)
  );`,
      },
      {
        type: ContentType.Heading,
        content: '5. Интеграция в React-компоненты',
      },
      {
        type: ContentType.Subheading,
        content: '5.1 Подключение к хранилищу',
      },
      {
        type: ContentType.Paragraph,
        content:
          'Используем useSelector для доступа к данным и useDispatch для вызова действий:',
      },
      {
        type: ContentType.Code,
        content: `
import { FC } from 'react';

import { useAppSelector, useAppDispatch } from '@services/Store';

import { toggleTask, addTask } from './features/tasks/tasksSlice';
import { selectCompletedTasks, selectIncompleteTasks } from './features/tasks/selectors';

export const TaskList: FC = () => {
  const dispatch = useAppDispatch();
  const completedTasks = useAppSelector(selectCompletedTasks);
  const incompleteTasks = useAppSelector(selectIncompleteTasks);

  return (
    <div>
      <h2>{'Completed Tasks'}</h2>
      
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id} onClick={() => dispatch(toggleTask(task.id))}>
            {task.title}
          </li>
        ))}
      </ul>

      <h2>{'Incomplete Tasks'}</h2>
      
      <ul>
        {incompleteTasks.map((task) => (
          <li key={task.id} onClick={() => dispatch(toggleTask(task.id))}>
            {task.title}
          </li>
        ))}
      </ul>

      <button
        onClick={() =>
          dispatch(addTask({ id: Date.now(), title: 'New Task', completed: false }))
        }
      >
        {'Add Task'}
      </button>
    </div>
  );
};`,
      },
      {
        type: ContentType.Heading,
        content: '6. Оптимизация производительности',
      },
      {
        type: ContentType.Subheading,
        content: '6.1 Зачем мемоизация?',
      },
      {
        type: ContentType.Paragraph,
        content:
          'Без мемоизации каждый рендер компонента вызывает пересчет всех селекторов, даже если данные не изменились. Reselect решает эту проблему, пересчитывая значения только при изменении входных данных',
      },
      {
        type: ContentType.Subheading,
        content: '6.2 Сложные селекторы',
      },
      {
        type: ContentType.Paragraph,
        content:
          'Reselect поддерживает создание сложных селекторов из простых:',
      },
      {
        type: ContentType.Code,
        content: `export const selectTasksByKeyword = (keyword) =>
  createSelector([selectTasks], (tasks) =>
    tasks.filter((task) => task.title.includes(keyword))
  );`,
      },
      {
        type: ContentType.Heading,
        content: 'Заключение',
      },
      {
        type: ContentType.Paragraph,
        content:
          'Использование Redux Toolkit и Reselect значительно упрощает работу с состоянием и улучшает производительность React-приложений. Redux Toolkit уменьшает объем шаблонного кода, а Reselect обеспечивает оптимизацию благодаря мемоизации. В сочетании эти инструменты предоставляют мощный и удобный способ управления состоянием',
      },
      {
        type: ContentType.List,
        content: '',
        listTitle: 'Ключевые моменты:',
        listItems: [
          'Redux Toolkit упрощает настройку и использование Redux',
          'Reselect повышает производительность через мемоизацию селекторов',
          'Вместе они позволяют строить производительные и масштабируемые приложения',
        ],
      },
    ],
  },
];
