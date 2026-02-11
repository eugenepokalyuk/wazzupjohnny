import { ContentType } from '@pages/Articles/Articles.types.ts';

import { Article } from './enums';

export const reduxObservableArticle = {
  id: 'redux-observable-001',
  slug: 'redux-observable-vs-redux-saga',
  title: 'Как работает Redux Observable с RxJS и почему он круче Redux Saga',
  author: Article.Author,
  date: '2025-05-24',
  content: [
    {
      type: ContentType.Heading,
      content: 'Введение',
    },
    {
      type: ContentType.Paragraph,
      content:
        'Если ты когда-нибудь работал с Redux Saga, то знаешь, что это мощный инструмент для управления асинхронными действиями. Но есть ещё Redux Observable — middleware, построенное на RxJS, которое может оказаться удобнее и мощнее, особенно когда дело доходит до сложных потоков событий и асинхронных операций',
    },
    {
      type: ContentType.Paragraph,
      content:
        'Я расскажу, как оно работает, почему мне лично нравится больше, и как эпики и операторы RxJS помогают писать лаконичный, расширяемый и легко дебажимый код',
    },

    {
      type: ContentType.Heading,
      content: 'Что такое Redux Observable и как он работает?',
    },
    {
      type: ContentType.Paragraph,
      content:
        'Redux Observable — это middleware для Redux, который позволяет обрабатывать асинхронные действия с помощью RxJS Observables. В отличие от Redux Saga, где асинхронная логика описывается через генераторы, здесь мы работаем с потоками событий и операторами RxJS',
    },
    {
      type: ContentType.Paragraph,
      content:
        'Epic (эпик) — функция, которая принимает поток экшенов (actions$) и возвращает поток новых экшенов. Внутри эпика мы используем мощные операторы RxJS для трансформации, фильтрации и комбинирования событий',
    },

    {
      type: ContentType.Heading,
      content: 'Почему Redux Observable может быть удобнее Redux Saga?',
    },
    {
      type: ContentType.List,
      listTitle: 'Мои наблюдения и личный опыт:',
      listItems: [
        'RxJS — декларативный и функциональный стиль, меньше шаблонного кода по сравнению с императивными сагами',
        'Потоки событий — естественный способ работать с асинхронностью, особенно с множеством параллельных и последовательных запросов',
        'Операторы RxJS дают гибкость: легко комбинировать, отменять, повторять запросы без лишних костылей',
        'Дебаг в Redux Observable проще, если привык к инструментам RxJS (например, RxJS DevTools)',
        'Расширять и переиспользовать эпики проще, так как они — обычные функции с потоками, а не генераторы с эффектами',
      ],
    },
    {
      type: ContentType.Paragraph,
      content:
        'С другой стороны, Redux Saga может быть проще для тех, кто предпочитает императивный стиль и знаком с генераторами. Но в больших и сложных проектах, где много асинхронных потоков, RxJS даёт ощутимые преимущества',
    },

    {
      type: ContentType.Heading,
      content: 'Как работают эпики (epics)?',
    },
    {
      type: ContentType.Paragraph,
      content:
        'Эпик — это функция: (action$, state$) => action$.pipe(...). Она принимает поток входящих экшенов и возвращает поток новых экшенов. Внутри мы используем операторы RxJS для обработки этих потоков',
    },
    {
      type: ContentType.Paragraph,
      content:
        'Для фильтрации экшенов лучше использовать оператор `ofType` из redux-observable — он более выразительный и читабельный, чем обычный `filter`',
    },
    {
      type: ContentType.Code,
      content: `import { ofType } from 'redux-observable';

action$.pipe(
  ofType(UsersActionTypes.GET_USER_REQUEST),
  // ...
);`,
    },
    {
      type: ContentType.Heading,
      content: 'Пример эпика с использованием ofType, from и экшен-креаторов',
    },
    {
      type: ContentType.Code,
      content: `import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';

// Предпочитаю хранить в actions.ts
const userActions = {
  getUserRequest: (userId): GetUserRequestAction => ({ type: UserActionTypes.GET_USER_REQUEST, payload: { userId } }),
  getUserSuccess: (user): GetUserSuccessAction => ({ type: UserActionTypes.GET_USER_SUCCESS, payload: user }),
  getUserFailure: (error): GetUserFailureAction => ({ type: UserActionTypes.GET_USER_FAILURE, payload: error }),
};

// Предпочитаю хранить в epics.ts
const getUserEpic = (action$) =>
  action$.pipe(
    ofType(UsersActionTypes.GET_USER_REQUEST),
    mergeMap(action =>
      from(getUser(action.payload.userId)).pipe(
        map(user => getUsersActions.getUserSuccess(user)),
        catchError(error => of(getUsersActions.getUserFailure(error.message)))
      )
    )
  );`,
    },

    {
      type: ContentType.Heading,
      content: 'Операторы RxJS: mergeMap, switchMap, concatMap и exhaustMap',
    },
    {
      type: ContentType.Paragraph,
      content:
        'Эти операторы помогают управлять вложенными потоками (например, запросами). Выбор оператора зависит от логики обработки параллельных или последовательных действий',
    },
    {
      type: ContentType.List,
      listTitle: 'Краткое описание и примеры использования:',
      listItems: [
        'mergeMap — запускает все внутренние потоки параллельно и объединяет их результаты. Хорошо подходит, когда нужно обрабатывать все запросы независимо и одновременно',
        'switchMap — отменяет предыдущий внутренний поток при новом событии. Отлично подходит для поиска или автодополнения, где важен только последний запрос',
        'concatMap — запускает внутренние потоки последовательно, ожидая завершения предыдущего. Используется, когда порядок важен и запросы не должны накладываться',
        'exhaustMap — игнорирует новые события, если предыдущий поток ещё не завершён. Подходит для предотвращения повторных запросов, пока предыдущий в работе',
      ],
    },
    {
      type: ContentType.Code,
      content: `// mergeMap — параллельные запросы
const getUsersEpic = (action$) =>
  action$.pipe(
    ofType(UsersActionTypes.GET_USERS_REQUEST),
    mergeMap(() => {
      // Хорошим тоном считаю вынести запрос отдельно
      const req = from(getUsersApi());
      
      return req.pipe(
        map(users => getUsersActions.success(users)),
        catchError(error => of(getUsersActions.failure(error.message)))
      )
    })
  );

// switchMap — отмена предыдущего запроса, подходит для поиска
const searchEpic = (action$) =>
  action$.pipe(
    ofType(SearchActionTypes.SEARCH_QUERY_CHANGED),
    switchMap(action => {
      const req = from(searchApi(action.payload.query));
      
      return req.pipe(
        map(results => searchActions.success(results)),
        catchError(error => of(searchActions.failure(error.message)))
      )
    })
  );

// concatMap — последовательное выполнение запросов
const saveOrderEpic = (action$) =>
  action$.pipe(
    ofType(SaveActionTypes.SAVE_ORDER_REQUEST),
    concatMap(action => {
      const req = from(saveOrderApi(action.payload));
      
      return req.pipe(
        map(response => saveOrderActions.success(response)),
        catchError(error => of(saveOrderActions.failure(error.message)))
      )
    })
  );
  
// exhaustMap — игнорирует новые запросы, пока предыдущий не завершён
const loginEpic = (action$) =>
  action$.pipe(
    ofType(LoginActionTypes.LOGIN_REQUEST),
    exhaustMap(action => {
      const req = from(loginApi(action.payload)); 
    
      return req.pipe(
        map(response => loginActions.success(response)),
        catchError(error => of(loginActions.failure(error.message)))
      )
    })
  );`,
    },

    {
      type: ContentType.Heading,
      content: 'Почему так удобнее и правильнее?',
    },
    {
      type: ContentType.List,
      listTitle:
        'Преимущества подхода с асинхронными функциями и экшен-креаторами:',
      listItems: [
        'Код становится чище и легче читается, так как логика запросов вынесена и не смешивается с потоком событий',
        'Экшен-креаторы обеспечивают единую структуру экшенов с понятным payload, что упрощает поддержку и тестирование',
        'Использование `from` позволяет легко конвертировать промисы в Observable, сохраняя преимущества RxJS',
        'Оператор `ofType` улучшает семантику и уменьшает шаблонный код',
        'Такой подход хорошо типизируется и масштабируется в больших проектах',
      ],
    },

    {
      type: ContentType.Heading,
      content: 'Личный опыт и советы',
    },
    {
      type: ContentType.Paragraph,
      content:
        'Когда я начал использовать Redux Observable с таким подходом, сразу почувствовал, что код стал более модульным и удобным для поддержки. Особенно понравилось, что можно легко комбинировать разные потоки и управлять сложной асинхронной логикой без лишних флагов и состояний',
    },
    {
      type: ContentType.Paragraph,
      content:
        'Если ты новичок в RxJS, советую начать с базовых операторов — map, filter, switchMap — и постепенно переходить к более сложным. Это инвестиция, которая окупится при работе с большими проектами',
    },
  ],
  externalLinks: [
    {
      label: 'Официальная документация Redux Observable',
      url: 'https://redux-observable.js.org/',
    },
    {
      label: 'RxJS Documentation',
      url: 'https://rxjs.dev/guide/overview',
    },
    {
      label: 'Статья на Хабре про Redux Observable и RxJS',
      url: 'https://habr.com/ru/companies/alfa/articles/460155/',
    },
  ],
};
