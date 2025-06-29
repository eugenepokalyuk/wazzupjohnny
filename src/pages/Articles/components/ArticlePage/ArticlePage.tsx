import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from '@components/units';
import { Size, Tags, Text } from '@components/ui';
import { articlesMock } from '@services/Api';

import { ReadingProgressBar } from '../ReadingProgressBar/ReadingProgressBar';
import { ArticlePageLayout } from './ArticlePageLayout/ArticlePageLayout';

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

      <ArticlePageLayout article={article} />
    </Layout>
  );
};
