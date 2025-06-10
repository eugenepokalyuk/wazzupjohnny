import { FC } from 'react';

import classes from './MainBox.module.scss';
import { Interview } from '../Interview/Interview';
import { Contact } from '../Contact/Contact';
import { Board } from '../Board/Board';

export const MainBox: FC = () => (
  <div className={classes.box}>
    <Contact />

    <Interview />

    <div className={classes.wrapper}>
      <Board />
    </div>
  </div>
);
