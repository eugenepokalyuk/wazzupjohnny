import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAppPaths, useTranslation } from '@shared/i18n';
import { PlayIcon } from '@shared/ui';

import classes from '@shared/styles/sega.module.scss';
import { SegaLayout } from './SegaLayout';

interface Props {
  variant?: 'notFound' | 'crash';
  /** Full page reload instead of client-side nav — used by the ErrorBoundary. */
  reload?: boolean;
}

/** Shared Sega-styled error screen for the 404 route and the ErrorBoundary. */
export const SegaError: FC<Props> = ({ variant = 'notFound', reload }) => {
  const { t } = useTranslation();
  const paths = useAppPaths();

  const isCrash = variant === 'crash';
  const subtitle = isCrash ? t.error.crashSubtitle : t.error.subtitle;
  const code = isCrash ? t.error.crashCode : t.error.code;

  return (
    <SegaLayout>
      <section className={`${classes.sec} ${classes.coin}`}>
        <div className={classes.wrap}>
          <div className={classes.coinHead}>{t.error.title}</div>
          <p className={classes.coinSub}>{subtitle}</p>
          <div className={classes.errorCode}>{code}</div>

          {reload ? (
            <a href={paths.home} className={classes.allProjects}>
              <PlayIcon className={classes.txtIcon} /> {t.error.home}
            </a>
          ) : (
            <Link to={paths.home} className={classes.allProjects}>
              <PlayIcon className={classes.txtIcon} /> {t.error.home}
            </Link>
          )}
        </div>
      </section>
    </SegaLayout>
  );
};
