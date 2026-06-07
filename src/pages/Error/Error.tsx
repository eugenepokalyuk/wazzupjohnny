import { FC } from 'react';
import { Link } from 'react-router-dom';

import { SegaShell } from '@components/sega';
import classes from '@components/sega/sega.module.scss';
import { PlayIcon } from '@components/ui';
import { Urls } from '@services/Route/urls';

export const Error: FC = () => (
  <SegaShell>
    <section className={`${classes.sec} ${classes.coin}`}>
      <div className={classes.wrap}>
        <div className={classes.coinHead}>GAME OVER</div>
        <p className={classes.coinSub}>
          CONTINUE? — такой страницы нет, но игра ещё не окончена
        </p>

        <div className={classes.errorCode}>ERROR 404</div>

        <Link to={Urls.Home} className={classes.allProjects}>
          <PlayIcon className={classes.txtIcon} /> НА ГЛАВНУЮ
        </Link>
      </div>
    </section>
  </SegaShell>
);
