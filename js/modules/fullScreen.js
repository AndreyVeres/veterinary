const fullScreen = () => {


    const parent = document.querySelector('.slider__container')
    const modal = document.querySelector('.item__modal');
    const modalImg = document.querySelector('.modal__img')
    const closeModal = document.querySelector('.close__modal')

    parent.addEventListener('click', showModal)
    modal.addEventListener('click', hideModal);

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



    const images = document.querySelectorAll('.slider__img');
    const bigImg = document.querySelector('.modal__img');
    const leftBtn = document.querySelector('.modal__arrow-left');
    const righttBtn = document.querySelector('.modal__arrow-right');
    const imagesSrc = [];

    for(let i = 0 ; i < images.length ; i ++) {
        imagesSrc.push(images[i].src );
    }

    let src = null;
    let srcIndex = null;
   images.forEach(img => {
       img.addEventListener('click' , function(e) {
           let t = e.target ;
           src = t.src;
           console.log(src)

           srcIndex = imagesSrc.findIndex(i => i == src);
           console.log(srcIndex);
       });
   });

   leftBtn.addEventListener('click' , imageLeft);
   righttBtn.addEventListener('click' , imageRight);
   function imageLeft () {
       if(srcIndex === 0 ){
           srcIndex = imagesSrc.length ;
       }
        bigImg.src = imagesSrc[srcIndex - 1];
        srcIndex = srcIndex-1;
        console.log(srcIndex)
        
   }

   function imageRight () {
       if(srcIndex === imagesSrc.length -1){
           srcIndex = -1 ;  //НИПАНИМАЮПАМАГИТИ
       }
    bigImg.src = imagesSrc[srcIndex + 1];
    srcIndex = srcIndex+1;
    console.log(srcIndex)
}




   
    

}

export default fullScreen






