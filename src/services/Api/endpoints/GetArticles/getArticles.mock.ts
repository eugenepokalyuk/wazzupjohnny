import { Article } from '@pages/Articles/Articles.types.ts';

import { reduxReselectArticle } from './articles/reduxReselectArticle';
import { reduxObservableArticle } from './articles/reduxObservableArticle';

export const articlesMock: Article[] = [
  reduxReselectArticle,
  reduxObservableArticle,
];
