const fullScreen = () => {
    const parent = document.querySelector('.slider__container');
    const modal = document.querySelector('.item__modal');
    const modalImg = document.querySelector('.modal__img');
    const closeModal = document.querySelector('.close__modal');
    const images = document.querySelectorAll('.slider__img');
    const leftBtn = document.querySelector('.modal__arrow-left');
    const righttBtn = document.querySelector('.modal__arrow-right');
    const galleryBtn = document.querySelector('.gallery__btn');
    
    parent.addEventListener('click', showModal);
    modal.addEventListener('click', hideModal);
    leftBtn.addEventListener('click', imageLeft);
    righttBtn.addEventListener('click', imageRight);

    galleryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        modalImg.src = images[0].src;
    });

    function showModal(e) {
        let t = e.target;
        if (t.classList.contains('slider__img')) {
            modal.style.display = 'block';
            modalImg.src = t.src;
        }
    }

    function hideModal(e) {
        let t = e.target;
        if (t === closeModal || t === modal) {
            modal.style.display = 'none';
        }
    }


    let src = null;
    let srcIndex = null;
    const imagesSrc = [];

    for (let i = 0; i < images.length; i++) {
        imagesSrc.push(images[i].src);
    }

    images.forEach(img => {
        img.addEventListener('click', function (e) {
            let t = e.target;
            src = t.src;
            srcIndex = imagesSrc.findIndex(i => i == src);
        });
    });

    function imageLeft() {
        if (srcIndex === 0) {
            srcIndex = imagesSrc.length;
        }
        modalImg.src = imagesSrc[srcIndex - 1];
        srcIndex = srcIndex - 1;
    }

    function imageRight() {
        if (srcIndex === imagesSrc.length - 1) {
            srcIndex = -1;
        }
        modalImg.src = imagesSrc[srcIndex + 1];
        srcIndex = srcIndex + 1;
    }
};

export default fullScreen;






