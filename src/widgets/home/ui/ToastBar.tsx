import { FC } from 'react';
import clsx from 'clsx';

import classes from '@shared/styles/sega.module.scss';

interface Props {
  message: string;
  shown: boolean;
}

export const ToastBar: FC<Props> = ({ message, shown }) => (
  <div className={clsx(classes.toast, { [classes.show]: shown })}>{message}</div>
);
