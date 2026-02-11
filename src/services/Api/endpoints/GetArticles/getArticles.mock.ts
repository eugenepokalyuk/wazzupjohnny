import { Article } from '@pages/Articles/Articles.types.ts';

import { reduxReselectArticle } from './articles/reduxReselectArticle';
import { reduxObservableArticle } from './articles/reduxObservableArticle';
import { matterArticle } from './articles/matterArticle';
import { reduxSagaArticle } from './articles/reduxSagaArticle';
import { reduxStoreInterfaceArticle } from './articles/reduxStoreInterfaceArticle';

export const articlesMock: Article[] = [
  matterArticle,
  reduxObservableArticle,
  reduxReselectArticle,
  reduxSagaArticle,
  reduxStoreInterfaceArticle,
];
