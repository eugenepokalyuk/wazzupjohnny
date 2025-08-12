import { FC } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Size, Tags, Text } from '@components/ui';
import { Breakpoints, useMedia } from '@utils/hooks';

import classes from './Certs.module.scss';
import freecodecampCert1 from './images/freecodecamp-cert-1.png';
import freecodecampCert2 from './images/freecodecamp-cert-2.png';
import freecodecampCert3 from './images/freecodecamp-cert-3.png';
import yandexCert1 from './images/yandex-cert-1.png';
import { ImageSlider } from './ImageSlider/ImageSlider';

const images = [
  {
    src: freecodecampCert3,
    url: 'https://www.freecodecamp.org/certification/eugene.pokalyuk/responsive-web-design',
  },
  {
    src: freecodecampCert2,
    url: 'https://www.freecodecamp.org/certification/eugene.pokalyuk/javascript-algorithms-and-data-structures',
  },
  {
    src: freecodecampCert1,
    url: 'https://www.freecodecamp.org/certification/eugene.pokalyuk/front-end-development-libraries',
  },
  { src: yandexCert1, url: 'https://disk.yandex.ru/d/sWYLC8FOdD1b0w' },
];

export const Certs: FC = () => {
  const isMobile = useMedia(Breakpoints.Mobile);

  return (
    <div className={classes.box}>
      <Text tag={Tags.Heading_2} size={Size.XL}>
        {'Мои сертификаты'}
      </Text>

      <ImageSlider images={images} slidesPerView={isMobile ? 1 : 3} />
    </div>
  );
};
