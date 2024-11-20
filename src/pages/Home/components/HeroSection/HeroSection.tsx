import { FC } from 'react';

import { MatterBox } from '@components/modules';
import { Skills } from '@services/Api';

import { MainBox } from './components/MainBox/MainBox';

export const HeroSection: FC = () => (
  <section>
    <MainBox />

    <MatterBox skills={Skills} />
  </section>
);
