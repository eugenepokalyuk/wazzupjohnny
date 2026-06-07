import { FC } from 'react';

import { MatterBoxV2 } from '@components/modules';
import { skillsMock } from '@services/Api';

import classes from '@components/sega/sega.module.scss';
import { CORE_SKILL_NAMES } from './sega.data';

export const BonusStage: FC = () => (
  <section id="bonus" className={classes.bonus}>
    <div className={classes.bonusBanner}>
      <span>🎮 BONUS STAGE · SKILL CLOUD</span>
    </div>

    <MatterBoxV2 content={skillsMock} trigger="scroll" pixel coreSkills={CORE_SKILL_NAMES} />
  </section>
);
