import forms from './modules/form.js';
import fullScreen from './modules/fullScreen.js';
import carousel from './modules/carousel.js';
import reviews from './modules/reviews.js';
import popup from './modules/popup.js';

window.addEventListener('DOMContentLoaded', () => {

    carousel('.slider__container',
            '.slider__track',
            '.slider__item',
            '.slider__prev',
            '.slider__next',
            3,
            1);
 
    forms();
    fullScreen();
    reviews();

    popup('.reviews__btn',
          '.reviews__popup');























});