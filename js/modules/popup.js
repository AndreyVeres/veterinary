const popup = (btnSelector , popupSelector ) => {
    const btn = document.querySelector(btnSelector);
    const popup = document.querySelector(popupSelector);


    btn.addEventListener ('click' , function(e) {
        e.preventDefault()
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    popup.addEventListener('click' , function(e) {
        if(e.target === popup){
            popup.style.display ='none'
            document.body.style.overflow = '';
        } 
    })

}

export default popup;