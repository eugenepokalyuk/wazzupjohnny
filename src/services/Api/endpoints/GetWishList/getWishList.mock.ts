import ImageSurpriseMazafaka from '/public/images/wishlist/surpriseMazafaka.jpg';

export interface WishListItem {
  imageUrl: string | string[];
  title: string;
  description?: string;
  links?: string[];
}

export const wishListMock: WishListItem[] = [
  {
    imageUrl: ImageSurpriseMazafaka,
    title: 'Денежка на весенний эпик ✨',
    description: 'Секретное весеннее событие! Деньги уйдут на эпик, обещаю челюсти на полу)',
  },
];
