const smoothScroll = (bntSelector , toScrollSelector) => {
    const btn = document.querySelector(bntSelector);
    const boxPosition = document.querySelector(toScrollSelector).offsetTop - 200;
    btn.addEventListener('click' , function(e) {
        e.preventDefault();
        window.scrollTo({
            top:boxPosition,
            behavior: "smooth"
       }); 
    });
}

export default smoothScroll;