import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviewsSliderClassName = '.js-reviews-slider';

const reviewsSlider = new Swiper(reviewsSliderClassName, {
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
  on: {
    slideChange: function () {
      const slider = document.querySelector(reviewsSliderClassName);
      const videos = slider.querySelectorAll('video');

      videos.forEach((video) => {
        video.pause();
        video.classList.remove('is-play');
      });
    },
  },
});

const experiencedTeachersCardSlider = new Swiper('.js-experienced-teachers-card-slider', {
  modules: [Autoplay],
  autoHeight: true,
  spaceBetween: 30,
  speed: 1000,
  allowTouchMove: false,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: false,
    waitForTransition: false,
  },
});
