import { FC } from 'react';
import clsx from 'clsx';

import classes from '@components/sega/sega.module.scss';
import { CHAR_BIO, INVENTORY, PLAYER_NAME, STATS } from './sega.data';

export const CharacterStats: FC = () => (
  <section id="player" className={`${classes.sec} ${classes.player}`}>
    <div className={classes.wrap}>
      <div className={classes.banner}>
        <span>👾 CHARACTER SELECT</span>
      </div>

      <div className={classes.playerGrid}>
        {/* character card */}
        <div className={clsx(classes.charCard, classes.panel, classes.gold, classes.rivets)}>
          <span className={classes.rv1} />
          <span className={classes.rv2} />
          <img className={classes.charPort} src="/images/about/avatar.jpg" alt="Портрет Евгения" />
          <div className={classes.charName}>{PLAYER_NAME}</div>
          <div className={classes.charClass}>CLASS · FRONTEND DEV</div>
          <p className={classes.charBio}>{CHAR_BIO}</p>
        </div>

        {/* stats + inventory */}
        <div>
          <div className={clsx(classes.panel, classes.rivets, classes.statsPanel)}>
            <span className={classes.rv1} />
            <span className={classes.rv2} />
            <div className={classes.invHead}>
              <h3>STATS</h3>
              <span className={classes.cnt}>LV.99</span>
            </div>
            {STATS.map((stat) => (
              <div key={stat.name} className={classes.statRow}>
                <span className={classes.statName}>{stat.name}</span>
                <div className={classes.statBar}>
                  <i style={{ width: `${stat.value}%` }} />
                </div>
                <span className={classes.statVal}>{stat.value}</span>
              </div>
            ))}
          </div>

          <div className={clsx(classes.panel, classes.rivets, classes.invPanel)}>
            <span className={classes.rv1} />
            <span className={classes.rv2} />
            <div className={classes.invHead}>
              <h3>INVENTORY · СТЕК</h3>
              <span className={classes.cnt}>×{INVENTORY.length}</span>
            </div>
            <div className={classes.invGrid}>
              {INVENTORY.map((chip) => (
                <span key={chip.name} className={clsx(classes.chip, { [classes.core]: chip.core })}>
                  {chip.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
