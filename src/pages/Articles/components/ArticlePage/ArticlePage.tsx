import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from '@components/units';
import { Size, Tags, Text } from '@components/ui';

import classes from './ArticlePage.module.scss';
import { ArticlesMock } from '../../Articles.mock.ts';
import { ContentBlock } from '../ContentBlock/ContentBlock';

export const ArticlePage: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ArticlesMock.find((a) => a.slug === slug);

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
      <div className={classes.article}>
        <Text tag={Tags.Heading} size={Size.XL}>
          {article.title}
        </Text>

        <Text tag={Tags.Paragraph} size={Size.SM}>
          {`Автор: ${article.author} • ${article.date}`}
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
            <ul>
              {article.externalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
};
