import { FC } from 'react';

import { Layout } from '@components/units';
import { Button, Card, Color, Link, Size, Tags, Text } from '@components/ui';
import { articlesMock } from '@services/Api';
import { formatDate } from '@utils/string';

import classes from './Articles.module.scss';

export const Articles: FC = () => (
  <Layout>
    <div className={classes.title_box}>
      <Text tag={Tags.Heading} size={Size.XL}>
        {'Статьи'}
      </Text>

      <Text tag={Tags.Paragraph} size={Size.LG}>
        {
          'Здесь вы найдёте статьи, которые я написал. Это материалы о разработке, фреймворках, и многое другое'
        }
      </Text>
    </div>

    <div className={classes.articles}>
      {articlesMock.map((article) => (
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
      ))}
    </div>
  </Layout>
);
