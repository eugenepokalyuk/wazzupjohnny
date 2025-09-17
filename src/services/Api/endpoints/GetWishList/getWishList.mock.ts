import ImageAutoSrc from '/public/images/wishlist/autoschool.jpg';
import ImageInstaxSrc from '/public/images/wishlist/instax.jpg';
import ImageMacSrc from '/public/images/wishlist/mac.webp';
import ImagePS5ProSrc from '/public/images/wishlist/playstation.jpeg';
import ImageCrocsSrc from '/public/images/wishlist/crocs.jpeg';
import ImageCrocsTanjiroSrc from '/public/images/wishlist/crocsTanjiro.jpg';
import ImageCrocsTomiokaSrc from '/public/images/wishlist/crocsTomioka.jpg';
import ImageIPadSrc from '/public/images/wishlist/ipad.jpg';
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
    imageUrl: ImageAutoSrc,
    title: 'Обучение в автошколе',
    description:
      'Хочу получить права, чтобы быть свободным в перемещениях и путешествовать за рулем ну и как в NSF гонять',
  },
  {
    imageUrl: ImageInstaxSrc,
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
    imageUrl: ImageMacSrc,
    title: 'MacBook Pro',
    description:
      'Правда с диагональю не решил, 14 или 16 дюймов, как думаешь какой выбрать? Мощный макбук про для работки и творческих задачек. Думаю брать от чипа М4',
    links: ['https://apple.com/macbook-pro'],
  },
  {
    imageUrl: ImagePS5ProSrc,
    title: 'PlayStation 5 Pro',
    description:
      'Для чилла и игр — идеальный способ расслабиться, и в нфс погонять, если будет прошка куплю руль))',
    links: ['https://www.playstation.com/en-us/ps5/ps5-pro/'],
  },
];
