const smoothScroll = () => {
    const btn = document.querySelector('.orange__btn');
    const boxPosition = document.querySelector('.reception').getBoundingClientRect().top - 200;

    btn.addEventListener('click' , function(e) {
        e.preventDefault();
        console.log(boxPosition)
        window.scrollTo({
            top: boxPosition,
            behavior: "smooth"
       });
        
    });
}

export default smoothScroll;