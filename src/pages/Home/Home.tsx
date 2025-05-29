import { FC } from 'react';

import { MatterBox } from '@components/modules';
import { Skills } from '@services/Api';

import classes from './Home.module.scss';
import { MainBox } from './components/MainBox/MainBox';

export const Home:FC = () => (
  <section className={classes.section}>
    <MainBox />

    <MatterBox skills={Skills} />
  </section>
);
