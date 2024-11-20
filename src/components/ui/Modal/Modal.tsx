import { FC, useEffect, useState } from 'react';

import { Dialog } from './components/Dialog/Dialog';
import { Drawer } from './components/Drawer/Drawer';
import { ModalProps } from './types.ts';

const MODAL_BREAKPOINT = 768;

export const Modal:FC<ModalProps> = ({
                                       isOpen,
                                       onClose,
                                       label,
                                       children,
                                       ...props
                                     }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.innerWidth > MODAL_BREAKPOINT,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > MODAL_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return isLargeScreen ? (
    <Dialog isOpen={isOpen} onClose={onClose} label={label} {...props}>
      {children}
    </Dialog>
  ) : (
    <Drawer isOpen={isOpen} onClose={onClose} label={label} {...props}>
      {children}
    </Drawer>
  );
};
