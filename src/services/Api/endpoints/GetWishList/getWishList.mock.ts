import ImageAutoSrc from '/public/images/wishlist/autoschool.jpg';
import ImageInstaxSrc from '/public/images/wishlist/instax.jpg';
import ImageMacSrc from '/public/images/wishlist/mac.webp';
import ImagePS5ProSrc from '/public/images/wishlist/playstation.jpeg';
import ImageCoffeeSrc from '/public/images/wishlist/coffee.webp';
import ImageCrocsSrc from '/public/images/wishlist/crocs.jpeg';

export const wishListMock = [
  {
    imageUrl: ImageInstaxSrc,
    title: 'Instax mini Evo™ BROWN',
    description:
      'Хочу Instax для моментальных фотографий — это как вернуть пленочную магию, но в современном стиле!',
    links: ['https://instax.com/mini_evo/en/'],
    gifted: false,
  },
  {
    imageUrl: ImageCrocsSrc,
    title: 'Crocs Сабо Бежевые',
    description: 'Удобные тапки, мой размерчик 11.5 US',
    links: ['https://www.lamoda.ru/p/rtlaed367101/shoes-crocs-sabo/'],
    gifted: false,
  },
  {
    imageUrl: ImageMacSrc,
    title: 'MacBook M4 Pro 14-inch',
    description:
      'Мощный MacBook Pro для продуктивной работы и творческих задач',
    links: ['https://apple.com/macbook-pro'],
    gifted: false,
  },
  {
    imageUrl: ImagePS5ProSrc,
    title: 'PlayStation 5 Pro',
    description: 'Для чилла и игр — идеальный способ расслабиться)',
    links: ['https://www.playstation.com/en-us/ps5/ps5-pro/'],
    gifted: false,
  },
  {
    imageUrl: ImageAutoSrc,
    title: 'Обучение в автошколе',
    description:
      'Хочу получить права, чтобы быть свободным в перемещениях и путешествовать за рулем ну и как в NSF гонять',
    gifted: false,
  },
];
