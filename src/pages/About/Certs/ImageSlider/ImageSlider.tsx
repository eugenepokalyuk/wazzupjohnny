import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import classes from './ImageSlider.module.scss';

type ImageItem = {
  src: string;
  url?: string;
};

type ImageSliderProps = {
  images: ImageItem[];
  slidesPerView?: number;
};

export const ImageSlider: FC<ImageSliderProps> = ({
  images,
  slidesPerView = 3,
}) => (
  <Swiper
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={20}
    slidesPerView={slidesPerView}
    navigation
    pagination={{ clickable: true }}
    loop
    className={classes.box}
  >
    {images.map(({ src, url }, index) => (
      <SwiperSlide key={index} className={classes.slide}>
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={`Слайд ${index + 1}`} />
          </a>
        ) : (
          <img src={src} alt={`Слайд ${index + 1}`} />
        )}
      </SwiperSlide>
    ))}
  </Swiper>
);
