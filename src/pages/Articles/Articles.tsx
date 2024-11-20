import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@components/units';
import { Card, Size, Tags, Text } from '@components/ui';

import { ArticlesMock } from './Articles.mock';
import classes from './Articles.module.scss';

export const Articles: FC = () => (
  <Layout>
    <div className={classes.title_box}>
      <Text tag={Tags.Heading} size={Size.XL}>
        {'Статьи'}
      </Text>

      <Text tag={Tags.Paragraph} size={Size.LG}>
        {
          'Здесь вы найдёте статьи, которые я написал. Это материалы о разработке, фреймворках, и многое другое.'
        }
      </Text>
    </div>

    <div className={classes.articles}>
      {ArticlesMock.map((article) => (
        <Card key={article.id} className={classes.article}>
          <Text tag={Tags.Heading} size={Size.LG}>
            {article.title}
          </Text>

          <Link to={`/articles/${article.slug}`} className={classes.link}>
            {'Читать статью'}
          </Link>
        </Card>
      ))}
    </div>
  </Layout>
);
