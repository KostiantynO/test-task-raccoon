export const productItem = (
  {
    name = '',
    webp = '',
    webp2x = '',
    normalPrice = '',
    salePrice = '',
    hashLink = '',
  },
  scss
) => `
<li class="${scss.item}">
  <a href="#${hashLink}" class="${scss.link}">
    <div class="${scss.thumb}">
      <img class="${scss.image}" srcset="${webp},
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
  </a>

</li>`;
