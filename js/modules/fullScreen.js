const fullScreen = ( ) => {
  
   
const parent = document.querySelector('.slider__container')
const modal = document.querySelector('.item__modal');
const modalImg = document.querySelector('.modal__img')
const closeModal = document.querySelector('.close__modal')

parent.addEventListener('click' , showModal)
modal.addEventListener('click' , hideModal);

function showModal (e) {
    let t = e.target;
    
    if(t.classList.contains('slider__img')){
        modal.style.display = 'block';
        modalImg.src = t.src;
    }
}
 
function hideModal (e) {
    let t = e.target;

    if(t === closeModal || t === modal) {
        modal.style.display = 'none';
    }
}
}

export default fullScreen






