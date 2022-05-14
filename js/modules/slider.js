const slider = () => {
    let position = 0;
    const slidesToShow = 3;
    const slidesToScroll = 3;
    const container = document.querySelector('.slider__container')
    const track = document.querySelector('.slider__track')
    const items = document.querySelectorAll('.slider__img')
    const itemsCount = items.length;
    const btnPrev = document.querySelector('.slider__prev');
    const btnNext = document.querySelector('.slider__next');
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;


    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
        console.log(position);
    });

    btnNext.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
        console.log(itemsLeft)

    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };

    const checkBtns = () => {
        if (position === 0) {
            btnPrev.disabled = true;
        } else {
            btnPrev.disabled = false;
        }
        if (position <= -(itemsCount - slidesToShow) * itemWidth) {
            btnNext.disabled = true;
        } else {
            btnNext.disabled = false;
        }
    };

    items.forEach(item => {
        item.style.minWidth = itemWidth + 'px';
    });

    checkBtns();

};


export default slider;



