import { FC } from 'react';

import image1Src from '@public/images/playlist/1.jpeg';
import image2Src from '@public/images/playlist/2.jpeg';
import image3Src from '@public/images/playlist/3.jpeg';
import image4Src from '@public/images/playlist/4.jpeg';
import image5Src from '@public/images/playlist/5.jpeg';
import image6Src from '@public/images/playlist/6.jpeg';
import image7Src from '@public/images/playlist/7.jpeg';
import image8Src from '@public/images/playlist/8.jpeg';
import image9Src from '@public/images/playlist/9.jpeg';
import image10Src from '@public/images/playlist/10.png';
import image11Src from '@public/images/playlist/11.jpeg';
import image12Src from '@public/images/playlist/12.jpeg';
import image13Src from '@public/images/playlist/13.jpeg';
import image14Src from '@public/images/playlist/14.png';
import image15Src from '@public/images/playlist/15.jpeg';
import image16Src from '@public/images/playlist/16.png';
import image17Src from '@public/images/playlist/17.jpeg';
import image18Src from '@public/images/playlist/18.jpeg';
import image19Src from '@public/images/playlist/19.jpeg';
import image20Src from '@public/images/playlist/20.jpeg';
import image21Src from '@public/images/playlist/21.jpeg';

import classes from './Collection.module.scss';
import { CollectionCard } from './CollectionCard/CollectionCard';

interface Props {
  playlists:number[];
}

export const Collection:FC<Props> = ({ playlists }) => {
  const images = [
    image1Src, image2Src, image3Src, image4Src, image5Src,
    image6Src, image7Src, image8Src, image9Src, image10Src,
    image11Src, image12Src, image13Src, image14Src, image15Src,
    image16Src, image17Src, image18Src, image19Src, image20Src, image21Src,
  ].reverse();

  return (
    <div className={classes.box}>
      {playlists.map((playlist, index) => (
        <CollectionCard
          key={index}
          playlist={playlist}
          index={playlists.length - index - 1}
          image={images[index]}
        />
      ))}
    </div>
  );
};

