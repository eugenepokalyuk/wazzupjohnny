import { FC } from 'react';

import { Layout } from '@components/units';
import { wishListMock } from '@services/Api';

import { Greetings } from './Greetings/Greetings';
import { WishListBox } from './WishListBox/WishListBox';

export const WishList: FC = () => {
  const sortedList = [...wishListMock].sort((a, b) => {
    return Number(a.gifted) - Number(b.gifted);
  });

  return (
    <Layout>
      <Greetings />

      <WishListBox list={sortedList} />
    </Layout>
  );
};
