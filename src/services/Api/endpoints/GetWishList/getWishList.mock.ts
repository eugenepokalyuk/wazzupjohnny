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
      ImageZenitsuHoodieOne,
      ImageZenitsuHoodieTwo,
      ImageZenitsuHoodieThree,
    ],
    title: 'Худи с Зеницу Агацума',
    description:
      'Один из двух тритагонистов (наряду с Иноске Хашибирой) аниме и манги 2016 года Истребитель демонов, но любимый конечно Кёджуро Ренгоку, но худака красивого с ним нет >.<\n\nСейчас на него скидон нормальный',
    links: ['https://nikifilini.com/product/hudi-demon-slayer-sr/'],
  },
  {
    imageUrl: [
      ImageGuardianofFaithBelt1,
      ImageGuardianofFaithBelt2,
      ImageGuardianofFaithBelt3,
      ImageGuardianofFaithBelt4,
      ImageGuardianofFaithStraps1,
      ImageGuardianofFaithStraps2,
      ImageGuardianofFaithStraps3,
      ImageGuardianofFaithStraps4,
    ],
    title: 'Страж Веры Пояс или Лямки для становой',
    description:
      'Для качалки, я ж теперь качаюсь!\n\nСтановую тягу приседания таааам и всякое другое другое, думаю вот пояс нужен, к зиме уже буду нормальные веса брать, а лямки нужны чтобы изолировать руки там где другие группы мыщц не должно работать! У пояса голубой цвет кайф) Мой текущий обхват талии 89 см.\n\nНа момент покупки лучше уточнить не бросил ли я заниматься в зале =)',
    links: [
      'https://www.ozon.ru/product/lyamki-sportivnye-dlya-stanovoy-tyagi-2608747560/?_bctx=CAQQ9takAQ&at=GRt2kLqYxujr3P91SApK1BvCX3vlRKirg2rXXcv3n1J7&hs=1',
      'https://ozon.ru/t/39wZqyN',
    ],
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
];
