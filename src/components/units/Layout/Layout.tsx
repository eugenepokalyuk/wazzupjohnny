import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import classes from './Layout.module.scss';
import { Header } from '../Header/Header';

interface Props {
  children?:ReactNode;
  header?:ReactNode;
}

export const Layout:FC<Props> = ({ header, children }) => (
  <div className={classes.box}>
    {header ? header : <Header />}

    <main className={classes.main}>{children || <Outlet />}</main>
  </div>
);
