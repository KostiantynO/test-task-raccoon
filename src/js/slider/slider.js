import { tns } from 'tiny-slider';

// import scssFeaturedProduct from '../featured-products/featured-products-list.module.scss';
import scssMoreProduct from '../more-products/more-products-list.module.scss';

const config = {
  gutter: 0,
  mouseDrag: true,
  swipeAngle: false,
  speed: 250,
  slideBy: 'page',
  autoplay: true,
  controls: false,
  center: true,
  fixedWidth: 300,
  navPosition: 'bottom',
};

export const initSlider = () => {
  let sliderMoreProducts = tns({
    container: `.${scssMoreProduct.listWithSlider}`,

    ...config,

    responsive: {
      640: {
        items: 2,
        edgePadding: 20,
        gutter: 20,
      },
      768: {
        items: 2,
        edgePadding: 20,
        gutter: 20,
      },
      1440: {
        items: 3,
        edgePadding: 20,
        gutter: 20,
      },
    },
  });

  console.log({ sliderMoreProducts });
};

//   startIndex,
//   items,
//   slideBy,
//   speed,
//   autoHeight,
//   fixedWidth,
//   edgePadding,
//   gutter,
//   center,
//   controls,
//   controlsText,
//   nav,
//   autoplay,
//   autoplayHoverPause,
//   autoplayResetOnVisibility,
//   autoplayText,
//   autoplayTimeout,
//   touch,
//   mouseDrag,
//   arrowKeys,
//   disable;
