import { FC } from 'react';

import { MatterBox } from '@components/modules';
import { Skills } from '@services/Api';

import classes from './HeroSection.module.scss';
import { MainBox } from './components/MainBox/MainBox';

export const HeroSection: FC = () => (
  <section className={classes.box}>
    <MainBox />

    <MatterBox skills={Skills} />
  </section>
);
