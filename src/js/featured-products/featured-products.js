import { list, makeItemsMarkup } from '../utils';
import { featuredProductItem } from './featured-product-item';

import imageA from '../../assets/images/photos/featured/golden-designers-mug.webp';
import imageA2x from '../../assets/images/photos/featured/golden-designers-mug@2x.webp';
import imageB from '../../assets/images/photos/featured/pink-premium-ceramic.webp';
import imageB2x from '../../assets/images/photos/featured/pink-premium-ceramic@2x.webp';

import scss from './featured-product-list.module.scss';

const products = [
  {
    name: 'golden designers mug',
    webp: imageA,
    webp2x: imageA2x,
    salePrice: '',
    normalPrice: '$99 USD',
  },
  {
    name: 'pink premium ceramic',
    webp: imageB,
    webp2x: imageB2x,
    salePrice: '$50.00',
    normalPrice: '$ 69.00 USD',
  },
];

export const featuredProductsMarkup = makeItemsMarkup(
  products,
  featuredProductItem
);

export const featuredProductList = list(featuredProductsMarkup, scss.list);
