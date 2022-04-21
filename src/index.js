import { featuredProductsMarkup } from './js/featured-products';
import { moreProductsMarkup } from './js/more-products';
import { getRefs } from './js/getRefs';
import './scss/main.scss';
import { insertMarkup } from './js/utils';

const { featuredProducts, moreProducts } = getRefs();

insertMarkup(featuredProducts, featuredProductsMarkup);
insertMarkup(moreProducts, moreProductsMarkup);
