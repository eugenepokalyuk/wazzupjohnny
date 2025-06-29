import { FC } from 'react';

import { Layout } from '@components/units';
import { articlesMock } from '@services/Api';

import { TitleBox } from './components/TitleBox/TitleBox';
import { ArticleList } from './components/ArticleList/ArticleList';

export const Articles: FC = () => (
  <Layout>
    <TitleBox />

    <ArticleList list={articlesMock} />
  </Layout>
);
