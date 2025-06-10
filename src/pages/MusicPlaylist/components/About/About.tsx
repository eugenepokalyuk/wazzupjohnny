import { FC } from 'react';

import { Shape } from '@components/modules';

import styles from './About.module.scss';

export const About: FC = () => (
  <div className={styles.box}>
    <div className={styles.left}>
      <Shape />
    </div>

    <div className={styles.right}>
      <p className={styles.text}>
        {
          'Очень рад поделиться со всеми вами своей музыкой. Ничто так не объединяет звук и душу, и я дорожу каждым моментом'
        }
      </p>
    </div>
  </div>
);
