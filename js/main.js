import forms from './modules/form.js';
import fullScreen from './modules/fullScreen.js';
import carousel from './modules/carousel.js';
import reviews from './modules/reviews.js';
import popup from './modules/popup.js';
import dropdown from './modules/dropdown.js';
import smoothScroll from './modules/smoothScroll.js';

window.addEventListener('DOMContentLoaded', () => {

        carousel('.slider__container', '.slider__track', '.slider__item', '.slider__prev', '.slider__next', 3, 1);
        forms('.checklist__form');
        forms('.reception__form');
        // forms('.registration__form-popup')
        fullScreen();
        reviews();
        popup('.reviews__btn', '.reviews__popup');
        dropdown();
        smoothScroll();
});