import { featuredProductList } from './js/featured-products';
import { moreProductsList } from './js/more-products';
import { getRefs } from './js/getRefs';
import './scss/main.scss';
import { insertMarkup } from './js/utils';
import { premiumOfferContent } from './js/premium-offer/premium-offer';
import { initListeners } from './js/event-listeners';

const { featuredProducts, moreProducts, premiumOffer } = getRefs();

insertMarkup(featuredProducts, featuredProductList);
insertMarkup(moreProducts, moreProductsList);
insertMarkup(premiumOffer, premiumOfferContent);
initListeners();
