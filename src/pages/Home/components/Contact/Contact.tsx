import { FC } from 'react';

import { GitHubIcon, Link, TelegramIcon } from '@components/ui';
import imageLogoSrc from '@public/images/shape/logo.png';
import { Links } from '@utils/constants';

import classes from './Contact.module.scss';

export const Contact: FC = () => (
  <div className={classes.box}>
    <div className={classes.image_box}>
      <img src={imageLogoSrc} alt="" className={classes.image} />
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
