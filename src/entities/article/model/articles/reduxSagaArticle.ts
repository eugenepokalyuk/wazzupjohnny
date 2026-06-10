import { ContentType } from '@entities/article/model/types';

import { Article } from './enums';

export const reduxSagaArticle = {
  id: 'redux-saga-001',
  slug: 'redux-saga-intro',
  title:
    'Введение в Redux-Saga: простой и мощный способ управления сайд-эффектами',
  date: '2025-03-20',
  author: Article.Author,
  content: [
    {
      type: ContentType.Heading,
      content: 'Что такое Redux-Saga?',
    },
    {
      type: ContentType.Paragraph,
      content: `Привет! Redux-Saga — это библиотека для управления сайд-эффектами (асинхронными операциями) в Redux. Можно немного ззабыть про колбэки и промисы!`,
    },
    {
      type: ContentType.Paragraph,
      content: `Помните те времена, когда в редьюсере писали?`,
    },
    {
      type: ContentType.Code,
      content: `if (action.type === API_CALL_SUCCESS) { ... }`,
    },
    {
      type: ContentType.Paragraph,
      content: `Или когда thunk возвращал промисы, а вы пытались их поймать? Saga решает всю эту головную боль`,
    },
    {
      type: ContentType.Heading,
      content: 'Основные концепции саги',
    },
    {
      type: ContentType.List,
      listTitle: 'Ключевые понятия:',
      listItems: [
        'Saga - генераторная функция, описывающая побочные эффекты',
        'Watcher Saga - слушает экшены и запускает worker-саги',
        'Worker Saga - выполняет асинхронную логику (Api, WebSocket)',
        'Эффекты - специальные объекты для middleware (call, put, take)',
      ],
    },
    {
      type: ContentType.Paragraph,
      content: `Почему генераторы, спросите вы? Потому что Saga описывает логику, а не выполняет. Middleware сам решает, когда запустить \`yield call(api)\` или \`yield put(action)\`. Это как писать сценарий для асинк операций`,
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
      type: ContentType.Paragraph,
      content: `Видите? Код читается сверху вниз, как обычная функция. Но под капотом мидлвера саги: ловит \`getUsersRequest.type\`, запускает Api, диспатчит success/failure. Никаких then/catch в компонентах 🎉`,
    },
    {
      type: ContentType.Heading,
      content: 'Почему стоит использовать?',
    },
    {
      type: ContentType.List,
      listTitle: 'Преимущества:',
      listItems: [
        'Последовательное описание асинхронной логики (как async/await)',
        'Простая отмена задач (`cancel`), параллельность (`fork`), повтор (`retry`)',
        'Тестируемость: проверяем yield эффекты, не мокая API',
        'Интеграция как middleware — не ломает Redux принципы',
      ],
    },
    {
      type: ContentType.Paragraph,
      content: `Вот пример из реального проекта: нужно загрузить профиль пользователя + его аватар + права параллельно. С сагой это выглядит так:`,
    },
    {
      type: ContentType.Code,
      content: `function* loadUserProfile() {
  const [user, avatar, permissions] = yield all([
    call(api.getUser),
    call(api.getAvatar),
    call(api.getPermissions)
  ]);
  
  yield put(profileLoaded({ user, avatar, permissions }));
}`,
    },
    {
      type: ContentType.Paragraph,
      content: `Вместо 3 секунд - 1.2с. А \`cancel\` при unmount компонента останавливает все 3 запроса одной командой`,
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
