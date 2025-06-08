import { ContentType } from '@pages/Articles/Articles.types.ts';

export const reduxSagaArticle = {
  id: 'redux-saga-001',
  slug: 'redux-saga-intro',
  title:
    'Введение в Redux-Saga: простой и мощный способ управления сайд-эффектами',
  date: '2025-05-24',
  author: 'Евгений Покалюк',
  content: [
    {
      type: ContentType.Heading,
      content: 'Что такое Redux-Saga?',
    },
    {
      type: ContentType.Paragraph,
      content:
        'Redux-Saga — это библиотека для управления сайд-эффектами (асинхронными операциями и побочными действиями) в приложениях на Redux. Она использует генераторы ES6 для удобного и декларативного описания асинхронной логики',
    },
    {
      type: ContentType.Heading,
      content: 'Основные концепции Redux-Saga',
    },
    {
      type: ContentType.List,
      listTitle: 'Ключевые понятия:',
      listItems: [
        'Сага — генераторная функция, описывающая побочные эффекты',
        'Watcher Saga — слушает экшены и запускает worker-саги',
        'Worker Saga — выполняет асинхронную логику, например, запросы к API',
        'Эффекты — специальные объекты, описывающие действия для middleware',
      ],
    },
    {
      type: ContentType.Heading,
      content: 'Пример простой саги для загрузки пользователей',
    },
    {
      type: ContentType.Code,
      content: `import { call, put, takeEvery } from 'redux-saga/effects';

import {
  getUsersRequest,
  getUsersSuccess,
  getUsersFailure,
} from './usersSlice';

async function getUsersFromApi() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) throw new Error('Ошибка загрузки пользователей');

  return response.json();
}

function* getUsersSaga() {
  try {
    const users = yield call(getUsersFromApi);
    
    yield put(getUsersSuccess(users));
  } catch (error) {
    yield put(getUsersFailure(error.message));
  }
}

export function* usersSaga() {
  yield takeEvery(getUsersRequest.type, getUsersSaga);
}`,
    },
    {
      type: ContentType.Heading,
      content: 'Почему стоит использовать?',
    },
    {
      type: ContentType.List,
      listTitle: 'Преимущества:',
      listItems: [
        'Удобное и последовательное описание асинхронной логики',
        'Простота отмены, повторного запуска и параллельного выполнения задач',
        'Хорошая тестируемость благодаря декларативному стилю',
        'Легко интегрировать redux как middleware',
      ],
    },
    {
      type: ContentType.Paragraph,
      content:
        'Redux-Saga поможет сделать код более читаемым, и легко управляемым. Особенно полезна в больших приложениях с множеством сайд-эффектов',
    },
  ],
  externalLinks: [
    {
      label: 'Официальная документация Redux-Saga',
      url: 'https://redux-saga.js.org/',
    },
    {
      label: 'Пример использования Redux-Saga на GitHub',
      url: 'https://github.com/redux-saga/redux-saga',
    },
  ],
};
