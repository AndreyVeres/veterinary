const slider = () => {
    let position = 0;
    const slideToShow = 3;
    const slideToScroll = 3;
    const container = document.querySelector('.slider__container');
    const track = document.querySelector('.slider__track');
    const prevBtn = document.querySelector('.slider__prev');
    const nextBtn = document.querySelector('.slider__next');
    const items = document.querySelectorAll('.slider__item');
    const itemsCount = items.length;
    const itemWidth = items[0].clientWidth;
    const movePosition = slideToScroll * itemWidth;

    nextBtn.addEventListener('click' , ()=> {
        const itemLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth ;
        console.log(track.clientWidth)
        position -= itemLeft >=slideToScroll ? movePosition : itemLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    prevBtn.addEventListener('click' , ()=> {
        const itemLeft = Math.abs(position) / itemWidth ;
        // console.log(itemWidth)
        position += itemLeft >=slideToScroll ? movePosition : itemLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}`;
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px) `;
    };

    const checkBtns = () => {
        prevBtn.disabled = position === 0;
        nextBtn.disabled = position <= -(itemsCount - slideToShow) * itemWidth;
    };
 

};


export default slider;







// let position = 0;
// const prevBtn = document.querySelector('.slider__prev');
// const nextBtn = document.querySelector('.slider__next');
// const sliderTrack = document.querySelector('.slider__track');
// const slideWidth = document.querySelector('.slider__item').clientWidth;
// const slideCount = sliderTrack.getBoundingClientRect().width ;



// prevBtn.addEventListener('click', () => {
//     console.log(slideCount)
//     if (position >= 0) {
//        position = -600;
//     }
//     position = position + slideWidth;
//     sliderTrack.style.left = position + 'px';
// });

// nextBtn.addEventListener('click', () => {

//     position = position - slideWidth;
//     if (Math.abs(position) > slideWidth * slideCount) {
//         position = 0;
//     }
//     sliderTrack.style.left = position + 'px';
// })



