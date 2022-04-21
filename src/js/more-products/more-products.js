import { makeItemsMarkup } from '../utils';
import { moreProductItem } from './more-product-item';

const moreProducts = [
  {
    name: 'product 1',
    webp: '',
    webp2x: '',
  },
];

export const moreProductsMarkup = makeItemsMarkup(moreProducts, moreProductItem);
