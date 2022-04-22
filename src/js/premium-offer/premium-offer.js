import { list, makeItemsMarkup } from '../utils';
import { premiumOfferItem } from './premium-offer-item';
import scss from './premium-offer.module.scss';

const importAll = r => r.keys().map(r);

const images = importAll(
  require.context(
    '../../assets/images/photos/premium-offer/',
    false,
    /\.(png|webp|jpe?g|svg)$/
  )
);

const premiumOffer = [
  {
    webp: images[0],
    webp2x: images[1],
    name: 'Red Love Cup',

    hashLink: 'premium-offer',
  },
  {
    webp: images[2],
    webp2x: images[3],
    name: 'Red Love Cup',

    hashLink: 'premium-offer',
  },
  {
    webp: images[4],
    webp2x: images[5],
    name: 'Red Love Cup',

    hashLink: 'premium-offer',
  },
];

const premiumOfferMarkup = makeItemsMarkup(premiumOffer, premiumOfferItem);
const leftSide = list(premiumOfferMarkup, scss.list);

const rightSide = `
<div class="${scss.helloWorld}">
  <p class="${scss.rightTitle}">Premium Offer</p>
  <h2 class="${scss.callToAction}">Get our Coffee Magazine</h2>
  <p class="${scss.offerDescription}">The most versatile furniture system ever created. Designed to fit your life.</p>
  <button
    class="${scss.startShoppingButton}"
    type="button"
    data-open-premium-offer
  >
    Start Shopping
  </button>
</div>
`;
export const premiumOfferContent = `
<div class="${scss.flexWrapper}">
  ${leftSide}
  ${rightSide}
</div>
`;
