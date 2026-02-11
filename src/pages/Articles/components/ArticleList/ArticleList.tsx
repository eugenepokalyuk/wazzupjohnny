import { FC } from 'react';

import classes from './ArticleList.module.scss';
import { Article } from '../../Articles.types';
import { ArticleItem } from '../ArticleItem/ArticleItem';

interface Props {
  list: Article[];
}

export const ArticleList: FC<Props> = ({ list }) => {
  const sortedList = [...list].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className={classes.articles}>
      {sortedList.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};
