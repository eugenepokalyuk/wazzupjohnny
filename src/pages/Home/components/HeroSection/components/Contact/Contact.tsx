import { FC } from 'react';

import Avatar from '@public/images/avatar.png';
import { GitHubIcon, Link, TelegramIcon } from '@components/ui';

import classes from './Contact.module.scss';
import { Links } from '@utils/constants';

export const Contact: FC = () => (
  <div className={classes.box}>
    <div className={classes.image_box}>
      <img src={Avatar} alt="" className={classes.image} />
    </div>

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
