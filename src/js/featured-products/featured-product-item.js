import scss from './featured-product-list.module.scss';

export const featuredProductItem = ({
  name = '',
  webp = '',
  webp2x = '',
  normalPrice = '',
  salePrice = '',
}) => `
<li class="${scss.item}">
  <div class="${scss.thumb}">
    <img srcset="${webp},
                 ${webp2x} 2x"
      src="${webp}"
      alt="${name}"
    >
  </div>

  <div class=${scss.meta}>
    <p class="${scss.name}">${name}</p>

    <div class="${scss.prices}">


        ${
          salePrice
            ? `
<span class="${scss.salePrice}">${salePrice}</span>
<span class="${scss.oldPrice}">${normalPrice}</span>`
            : `<span class="${scss.normalPrice}">${normalPrice}</span>`
        }
    </div>
  </div>

</li>`;
