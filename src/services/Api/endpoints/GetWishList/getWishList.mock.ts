import ImageInstax1Src from '/public/images/wishlist/instax_1.webp';
import ImageInstax2Src from '/public/images/wishlist/instax_2.webp';
import ImageInstax3Src from '/public/images/wishlist/instax_3.webp';
import ImageInstax4Src from '/public/images/wishlist/instax_4.png';
import ImageInstax5Src from '/public/images/wishlist/instax_5.webp';
import ImageInstax6Src from '/public/images/wishlist/instax_6.webp';
import ImageIPadSrc from '/public/images/wishlist/ipad.jpg';
import ImageZenitsuHoodieOne from '/public/images/wishlist/zenitsuHoodieOne.webp';
import ImageZenitsuHoodieTwo from '/public/images/wishlist/zenitsuHoodieTwo.webp';
import ImageZenitsuHoodieThree from '/public/images/wishlist/zenitsuHoodieThree.webp';
import ImageEasyFeedPro from '/public/images/wishlist/easy_feed_pro.jpg';
import ImageMagicSpin from '/public/images/wishlist/magic_spin.jpg';
import ImageMagicBounce from '/public/images/wishlist/magic_bounce.jpg';
import ImagePetKitToilet1 from '/public/images/wishlist/petkit_1.png';
import ImagePetKitToilet2 from '/public/images/wishlist/petkit_2.png';
import ImagePetKitToilet3 from '/public/images/wishlist/petkit_3.webp';
import ImageGuardianofFaithBelt1 from '/public/images/wishlist/guardian_of_faith_belt_1.webp';
import ImageGuardianofFaithBelt2 from '/public/images/wishlist/guardian_of_faith_belt_2.webp';
import ImageGuardianofFaithBelt3 from '/public/images/wishlist/guardian_of_faith_belt_3.webp';
import ImageGuardianofFaithBelt4 from '/public/images/wishlist/guardian_of_faith_belt_4.webp';
import ImageGuardianofFaithStraps1 from '/public/images/wishlist/guardian_of_faith_straps_1.webp';
import ImageGuardianofFaithStraps2 from '/public/images/wishlist/guardian_of_faith_straps_2.webp';
import ImageGuardianofFaithStraps3 from '/public/images/wishlist/guardian_of_faith_straps_3.webp';
import ImageGuardianofFaithStraps4 from '/public/images/wishlist/guardian_of_faith_straps_4.webp';
import ImageFunkoPopDemonSlayerAkaza1 from '/public/images/wishlist/akaza_image_1.png';
import ImageFunkoPopDemonSlayerAkaza2 from '/public/images/wishlist/akaza_image_2.png';
import ImageFunkoPopDemonSlayerTomioka1 from '/public/images/wishlist/tomioka_image_1.jpg';
import ImageFunkoPopDemonSlayerTomioka2 from '/public/images/wishlist/tomioka_image_2.jpg';

export interface WishListItem {
  imageUrl: string | string[];
  title: string;
  description?: string;
  links?: string[];
}

export const wishListMock: WishListItem[] = [
  {
    imageUrl: [
      ImageZenitsuHoodieOne,
      ImageZenitsuHoodieTwo,
      ImageZenitsuHoodieThree,
    ],
    title: 'Худи с Зеницу Агацума',
    description:
      'Один из двух тритагонистов (наряду с Иноске Хашибирой) аниме и манги 2016 года Истребитель демонов, но любимый конечно Кёджуро Ренгоку, но худака красивого с ним нет >.<\n\nСейчас на него скидон нормальный',
    links: ['https://nikifilini.com/product/hudi-demon-slayer-sr/'],
  },
  // {
  //   imageUrl: ImageCrocsTomiokaSrc,
  //   title: 'Crocs Сабо с Томиокой',
  //   description: 'Удобные тапки, особенно с Гию Томиока',
  //   links: ['https://www.lamoda.ru/p/rtlaed367101/shoes-crocs-sabo/'],
  // },
  {
    imageUrl: [
      ImageGuardianofFaithBelt1,
      ImageGuardianofFaithBelt2,
      ImageGuardianofFaithBelt3,
      ImageGuardianofFaithBelt4,
    ],
    title: 'Страж Веры Пояс',
    description:
      'Для качалки, я ж теперь качаюсь!\n\nСтановую тягу приседания таааам и всякое другое другое, думаю вот пояс нужен, к зиме уже буду нормальные веса брать! Голубой цвет кайф) Мой текущий обхват талии 89 см.\n\nНа момент покупки лучше уточнить не бросил ли я заниматься в зале =)',
    links: ['https://ozon.ru/t/39wZqyN'],
  },
  {
    imageUrl: [
      ImageGuardianofFaithStraps1,
      ImageGuardianofFaithStraps2,
      ImageGuardianofFaithStraps3,
      ImageGuardianofFaithStraps4,
    ],
    title: 'Лямки для становой тяги Веры Пояс',
    description:
      'Для качалки, я ж теперь качаюсь (часть 2)\n\nСтановую тягу подятгивания таааам и всякое другое другое, думаю вот лямки нужны чтобы изолировать руки там где другие группы мыщц будут работать\n\nНа момент покупки лучше уточнить не бросил ли я заниматься в зале =)',
    links: [
      'https://www.ozon.ru/product/lyamki-sportivnye-dlya-stanovoy-tyagi-2608747560/?_bctx=CAQQ9takAQ&at=GRt2kLqYxujr3P91SApK1BvCX3vlRKirg2rXXcv3n1J7&hs=1',
    ],
  },
  {
    imageUrl: [ImageFunkoPopDemonSlayerAkaza2, ImageFunkoPopDemonSlayerAkaza1],
    title: 'Funko Pop! Demon Slayer Akaza',
    description:
      'Ко мне как раз едет фигурка Premium Kyojuro Rengoku (9th Form), и я думаю те кто смотрел КРД понимают почему эти фигурки точно будут сочитаться. Также в ссылочке показал красивого Кеджуро который вот вот у меня будет))',
    links: [
      'https://funko.com/pop-akaza/86505.html',
      'https://funko.com/pop-premium-kyojuro-rengoku-9th-form/85001.html',
    ],
  },
  {
    imageUrl: [
      ImageFunkoPopDemonSlayerTomioka1,
      ImageFunkoPopDemonSlayerTomioka2,
    ],
    title: 'Funko Pop! Demon Slayer Giyu Tomioka',
    description:
      'Кеджуро и Тамиока самые любимые хаширо =)\n\nТолько достать будет трудно, лимитка(',
    links: ['https://www.ebay.com/itm/314117106114'],
  },
  {
    imageUrl: ImageIPadSrc,
    title: 'Какой-нибудь iPad',
    description:
      'Смотреть кино/аниме, играть в hearthstone, может код-ревью смотреть',
    links: ['https://www.apple.com/ipad-11/'],
  },
  {
    imageUrl: [
      ImageInstax1Src,
      ImageInstax2Src,
      ImageInstax3Src,
      ImageInstax4Src,
      ImageInstax5Src,
      ImageInstax6Src,
    ],
    title: 'Instax mini Evo™ BROWN',
    description:
      'Хочу Instax для моментальных фотографий — это как вернуть пленочную магию, но в современном стиле!',
    links: ['https://instax.com/mini_evo/en/'],
  },
  {
    imageUrl: ImageEasyFeedPro,
    title: 'Автоматическая кормушка для Астры',
    description:
      '\n• Задать расписание кормлений' +
      '\n• Настроить объём порций' +
      '\n• Общаться с питомцем благодаря двусторонней аудиосвязи' +
      '\n• Получать уведомления о кормлении и уровне корма' +
      '\n• Вы видите и контролируете всё — где бы ни находились',
    links: ['https://ozon.ru/t/l7ig4kg'],
  },
  {
    imageUrl: ImageMagicSpin,
    title: 'Игрушка Magic Spin для Астры',
    description: 'Прятки и охота код ковриком',
    links: ['https://ozon.ru/t/1Gvmd1q'],
  },
  {
    imageUrl: ImageMagicBounce,
    title: 'Игрушка Magic Bounce для Астры',
    description: 'Прыгающая мышка, которой не ускользнуть',
    links: ['https://ozon.ru/t/fAFPYJ4', 'https://ozon.ru/t/39wZqyN'],
  },
  {
    imageUrl: [ImagePetKitToilet1, ImagePetKitToilet2, ImagePetKitToilet3],
    title: 'Автоматический лоток PETKIT',
    description: 'ВАЩЕ ЛЮБОЙ, ПУСКАЙ ХОТЬ У КОШКИ БУДЕТ КОСМОЛЕТ!!1',
    links: [
      'https://petkit.com.ru/product/avtomaticheskiy-lotok-s-ai-kameroy-purobot-ultra-petkit',
      'https://petkit.com.ru/product/avtomaticheskiy-lotok-s-ai-kameroy-purobot-max-pro-petkit',
      'https://petkit.com.ru/product/avtomaticheskiy-lotok-pura-max',
    ],
  },
];
