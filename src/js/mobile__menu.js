(function () {
    const mobileBtn = document.querySelector('.header__mobBtn');
    const mobileMenu = document.querySelector('.header__mobile');

    const aboutBtn = document.querySelector('.about');
    const mobileSubMenu = document.querySelector('.nav__sublist');

    mobileBtn.addEventListener('click', function () {
        this.classList.toggle('closed');
        this.classList.toggle('opened');

        mobileMenu.classList.toggle('hidden');
    });
    aboutBtn.addEventListener('click', function () {
        this.parentElement.classList.toggle('opened');
        mobileSubMenu.classList.toggle('hidden');
    })
})()
