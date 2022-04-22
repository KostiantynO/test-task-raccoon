import scss from './premium-offer.module.scss';

export const premiumOfferItem = ({
  webp = '',
  webp2x = '',
  name = '',
  hashLink = '',
}) => `
<li class="${scss.item}">
  <a href="#${hashLink}" class="${scss.link}">
    <div class="${scss.thumb}">
      <img class="${scss.image}" srcset="${webp},
                  ${webp2x} 2x"
        src="${webp}"
        alt="${name}"
      >
    </div>
  </a>

</li>`;
