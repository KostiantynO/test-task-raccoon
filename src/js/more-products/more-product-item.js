export const moreProductItem = ({
  name = '',
  webp = '',
  webp2x = '',
  basePrice = '',
  discountPrice = '',
}) => `
<li class="more-product__item">
  <div class="more-product__thumb">
    <img srcset="${webp},
                 ${webp2x} 2x"
      src="${webp}"
      alt="${name}"
    >
  </div>

  <div class="more-product__meta">
    <p class="more-product__name">${name}</p>

    <div class="more-product__prices">
        <span class="more-product__price--base">${basePrice}</span>
        ${discountPrice && `<span class="more-product__price--discount">${discountPrice}</span>`}
    </div>
  </div>

</li>`;
