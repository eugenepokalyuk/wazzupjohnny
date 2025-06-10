import { FC, useEffect, useState } from 'react';

import classes from './ReadingProgressBar.module.scss';

export const ReadingProgressBar: FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (scrollTop / scrollHeight) * 100;

    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={classes.box} style={{ width: `${scrollPercentage}%` }} />
  );
};
