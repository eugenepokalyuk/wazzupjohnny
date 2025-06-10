import { FC } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

import { Card, CardContent, CardHeader, CloseIcon } from '@components/ui';

import classes from './Dialog.module.scss';
import { ModalProps } from '../../types.ts';

export const Dialog: FC<ModalProps> = ({
  isOpen,
  onClose,
  label,
  children,
  ...props
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={clsx(classes.overlay)} onClick={onClose} {...props}>
      <Card
        className={clsx(classes.modal)}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </button>

        {label && <CardHeader>{label}</CardHeader>}

        <CardContent>{children}</CardContent>
      </Card>
    </div>,
    document.body,
  );
};
