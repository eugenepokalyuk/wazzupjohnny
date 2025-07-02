import { FC } from 'react';

import { GitHubIcon, Link, TelegramIcon } from '@components/ui';
import { Links } from '@utils/constants';

import classes from './Contact.module.scss';
import { FlipAvatar } from './FlipAvatar/FlipAvatar';

export const Contact: FC = () => (
  <div className={classes.box}>
    <FlipAvatar />

    <div className={classes.icon_box}>
      <Link to={Links.Telegram} className={classes.link}>
        <TelegramIcon className={classes.icon} />
      </Link>

      <Link to={Links.GitHub} className={classes.link}>
        <GitHubIcon className={classes.icon} />
      </Link>
    </div>
  </div>
);
