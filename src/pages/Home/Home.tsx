import { FC } from 'react';

import classes from './Home.module.scss';
import { HeroSection } from './components/HeroSection/HeroSection';

export const Home: FC = () => {
  return (
    <div className={classes.box}>
      <HeroSection />
    </div>
  );
};
