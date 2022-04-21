export const featuredProductItem = ({
  name = '',
  webp = '',
  webp2x = '',
  basePrice = '',
  discountPrice = '',
}) => `
<li class="featured-product__item">
  <div class="featured-product__thumb">
    <img srcset="${webp},
                 ${webp2x} 2x"
      src="${webp}"
      alt="${name}"
    >
  </div>

  <div class="featured-product__meta">
    <p class="featured-product__name">${name}</p>

    <div class="featured-product__prices">
        <span class="featured-product__price--base">${basePrice}</span>
        ${
          discountPrice && `<span class="featured-product__price--discount">${discountPrice}</span>`
        }
    </div>
  </div>

</li>`;
