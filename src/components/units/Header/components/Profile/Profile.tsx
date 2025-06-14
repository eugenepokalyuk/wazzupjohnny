import { FC } from 'react';

import { Link } from '@components/ui';
import imageLogoSrc from '@public/images/shape/logo.png';
import { Urls } from '@services/Route';

import classes from './Profile.module.scss';

export const Profile: FC = () => (
  <div className={classes.box}>
    <div className={classes.image_box}>
      <img src={imageLogoSrc} alt="" />
    </div>

    <Link to={Urls.Home}>{'wazzupjohnny'}</Link>
  </div>
);
