import { FC } from 'react';

import { Size, Tags, Text } from '@components/ui';

import styles from './AnimatedBanner.module.scss';

export const AnimatedBanner:FC = () => (
  <section className={styles.section}>
    <Text tag={Tags.Heading} size={Size.XL} className={styles.title}>{'Новые Плейлисты Каждый Месяц!'}</Text>
  </section>
);
