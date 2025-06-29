import { FC } from 'react';

import { Button, Card, Color, Link, Size, Tags, Text } from '@components/ui';
import { formatDate } from '@utils/string';

import classes from './ArticleItem.module.scss';
import { Article } from '../../Articles.types.ts';

interface Props {
  article: Article;
}

export const ArticleItem: FC<Props> = ({ article }) => (
  <Card key={article.id} className={classes.article}>
    <Text tag={Tags.Heading} size={Size.LG}>
      {article.title}
    </Text>

    <Text tag={Tags.Paragraph} color={Color.Secondary}>
      {formatDate(article.date)}
    </Text>

    <Link to={`/articles/${article.slug}`} className={classes.link}>
      <Button outline tilt>
        {'Читать статью'}
      </Button>
    </Link>
  </Card>
);
