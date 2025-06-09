import { FC } from 'react';

import { Size, Tags, Text } from '@components/ui';

import styles from './AnimatedBanner.module.scss';

export const AnimatedBanner:FC = () => (
  <section className={styles.section}>
    <Text tag={Tags.Heading} size={Size.XL} className={styles.title}>{'Новые Плейлисты Каждый Месяц!'}</Text>

    <Text
      tag={Tags.Paragraph}>{'Очень рад поделиться со всеми вами своей музыкой. Ничто так не объединяет звук и душу, и я дорожу каждым моментом'}</Text>
  </section>
);
