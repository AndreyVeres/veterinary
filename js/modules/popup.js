const popup = (openSelector , popupSelector ) => {
    const btn = document.querySelector(openSelector);
    const popup = document.querySelector(popupSelector);

    btn.addEventListener ('click' , function(event) {
     showPopup(event ,openSelector)
    });

    popup.addEventListener('click' ,function(e){
        closePopup(e,popupSelector);
    });

    function showPopup(event , openSelector){
        event.preventDefault();
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closePopup(event,popupSelector) {
        if(event.target === popup){
            popup.style.display ='none'
            document.body.style.overflow = '';
        } 
    }

   

}

export default popup;