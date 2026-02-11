export interface WishListItem {
  imageUrl: string | string[];
  title: string;
  description?: string;
  links?: string[];
}

export const wishListMock: WishListItem[] = [
  {
    imageUrl: [
      'https://nikifilini.com/wp-content/uploads/2025/09/benzopila-hudak-scaled.jpg',
      'https://nikifilini.com/wp-content/uploads/2025/09/benzopila-hudak-z-scaled.jpg',
    ],
    title: '#Одежда ХУДИ | DENJI (R)',
    description:
      'Подборка худи которые мне понравились, их порядок не важен, поэтому у всех #2. Для размерной сетки у меня 192 роста, думаю можно XL брать',
    links: ['https://nikifilini.com/product/hudi-denji-r/'],
  },
  {
    imageUrl: [
      'https://nikifilini.com/wp-content/uploads/2024/12/DEMON_SLAYER_Sr_20.01.25_1.jpg',
      'https://nikifilini.com/wp-content/uploads/2024/12/zenitsu-pered-pravki-scaled.jpg',
      'https://nikifilini.com/wp-content/uploads/2024/12/DEMON_SLAYER_26.12.24_1.jpg',
      'https://nikifilini.com/wp-content/uploads/2024/12/DEMON_SLAYER_Sr_20.01.25.jpg',
    ],
    title: '#Одежда ХУДИ | DEMON SLAYER (SR)',
    description:
      'Подборка худи которые мне понравились, их порядок не важен, поэтому у всех #2. Для размерной сетки у меня 192 роста, думаю можно XL брать',
    links: ['https://nikifilini.com/product/hudi-demon-slayer-sr/'],
  },
  {
    imageUrl: [
      'https://nikifilini.com/wp-content/uploads/2022/09/HUDI-ICHIGO-6-scaled.jpeg',
      'https://nikifilini.com/wp-content/uploads/2022/09/HOODIE-ICHIGO-FRONT-scaled.jpg',
      'https://nikifilini.com/wp-content/uploads/2022/09/HOODIE-ICHIGO-BACK-scaled.jpg',
      'https://nikifilini.com/wp-content/uploads/2022/09/HUDI-ICHIGO-7-scaled.jpeg',
    ],
    title: '#Одежда ХУДИ | ICHIGO',
    description:
      'Подборка худи которые мне понравились, их порядок не важен, поэтому у всех #2. Для размерной сетки у меня 192 роста, думаю можно XL брать',
    links: ['https://nikifilini.com/product/hoodie-ichigo/'],
  },
  {
    imageUrl: [
      'https://nikifilini.com/wp-content/uploads/2022/03/HOODIE-JOTARO-FRONT-scaled.jpg',
      'https://nikifilini.com/wp-content/uploads/2022/03/HOODIE-JOTARO-BACK-scaled.jpg',
    ],
    title: '#Одежда ХУДИ | JOTARO',
    description:
      'Подборка худи которые мне понравились, их порядок не важен, поэтому у всех #2. Для размерной сетки у меня 192 роста, думаю можно XL брать',
    links: ['https://nikifilini.com/product/hoodie-jotaro/'],
  },
  {
    imageUrl: [
      'https://optim.tildacdn.com/stor3532-3362-4461-a366-326366386635/-/format/webp/29307006.jpg.webp',
      'https://optim.tildacdn.com/stor3462-3931-4966-b639-396532363134/-/format/webp/24635095.jpg.webp',
    ],
    title: '#Одежда Штаны от Rice Wear',
    description:
      'Прикольные брюки свободной формы, широкие брюки с чёткой геометрией (типа как куртки стёжки нравится стиль) и расслабленным объёмом мне нравится мб такие или чего подешевле. Широкие карго у них тоже классные\n\nРост у меня 192 а талия 100, для размерной сетки =)',
    links: [
      'https://ricewear.com/shop/pants/tproduct/1215976646-458778662612-oversize-wool-rip-stop-pants',
      'https://ricewear.com/shop/pants/tproduct/1215976646-542257036772-kinomo-oversize-pants',
    ],
  },
  {
    imageUrl:
      'https://kolesa-uploads.ru/-/e2ed8e69-2cdf-4218-a678-fd0712865412/zaglavnaya1-kopiya.jpg',
    title: '#Денежка на машину✨',
    description:
      'Если кто не в курсе, я тут в автошколе учусь и коплю денежку на машину)',
  },
  {
    imageUrl: 'https://i.ebayimg.com/images/g/I4QAAOSwcm1kMgqd/s-l1200.jpg',
    title: 'Что дарить точно не нужно?',
    description: '- Набор для настоек или что-то с этим связанное\n- Спортивное питание или что-то для зала\n- Что-то для компа (наушники, мышку, клаву)\n- Колонку, в моем доме насчитывается уже 5 колонок)',
  },
  {
    imageUrl:
      'https://icdn.lenta.ru/images/2025/05/13/18/20250513184900219/square_1280_6bab20e6f097e07a2b1b410b55cdc4a8.jpg',
    title: 'Долистал до конца и ничего не подошло?',
    description:
      'Серьезно? Вообще если собрался что-то дарить ты знаешь что я люблю или не люблю, го это будет сюрприз для меня)',
  },
];
