import ImageInstax1Src from '/public/images/wishlist/instax_1.webp';
import ImageInstax2Src from '/public/images/wishlist/instax_2.webp';
import ImageInstax3Src from '/public/images/wishlist/instax_3.webp';
import ImageInstax4Src from '/public/images/wishlist/instax_4.png';
import ImageInstax5Src from '/public/images/wishlist/instax_5.webp';
import ImageInstax6Src from '/public/images/wishlist/instax_6.webp';
import ImageCrocsSrc from '/public/images/wishlist/crocs.jpeg';
import ImageCrocsTanjiroSrc from '/public/images/wishlist/crocsTanjiro.jpg';
import ImageCrocsTomiokaSrc from '/public/images/wishlist/crocsTomioka.jpg';
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

export interface WishListItem {
  imageUrl: string | string[];
  title: string;
  description?: string;
  links?: string[];
}

export const wishListMock: WishListItem[] = [
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
    imageUrl: [
      ImageZenitsuHoodieOne,
      ImageZenitsuHoodieTwo,
      ImageZenitsuHoodieThree,
    ],
    title: 'Худи с Зеницу Агацума',
    description:
      'Один из двух тритагонистов (наряду с Иноске Хашибирой) аниме и манги 2016 года Истребитель демонов, но любимый конечно Кёджуро Ренгоку, но худака красивого с ним нет >.<',
    links: ['https://nikifilini.com/product/hudi-demon-slayer-sr/'],
  },
  {
    imageUrl: ImageIPadSrc,
    title: 'Какой-нибудь iPad',
    description:
      'Смотреть кино/аниме, играть в hearthstone, может код-ревью смотреть',
    links: ['https://www.apple.com/ipad-11/'],
  },
  {
    imageUrl: [ImageCrocsSrc, ImageCrocsTomiokaSrc, ImageCrocsTanjiroSrc],
    title: 'Crocs Сабо Бежевые',
    description: 'Удобные тапки, особенно с Гию Томиока',
    links: ['https://www.lamoda.ru/p/rtlaed367101/shoes-crocs-sabo/'],
  },
  {
    imageUrl: [
      ImageGuardianofFaithBelt1,
      ImageGuardianofFaithBelt2,
      ImageGuardianofFaithBelt3,
      ImageGuardianofFaithBelt4,
    ],
    title: 'Страж Веры Пояс',
    description:
      'Для качалки, я ж тебе качаюсь!\n\nСтановую тягу приседания таааам и всякое другое другое, думаю вот пояс нужен, к зиме уже буду нормальные веса брать! Голубой цвет кайф) Мой текущий обхват талии 89 см.\n\nНа момент покупки лучше уточнить не бросил ли я заниматься в зале =)',
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
      'Для качалки, я ж тебе качаюсь (часть 2)\n\nСтановую тягу подятгивания таааам и всякое другое другое, думаю вот лямки нужны чтобы изолировать руки там где другие группы мыщц будут работать\n\nНа момент покупки лучше уточнить не бросил ли я заниматься в зале =)',
    links: [
      'https://www.ozon.ru/product/lyamki-sportivnye-dlya-stanovoy-tyagi-2608747560/?_bctx=CAQQ9takAQ&at=GRt2kLqYxujr3P91SApK1BvCX3vlRKirg2rXXcv3n1J7&hs=1',
    ],
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
    links: ['https://ozon.ru/t/39wZqyN'],
  },
  {
    imageUrl: ImageMagicBounce,
    title: 'Игрушка Magic Bounce для Астры',
    description: 'Прыгающая мышка, которой не ускользнуть',
    links: ['https://ozon.ru/t/1Gvmd1q'],
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
