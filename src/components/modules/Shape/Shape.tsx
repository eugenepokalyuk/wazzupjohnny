import { FC } from 'react';

import imageCatV3Src from '@public/images/shape/cat_v3.png';

import classes from './Shape.module.scss';

interface Props {
  isTyping?: boolean;
}

export const Shape: FC<Props> = ({ isTyping }) => {
  return <img src={imageCatV3Src} className={classes.shape} alt="" />;
};
