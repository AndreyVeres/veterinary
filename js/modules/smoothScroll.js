const smoothScroll = () => {
    const btn = document.querySelector('.orange__btn');
    const boxPosition = document.querySelector('.reception').getBoundingClientRect().top - 200;
    console.log(boxPosition)
    btn.addEventListener('click' , function(e) {
        e.preventDefault();
        console.log(boxPosition)
        window.scrollTo({
            top:4000,
            behavior: "smooth"
       });
        
    });
}

export default smoothScroll;