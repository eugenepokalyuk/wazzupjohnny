import ImageAstra from '/public/images/Astra.jpg';
import ImageBoardgames from '/public/images/boardgames.jpg';
import ImageSelfPresentation2 from '/public/images/selfPresentation2.jpg';
import ImageSmart from '/public/images/smart.jpg';
import ImageSnowboarding from '/public/images/snowboarding.jpg';

export interface AboutItem {
  title: string;
  description: string;
  image: string;
}

export const aboutMock: AboutItem[] = [
  {
    title: 'Меня зовут Женя',
    description:
      'Я frontend-разработчик с более трехлетним опытом создания интерактивных и удобных пользовательских интерфейсов. Моя специализация — React и TypeScript, а для управления состоянием я использую Redux (Thunk/Saga/Observable), а также MobX. Использую современные инструменты разработки, сборщики Webpack и Vite',
    image: ImageSelfPresentation2,
  },
  {
    title: 'Я стремлюсь',
    description:
      'Создавать удобные, интуитивно понятные и отзывчивые интерфейсы, придерживаясь современных стандартов и лучших практик в веб-разработке. Мне важно не просто писать код, а находить решения, которые делают жизнь пользователей проще. Буду рад обсудить, как мой опыт и подход к работе могут помочь вашей компании достичь новых высот',
    image: ImageSmart,
  },
  {
    title: 'Адреналин и приключения',
    description:
      'Увлекаюсь сноубордингом и скейтбордингом, наслаждаясь скоростью и адреналином. Еще одна моя страсть — тяжелая музыка. Mick Gordon, Powerglove, Warmen и другие инструментальные треки сопровождают меня каждый день, заряжая энергией и вдохновением',
    image: ImageSnowboarding,
  },
  {
    title: 'Моя подруга',
    description:
      'У меня есть абиссинская кошка по имени Астра, которая всегда поднимает мне настроение своими проделками. Она — мой источник радости и тепла в повседневной жизни',
    image: ImageAstra,
  },
  {
    title: 'Стратегия и веселье',
    description:
      'Люблю настольные игры, которые не только захватывают, но и помогают развивать стратегическое мышление и работать в команде. Каждый раз это новый вызов и отличная возможность весело провести время',
    image: ImageBoardgames,
  },
];
