import { FC } from 'react';

import { Layout } from '@components/units';
import { factsMock } from '@services/Api';

import classes from './About.module.scss';
import { Certs } from './Certs/Certs';
import { FactsBox } from './FactsBox/FactsBox';
import { Greetings } from './Greetings/Greetings';
import { Texts } from './Texts/Texts';

export const About: FC = () => (
  <Layout wide>
    <div className={classes.box}>
      <Greetings />

      <Texts />

      <Certs />

      <FactsBox facts={factsMock} />
    </div>
  </Layout>
);
