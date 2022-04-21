import { featuredProductItem } from '../featured-products/featured-product-item';
import { list, makeItemsMarkup } from '../utils';

import scss from './more-products-list.module.scss';

const importAll = r => r.keys().map(r);

const images = importAll(
  require.context(
    '../../assets/images/photos/more/',
    false,
    /\.(png|webp|jpe?g|svg)$/
  )
);

const moreProducts = [
  {
    name: 'Red Love Cup',
    webp: images[0].default,
    webp2x: images[1].default,
    salePrice: '$25.00',
    normalPrice: '$ 37.00 USD',
  },
];

export const moreProductsMarkup = makeItemsMarkup(
  moreProducts,
  featuredProductItem
);

export const moreProductsList = list(moreProductsMarkup, scss.list);
