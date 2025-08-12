import { FC } from 'react';

import { MatterBoxV2 } from '@components/modules';
import { ArrowUpIcon, Button } from '@components/ui';
import { skillsMock } from '@services/Api';
import { Breakpoints, useMedia } from '@utils/hooks';

import classes from './Home.module.scss';
import { MainBox } from './components/MainBox/MainBox';

export const Home: FC = () => {
  const isMobile = useMedia(Breakpoints.Mobile);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className={classes.section}>
      <MainBox />

      <div className={classes.matter_box}>
        {isMobile && (
          <Button className={classes.button_up} onClick={scrollToTop}>
            <ArrowUpIcon />
          </Button>
        )}

        <MatterBoxV2 content={skillsMock} trigger="auto" />
      </div>
    </section>
  );
};
