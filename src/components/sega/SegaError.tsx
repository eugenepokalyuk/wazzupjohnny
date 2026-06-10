import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { PlayIcon } from '@components/ui';
import { Urls } from '@services/Route/urls';

import classes from './sega.module.scss';
import { SegaShell } from './SegaShell';

interface Props {
  title: string;
  subtitle: string;
  code?: string;
  /** Full page reload instead of client-side nav — used by the ErrorBoundary. */
  reload?: boolean;
}

/** Shared Sega-styled error screen for both the 404 route and the ErrorBoundary. */
export const SegaError: FC<Props> = ({ title, subtitle, code, reload }) => (
  <SegaShell>
    <section className={clsx(classes.sec, classes.coin, classes.errorScreen)}>
      <div className={classes.wrap}>
        <div className={classes.coinHead}>{title}</div>
        <p className={classes.coinSub}>{subtitle}</p>
        {code && <div className={classes.errorCode}>{code}</div>}

        {reload ? (
          <a href={Urls.Home} className={classes.allProjects}>
            <PlayIcon className={classes.txtIcon} /> НА ГЛАВНУЮ
          </a>
        ) : (
          <Link to={Urls.Home} className={classes.allProjects}>
            <PlayIcon className={classes.txtIcon} /> НА ГЛАВНУЮ
          </Link>
        )}
      </div>
    </section>
  </SegaShell>
);
