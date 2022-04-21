import { makeItemsMarkup } from '../utils';
import { featuredProductItem } from './featured-product-item';

import imageA from '../../images/photos/golden-designers-mug.webp';
import imageA2x from '../../images/photos/golden-designers-mug@2x.webp';
import imageB from '../../images/photos/pink-premium-ceramic.webp';
import imageB2x from '../../images/photos/pink-premium-ceramic@2x.webp';

const products = [
  {
    name: 'golden designers mug',
    webp: imageA,
    webp2x: imageA2x,
    basePrice: '$99 USD',
    discountPrice: '',
  },
  {
    name: 'pink premium ceramic',
    webp: imageB,
    webp2x: imageB2x,
    basePrice: '$99 USD',
    discountPrice: '$55 USD',
  },
];

export const featuredProductsMarkup = makeItemsMarkup(products, featuredProductItem);
