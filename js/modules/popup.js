const popup = (openSelector , popupSelector ) => {
    const btn = document.querySelector(openSelector);
    const popup = document.querySelector(popupSelector);
const scroll = calculateScroll();
    btn.addEventListener ('click' , function(event) {
     showPopup(event ,openSelector);
    });

    popup.addEventListener('click' ,function(e){
        closePopup(e,popupSelector);
    });

    function showPopup(event , openSelector){
        event.preventDefault();
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
    }

    function closePopup(event,popupSelector) {
        if(event.target === popup){
            popup.style.display ='none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '';
        } 
    }

    function calculateScroll () {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflow = 'scroll';
        div.style.visibility = 'hidden';

        document.body.append(div)
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

   

}

export default popup;