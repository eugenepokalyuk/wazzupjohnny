import { FC } from 'react';

import imageCatV3Src from '@public/images/shape/cat_v3.png';

import classes from './Shape.module.scss';

export const Shape: FC = () => (
  <div className={classes.box}>
    <img src={imageCatV3Src} className={classes.shape} alt="" />
  </div>
);
