const dropdown = () => {
    const btns = document.querySelectorAll('.questions__title');
    const windows = document.querySelectorAll('.questions__answer');
    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            let window = this.nextElementSibling;
            windows.forEach(window => {
                if (window.style.maxHeight !== '') {
                    window.style.maxHeight = '';
                }
            });

            if (window.style.maxHeight === '') {
                window.style.maxHeight = window.scrollHeight + 'px';
            } 

        });
    });

};

export default dropdown;