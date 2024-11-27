import { FC, useState } from 'react';

import { ArrowIcon, Button } from '@components/ui';

import classes from './MainBox.module.scss';
import { Interview } from '../Interview/Interview';
import { Contact } from '../Contact/Contact';
import { Board } from '../Board/Board';

export const MainBox: FC = () => {
  const [isVisible, setVisible] = useState<boolean>(true);

  const handleToggle = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className={classes.box}>
      <Contact />

      <Interview />

      <div className={`${classes.wrapper} ${!isVisible ? classes.hidden : ''}`}>
        <Board />

        <Button
          onClick={handleToggle}
          className={classes.toggle_button}
          outline
        >
          <ArrowIcon
            className={`${classes.icon} ${!isVisible ? classes.icon_open : ''}`}
          />
        </Button>
      </div>
    </div>
  );
};
