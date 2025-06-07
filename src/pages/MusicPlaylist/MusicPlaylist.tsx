import { FC } from 'react';
// import { useInView } from 'react-intersection-observer';

import { Layout } from '@components/units';

import { MarqueeBanner } from './components/MarqueeBanner/MarqueeBanner';
import { Collection } from './components/Collection/Collection';

export const MusicPlaylist:FC = () => {
  const playlists = [1006, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1017, 1022, 1024, 1026, 1027, 1028, 1031, 1032, 1033, 1034, 1035, 1036];

  // const [bannerVisible, setBannerVisible] = useState<boolean>(true);
  //
  // const { ref, inView } = useInView({
  //   threshold: 0.1
  // });
  //
  // useEffect(() => {
  //   if (inView) {
  //     setBannerVisible(false)
  //   } else {
  //     setBannerVisible(true)
  //   }
  // }, [inView]);

  return (
    <Layout wide>
      <MarqueeBanner />

      <Collection playlists={playlists} />

      {/*<AnimatedBanner />*/}

      {/*<ShapeWidget visible={bannerVisible} />*/}

      {/*<div ref={ref}>*/}
      {/*  <About />*/}
      {/*</div>*/}
    </Layout>
  );
};
