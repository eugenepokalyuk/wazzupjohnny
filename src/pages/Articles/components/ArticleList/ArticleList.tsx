import { FC } from 'react';

import classes from './ArticleList.module.scss';
import { Article } from '../../Articles.types';
import { ArticleItem } from '../ArticleItem/ArticleItem';

interface Props {
  list: Article[];
}

export const ArticleList: FC<Props> = ({ list }) => (
  <div className={classes.articles}>
    {list.map((article, index) => (
      <ArticleItem key={index} article={article} />
    ))}
  </div>
);
