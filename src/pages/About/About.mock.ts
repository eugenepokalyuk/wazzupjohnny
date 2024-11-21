export interface AboutItem {
  title: string;
  description: string;
  image: string;
}

import ImageAstra from '/public/images/Astra.jpg';
import ImageBoardgames from '/public/images/boardgames.jpg';
import ImageSelfPresentation from '/public/images/selfpresentation.jpg';
import ImageSmart from '/public/images/smart.jpg';
import ImageSnowboarding from '/public/images/snowboarding.jpg';

export const AboutMock: AboutItem[] = [
  {
    title: 'Меня зовут Женя',
    description:
      'Я Frontend-разработчик с почти трехлетним опытом работы в создании интерактивных пользовательских интерфейсов. Я специализируюсь на React и TypeScript, имею опыт использования Redux, Redux-Saga, также изучаю Mobx, для управления состоянием приложений и уверенно работаю со сборщиками Webpack, Vite',
    image: ImageSelfPresentation,
  },
  {
    title: 'Я стремлюсь',
    description:
      'Создавать удобные и отзывчивые интерфейсы, следуя современным стандартам и лучшим практикам в области разработки. Буду рад обсудить, как мой опыт и навыки могут быть полезны вашей компании',
    image: ImageSmart,
  },
  {
    title: 'В свободное время',
    description:
      'Увлекаюсь сноубордингом, скейтбордингом наслаждаясь скоростью и адреналином. Надеюсь покорить серфинг!',
    image: ImageSnowboarding,
  },
  {
    title: 'Также',
    description:
      'У меня есть абиссинская кошка по имени Астра, которая всегда поднимает мне настроение своими проделками',
    image: ImageAstra,
  },
  {
    title: 'Кроме того',
    description:
      'Люблю играть в настольные игры, которые помогают мне развивать стратегическое мышление и работать в команде',
    image: ImageBoardgames,
  },
];
