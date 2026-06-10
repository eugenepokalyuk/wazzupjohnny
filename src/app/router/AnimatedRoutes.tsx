import { FC, useEffect } from 'react';
import { RouteObject, useLocation, useRoutes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { ROUTE_SEGMENTS } from '@shared/i18n';
import { HomePage } from '@pages/home';
import { ProjectsPage } from '@pages/projects';
import { ArticlesPage } from '@pages/articles';
import { ArticlePage } from '@pages/article';
import { ErrorPage } from '@pages/error';

import classes from './AnimatedRoutes.module.scss';

/** Page routes, mounted relative to the `/:locale/` parent route. */
const pageRoutes: RouteObject[] = [
  { path: ROUTE_SEGMENTS.home, element: <HomePage /> },
  { path: ROUTE_SEGMENTS.projects, element: <ProjectsPage /> },
  { path: ROUTE_SEGMENTS.articles, element: <ArticlesPage /> },
  { path: ROUTE_SEGMENTS.article, element: <ArticlePage /> },
  { path: '*', element: <ErrorPage /> },
];

const Routes: FC = () => useRoutes(pageRoutes);

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
        <Routes />
      </CSSTransition>
    </TransitionGroup>
  );
};
