import { FC } from 'react';

import classes from './Footer.module.scss';

export const Footer: FC = () => (
  <footer className={classes.box}>
    <p>{'© 2024 Eugene Pokalyuk. All rights reserved.'}</p>
  </footer>
);
