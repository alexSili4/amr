import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviewsSlider = new Swiper('.js-reviews-slider', {
  modules: [Navigation, Pagination, EffectCoverflow],
  autoHeight: true,
  direction: 'horizontal',
  centeredSlides: true,
  loop: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
  },
  spaceBetween: 32,
  slidesPerView: 'auto',
  speed: 800,
  grabCursor: true,
  breakpoints: {
    1440: {
      spaceBetween: -100,
      coverflowEffect: {
        rotate: 0,
        scale: 0.66,
        slideShadows: false,
      },
    },
  },
  pagination: {
    el: '.landing-reviews-slider-pagination',
    clickable: true,
    renderBullet: (index, className) => `<div class="landing-reviews-slider-pagination-item ${className}"></div>`,
  },

  navigation: {
    nextEl: '.js-landing-reviews-slider-btn-next',
    prevEl: '.js-landing-reviews-slider-btn-prev',
  },
});
