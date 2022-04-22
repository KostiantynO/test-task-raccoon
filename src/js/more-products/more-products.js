import { list, makeItemsMarkup } from '../utils';
import { moreProductItem } from './more-product-item';

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
    webp: images[0],
    webp2x: images[1],
    name: 'Red Love Cup',
    salePrice: '$25.00',
    normalPrice: '$ 37.00 USD',
    hashLink: 'more-products',
  },
  {
    webp: images[2],
    webp2x: images[3],
    name: 'Black Tea Cup',
    salePrice: '$15.00',
    normalPrice: '$ 29.00 USD',
    hashLink: 'more-products',
  },
  {
    webp: images[4],
    webp2x: images[5],
    name: 'B&W Essentials Mug',
    salePrice: '',
    normalPrice: '$ 19.00 USD',
    hashLink: 'more-products',
  },
  {
    webp: images[6],
    webp2x: images[7],
    name: 'Winter Style Mug',
    salePrice: '',
    normalPrice: '$ 25.00 USD',
    hashLink: 'more-products',
  },
  {
    webp: images[8],
    webp2x: images[9],
    name: 'Ceramic Tea',
    salePrice: '',
    normalPrice: '$ 46.00 USD',
    hashLink: 'more-products',
  },
  {
    webp: images[10],
    webp2x: images[11],
    name: 'No Handle Bar Cup',
    salePrice: '',
    normalPrice: '$ 34.00 USD',
    hashLink: 'more-products',
  },
];

const moreProductsMarkup = makeItemsMarkup(moreProducts, moreProductItem);

export const moreProductsList = list(moreProductsMarkup, scss.listWithSlider);
