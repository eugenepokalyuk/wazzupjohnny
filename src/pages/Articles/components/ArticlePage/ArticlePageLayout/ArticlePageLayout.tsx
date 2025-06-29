import { FC } from 'react';

import { Link, Size, Tags, Text } from '@components/ui';
import { formatDate } from '@utils/string';

import classes from './ArticlePageLayout.module.scss';
import { ContentBlock } from '../../ContentBlock/ContentBlock';
import { Article } from '../../../Articles.types.ts';

interface Props {
  article: Article;
}

export const ArticlePageLayout: FC<Props> = ({ article }) => (
  <div className={classes.article}>
    <Text tag={Tags.Heading} size={Size.XL} className={classes.article_title}>
      {article.title}
    </Text>

    <Text tag={Tags.Paragraph} size={Size.SM}>
      {`Автор: ${article.author} • ${formatDate(article.date)}`}
    </Text>

    <div className={classes.content}>
      {article.content.map((block, index) => (
        <ContentBlock key={index} block={block} />
      ))}
    </div>

    {article.externalLinks && (
      <div className={classes.external_links}>
        <Text tag={Tags.Heading} size={Size.MD}>
          {'Ссылки на другие ресурсы:'}
        </Text>

        <div className={classes.links_grid}>
          {article.externalLinks.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className={classes.external_link}
              newTab
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
);
