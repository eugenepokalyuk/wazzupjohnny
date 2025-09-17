import { FC } from 'react';

import { Layout } from '@components/units';
import { wishListMock } from '@services/Api';

import { Greetings } from './Greetings/Greetings';
import { WishListBox } from './WishListBox/WishListBox';

export const WishList: FC = () => (
  <Layout>
    <Greetings />

    <WishListBox list={wishListMock} />
  </Layout>
);
