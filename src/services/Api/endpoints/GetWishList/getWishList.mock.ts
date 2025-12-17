import ImageInstax1Src from '/public/images/wishlist/instax_1.webp';
import ImageInstax2Src from '/public/images/wishlist/instax_2.webp';
import ImageInstax3Src from '/public/images/wishlist/instax_3.webp';
import ImageInstax4Src from '/public/images/wishlist/instax_4.png';
import ImageInstax5Src from '/public/images/wishlist/instax_5.webp';
import ImageInstax6Src from '/public/images/wishlist/instax_6.webp';
import ImageSurpriseMazafaka from '/public/images/wishlist/surpriseMazafaka.jpg';

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
    description: 'Хочу Instax для моментальных фотографий - это как вернуть пленочную магию, но в современном стиле!',
    links: ['https://instax.com/mini_evo/en/'],
  },
  {
    imageUrl: ImageSurpriseMazafaka,
    title: 'Денежка на весенний эпик ✨',
    description: 'Секретное весеннее событие! Деньги уйдут на эпик, обещаю челюсти на полу)',
  },
];
