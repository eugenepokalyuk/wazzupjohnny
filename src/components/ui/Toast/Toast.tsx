import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import { ToastVariants } from '@components/ui/Toast/types.ts';
import { Tags, Text } from '@components/ui';

import classes from './Toast.module.scss';

interface Props {
  title: string;
  description: string;
  icon?: ReactNode;
  variant: ToastVariants;
  onClose: () => void;
  children?: ReactNode;
}

export const Toast: FC<Props> = ({
  title,
  description,
  icon,
  variant,
  onClose,
  children,
  ...props
}) => (
  <div className={clsx(classes.toast, classes[variant])} {...props}>
    {icon && <div className={classes.icon}>{icon}</div>}

    <div className={classes.content}>
      <Text tag={Tags.Heading}>{description}</Text>

      {/*<Text tag={Tags.Paragraph}>{description}</Text>*/}

      {children && <div className={classes.children}>{children}</div>}
    </div>

    {/*<button className={classes.closeButton} onClick={onClose}>*/}
    {/*  <CloseIcon />*/}
    {/*</button>*/}
  </div>
);
