import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import classes from './Layout.module.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface Props {
  children?:ReactNode;
  header?:ReactNode;
  footer?:ReactNode;
  wide?:boolean;
}

export const Layout:FC<Props> = ({ header, footer, wide, children }) => (
  <div className={classes.box}>
    {header === null ? null : <Header />}

    <main className={clsx(classes.main, {
      [classes.wide]: wide
    })}>{children || <Outlet />}</main>

    {footer === null ? null : <Footer />}
  </div>
);
