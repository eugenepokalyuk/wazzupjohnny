import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from '@components/units';
import { Link, Size, Tags, Text } from '@components/ui';
import { articlesMock } from '@services/Api';

import classes from './ArticlePage.module.scss';
import { ContentBlock } from '../ContentBlock/ContentBlock';
import { ReadingProgressBar } from '../ReadingProgressBar/ReadingProgressBar';
import { formatDate } from '@/utils';

export const ArticlePage: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articlesMock.find((a) => a.slug === slug);

  if (!article) {
    return (
      <Layout>
        <Text tag={Tags.Heading} size={Size.XL}>
          {'Статья не найдена'}
        </Text>
      </Layout>
    );
  }

  return (
    <Layout>
      <ReadingProgressBar />

      <div className={classes.article}>
        <Text
          tag={Tags.Heading}
          size={Size.XL}
          className={classes.article_title}
        >
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
                  // @ts-ignore
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.external_link}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
