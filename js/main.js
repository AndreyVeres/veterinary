import forms from './modules/form.js';
import fullScreen from './modules/fullScreen.js';
import carousel from './modules/carousel.js';
import reviews from './modules/reviews.js';
import popup from './modules/popup.js';
import dropdown from './modules/dropdown.js';
import smoothScroll from './modules/smoothScroll.js';
import scrollToTop from './modules/ScrollToTop.js';

window.addEventListener('DOMContentLoaded', () => {
        carousel('.slider__container', '.slider__track', '.slider__item', '.slider__prev', '.slider__next', 3, 1);
        forms('form');
        fullScreen();
        reviews();
        scrollToTop('.arrowToTop')
        popup('.reviews__btn', '.reviews__popup');
        dropdown();
        smoothScroll('.footer__btn' , '.reception');
        popup('.calldoctor' , '.calldoctor__popup');
        popup('.orange__btn' , '.registration__popup');
});


