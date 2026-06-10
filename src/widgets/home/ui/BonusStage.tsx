import { FC } from 'react';

import { useTranslation } from '@shared/i18n';
import { MatterBoxV2, skillsMock } from '@entities/skill';

import classes from '@shared/styles/sega.module.scss';
import { CORE_SKILL_NAMES } from '../model/home.data';

export const BonusStage: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="bonus" className={classes.bonus}>
      <div className={classes.bonusBanner}>
        <span>🎮 {t.bonus.banner}</span>
      </div>

      <MatterBoxV2 content={skillsMock} trigger="scroll" pixel coreSkills={CORE_SKILL_NAMES} />
    </section>
  );
};
