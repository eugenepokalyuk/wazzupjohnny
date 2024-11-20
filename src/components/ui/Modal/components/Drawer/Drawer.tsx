import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

import { CardContent, CardHeader } from '@components/ui';

import classes from './Drawer.module.scss';
import { ModalProps } from '../../types.ts';

export const Drawer:FC<ModalProps> = ({
                                        isOpen,
                                        onClose,
                                        label,
                                        children,
                                        ...props
                                      }) => {
  const [drawerHeight, setDrawerHeight] = useState<string>('30vh');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const drawerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);
  const startY = useRef<number>(0);
  const currentY = useRef<number>(0);

  useEffect(() => {
    if (isOpen) {
      setDrawerHeight('30vh');

      setIsExpanded(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleTouchMove = (e:TouchEvent) => {
      if (!isDragging.current) return;

      currentY.current = e.touches[0].clientY;

      const diffY = startY.current - currentY.current;

      if (diffY > 50) {
        setDrawerHeight('90vh');
        setIsExpanded(true);
      }

      if (diffY < -50) {
        if (isExpanded) {
          setDrawerHeight('30vh');
          setIsExpanded(false);
        } else {
          setDrawerHeight('0vh');
          setTimeout(() => onClose(), 300);
        }
      }
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isExpanded, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleTouchStart = (e:React.TouchEvent) => {
    isDragging.current = true;
    startY.current = e.touches[0].clientY;
  };

  const handleToggle = () => {
    if (isExpanded) {
      setDrawerHeight('30vh');
      setIsExpanded(false);
    } else {
      setDrawerHeight('90vh');
      setIsExpanded(true);
    }
  };

  const handleOverlayClick = (e:TouchEvent|MouseEvent) => {
    if (e.target === e.currentTarget) {
      setDrawerHeight('0vh');
      setTimeout(() => onClose(), 300);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className={clsx(classes.drawer_overlay)}
      onClick={handleOverlayClick}
      {...props}
    >
      <div
        ref={drawerRef}
        className={clsx(classes.drawer)}
        style={{ height: drawerHeight, transition: 'height 0.3s ease' }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
      >
        <div onClick={handleToggle} className={classes.drag_handle} />

        {label && <CardHeader>{label}</CardHeader>}

        <CardContent>{children}</CardContent>
      </div>
    </div>,
    document.body,
  );
};
