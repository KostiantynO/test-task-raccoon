import { featuredProductList } from './js/featured-products';
import { moreProductsList } from './js/more-products';
import { getRefs } from './js/getRefs';
import './scss/main.scss';
import { insertMarkup } from './js/utils';

const { featuredProducts, moreProducts } = getRefs();

insertMarkup(featuredProducts, featuredProductList);
insertMarkup(moreProducts, moreProductsList);
moreProductsList;
