import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { AppRoutes } from '../AppRoutes';
import classes from './AnimatedRoutes.module.scss';

export const AnimatedRoutes: FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname}
        classNames={{
          enter: classes.page_enter,
          enterActive: classes.page_enter_active,
          exit: classes.page_exit,
          exitActive: classes.page_exit_active,
        }}
        timeout={400}
      >
        <AppRoutes />
      </CSSTransition>
    </TransitionGroup>
  );
};
