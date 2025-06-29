import ImgCat from '/public/images/facts/cat.png';
import ImgBlog from '/public/images/facts/laptop.png';
import ImgArticles from '/public/images/facts/comic.png';
import ImgMusic from '/public/images/facts/headphones_white.png';
import ImgSnowboard from '/public/images/facts/snowboard.png';
import ImgCoffee from '/public/images/facts/coffee.png';
import ImgSketchbook from '/public/images/facts/sketchbook.png';

export interface Fact {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  link?: string;
}

export const factsMock: Fact[] = [
  {
    imgSrc: ImgCat,
    imgAlt: 'Абиссинская кошка Астры',
    title: 'Канал о моей кошке Астры',
    description:
      'Веду Telegram-канал, где делюсь забавными моментами и фото из жизни Астры — она настоящая звезда!',
    link: 'https://t.me/astralovers',
  },
  {
    imgSrc: ImgBlog,
    imgAlt: 'Блог о разработке',
    title: 'Блог о разработке и кодинге',
    description:
      'Пишу в Telegram о своих проектах, делюсь мыслями, которые вдохновляют меня в свободное время',
    link: 'https://t.me/wazzupjohnny_channel',
  },
  {
    imgSrc: ImgArticles,
    imgAlt: 'Статьи на сайте',
    title: 'Автор статей на сайте',
    description:
      'Создаю материалы, которых мне не хватало в своё время, чтобы помочь другим разработчикам',
    link: 'https://wazzupjohnny.ru/articles/',
  },
  {
    imgSrc: ImgMusic,
    imgAlt: 'Музыкальные плейлисты',
    title: 'Собираю музыкальные плейлисты',
    description: 'У меня уже около 20 плейлистов, чтобы делиться своим вайбом',
    link: 'https://wazzupjohnny.ru/playlist/',
  },
  {
    imgSrc: ImgSnowboard,
    imgAlt: 'Сноуборд',
    title: 'Максимальная скорость на сноуборде',
    description: '40.9 км/ч — скорость, с которой я люблю мчаться по склонам, ощущая свободу и адреналин',
  },
  {
    imgSrc: ImgSketchbook,
    imgAlt: 'Скетчбук',
    title: 'Скетчбук всегда на столе',
    description:
      'Постоянно рисую и записываю важные детали карандашом — это помогает мне структурировать мысли и вдохновляет',
  },
  {
    imgSrc: ImgCoffee,
    imgAlt: 'Чай и кофе',
    title: 'Люблю чайные церемонии и кофе',
    description:
      'Обожаю китайский чай и домашние чайные церемонии, но не отказываюсь и от воронки v60',
  },
];
