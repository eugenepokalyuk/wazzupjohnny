import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import classes from './Layout.module.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface Props {
  children?:React.ReactNode;
}

export const Layout:FC<Props> = ({ children }) => (
  <div className={clsx(classes.box, classes.background)}>
    <Header />

    <main className={classes.main_content}>
      {children || <Outlet />}
    </main>

    <Footer />
  </div>
);
