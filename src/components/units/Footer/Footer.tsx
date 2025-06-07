import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Color, Text } from '@components/ui';
import { Urls } from '@services/Route';

import classes from './Footer.module.scss';

export const Footer:FC = () => (
  <footer className={classes.footer}>
    <div className={classes.box}>
      <div className={classes.logo}>
        <Link to={Urls.Home}>{'wazzupjohnny'}</Link>
      </div>

      <Text color={Color.Secondary}>{'© 2023-2025 Мой Плейлист. Все права защищены.'}</Text>
    </div>
  </footer>
);
