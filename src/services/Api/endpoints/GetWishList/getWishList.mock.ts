import ImageInstax1Src from '/public/images/wishlist/instax_1.webp';
import ImageInstax2Src from '/public/images/wishlist/instax_2.webp';
import ImageInstax3Src from '/public/images/wishlist/instax_3.webp';
import ImageInstax4Src from '/public/images/wishlist/instax_4.png';
import ImageInstax5Src from '/public/images/wishlist/instax_5.webp';
import ImageInstax6Src from '/public/images/wishlist/instax_6.webp';
import ImageJotaroHoodie from '/public/images/wishlist/jotaroHoodie.webp';
import ImageJotaroTShort from '/public/images/wishlist/jotaroTShort.webp';
import ImageZenitsuHoodieOne from '/public/images/wishlist/zenitsuHoodieOne.webp';
import ImageZenitsuHoodieTwo from '/public/images/wishlist/zenitsuHoodieTwo.webp';
import ImageZenitsuHoodieThree from '/public/images/wishlist/zenitsuHoodieThree.webp';

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
      'Один из двух тритагонистов (наряду с Иноске Хашибирой) аниме и манги 2016 года Истребитель демонов',
    links: ['https://nikifilini.com/product/hudi-demon-slayer-sr/'],
  },
  {
    imageUrl: [ImageJotaroHoodie, ImageJotaroTShort],
    title: 'Любой мерч с Джо Джо',
    description: 'В особенности селедующие две позиции худи и футболка',
    links: [
      'https://nikifilini.com/product/hoodie-jotaro/',
      'https://nikifilini.com/product/futbolka-jotaro-himself/',
    ],
  },
  {
    imageUrl: [
      'https://nikifilini.com/wp-content/uploads/2025/09/benzopila-hudak-scaled.jpg',
      'https://nikifilini.com/wp-content/uploads/2025/09/benzopila-hudak-z-scaled.jpg',
    ],
    title: 'Худи с Дэнджи',
    description: 'Главный герой аниме Тацуки Фудзимото «Chainsaw Man»',
    links: ['https://nikifilini.com/product/hudi-denji-r/'],
  },
  // {
  //   imageUrl: [
  //     'https://mir-kubikov.ru/upload/iblock/795/cg26gki07kzes5qmum1a7lqu4jjhltcu.jpg',
  //     'https://mir-kubikov.ru/upload/iblock/5cb/s3k9tjfhh0ym50qj2403o84ddqppzxvs.jpg',
  //   ],
  //   title: 'Конструктор LEGO Властелин колец: Книжный уголок Балрога',
  //   description: 'С детства люблю LEGO и Властелин колец',
  //   links: [
  //     'https://www.ozon.ru/product/konstruktor-lego-icons-vlastelin-kolets-knizhnyy-ugolok-balroga-1201-detaley-vozrast-18-10367-2268049364/?_bctx=CAYQpopi&at=jYtZNgK9KIpZxl2VHlPx9ZWSzkQB7LurZQvvMSrvZ3G0',
  //   ],
  // },
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
