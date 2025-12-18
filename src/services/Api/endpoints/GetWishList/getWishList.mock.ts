import ImageSurpriseMazafaka from '/public/images/wishlist/surpriseMazafaka.jpg';

export interface WishListItem {
  imageUrl: string | string[];
  title: string;
  description?: string;
  links?: string[];
}

export const wishListMock: WishListItem[] = [
  {
    imageUrl:
      'https://storage.yandexcloud.net/anki.team/iblock/3c2/3c2034a1bac0765febd998dc40c3f4f7/e8c5bdac1f1bb2bd17ff8648cbf09550.jpg',
    title: 'Adidas Originals Puffylette✨',
    description: 'красивые кроссы, у меня 28.5см нога, это 45 или 44.5 размер',
  },
  {
    imageUrl: ImageSurpriseMazafaka,
    title: 'Денежка на весенний эпик✨',
    description:
      'Секретное весеннее событие! Деньги уйдут на эпик, обещаю челюсти на полу)',
  },
];
