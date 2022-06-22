const scrollToTop = (btnSelector) => {
    const btn = document.querySelector(btnSelector);
    document.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1000) {
            btn.classList.add('arrowToTopShow');
        }else{
            btn.classList.remove('arrowToTopShow');
        }
    });

    btn.addEventListener('click' ,()=> {
        window.scrollTo ({
            top : 0,
            behavior : 'smooth'
        })
    });
};
export default scrollToTop