const carousel = (containerSelector, trackSelector, itemsSelector, prevBtn, nextBtn, slidesShow, slidesScroll) => {
    let position = 0;
    const slidesToShow = slidesShow;
    const slidesToScroll = slidesScroll;
    const container = document.querySelector(containerSelector);
    const track = document.querySelector(trackSelector);
    const items = document.querySelectorAll(itemsSelector);
    const itemsCount = items.length;
    const btnPrev = document.querySelector(prevBtn);
    const btnNext = document.querySelector(nextBtn);
    const itemWidth = container.clientWidth / slidesToShow + 10;
    const movePosition = slidesToScroll * itemWidth;

    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    btnNext.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
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

export default carousel;


