import { FC, useState } from 'react';
import clsx from 'clsx';

import { Button, RefreshIcon } from '@components/ui';

import classes from './MainBox.module.scss';
import { Interview } from '../Interview/Interview';
import { Contact } from '../Contact/Contact';
import { Board } from '../Board/Board';

export const MainBox: FC = () => {
  const [boardHidden, setBoardHidden] = useState<boolean>(false);

  const toggleBoard = () => {
    setBoardHidden((prev) => !prev);
  };

  return (
    <div className={classes.box}>
      <div className={classes.left_side}>
        <Contact />

        <Interview />
      </div>

      <div
        className={clsx(classes.right_side, {
          [classes.hidden]: boardHidden,
        })}
      >
        <Button className={classes.toggle_button} onClick={toggleBoard}>
          <RefreshIcon
            className={boardHidden ? classes.hidden : classes.show}
          />
        </Button>

        <div className={classes.hidden}>
          <Board />
        </div>
      </div>
    </div>
  );
};
