import { FC } from 'react';

import { Layout } from '@components/units';
import { AnimatedBanner } from './components/AnimatedBanner/AnimatedBanner';
import { MarqueeBanner } from './components/MarqueeBanner/MarqueeBanner';
import { Collection } from './components/Collection/Collection';

export const MusicPlaylist: FC = () => {
  const playlists = [
    1006, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1017, 1022, 1024,
    1026, 1027, 1028, 1031, 1032, 1033, 1034, 1035, 1036,
  ].reverse();

  return (
    <Layout wide>
      <MarqueeBanner />

      <AnimatedBanner />

      <Collection playlists={playlists} />
    </Layout>
  );
};
