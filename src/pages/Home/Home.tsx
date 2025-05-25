import { FC, useEffect } from 'react';

import classes from './Home.module.scss';
import { HeroSection } from './components/HeroSection/HeroSection';

export const Home:FC = () => {
  useEffect(() => {
    document.title = 'Home - wazzupjohnny';
  }, []);

  return (
    <div className={classes.box}>
      <HeroSection />
    </div>
  );
};
