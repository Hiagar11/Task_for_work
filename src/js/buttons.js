(function () {
    //Появление цвета у партнёров
    const images = document.querySelectorAll('.carousel__item');
    images.forEach(image => {
        image.addEventListener('mouseover', function () {
            this.children[0].classList.remove('hidden');
            this.children[1].classList.add('hidden');

            this.addEventListener('mouseleave', function () {
                this.children[0].classList.add('hidden');
                this.children[1].classList.remove('hidden');
            })
        }, true)
    })


//    Копки рассчета франшизы
    const buttons = document.querySelectorAll('.strength__item');

    const mobileTble = document.querySelectorAll('.content__calc-mobile tr td');
    const defTable = document.querySelectorAll('.content__calc-default tr td');

    const ARR = [
        ['500 000 ₽', '1 000 000 ₽', '1 500 000 ₽','2 500 000 ₽'],
        ['300 000 ₽', '500 000 ₽', '1 000 000 ₽','1 200 000 ₽'],
        ['<span class="mark">370 000 ₽</span>', '<span class="mark">500 000 ₽</span>', '<span class="mark">1 370 000 ₽</span>','<span class="mark">1 870 000 ₽</span>'],
        ['5%', '10%', '16.5%','20%'],
    ]

    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            buttons.forEach(button=>{
                button.classList.remove('strength__item--active');
            })
            this.classList.add('strength__item--active');

            defTable.forEach((td, indexTD)=> {
                td.innerHTML = '0';
                td.innerHTML = ARR[indexTD][index]
            })
            mobileTble.forEach((td, indexTD)=> {
                td.innerHTML = '0';
                td.innerHTML = ARR[indexTD][index]
            })
        })
    })


    //Кнопка мобильного меню
    const btn = document.querySelector('.header__mobile');
    const nav = document.querySelector('.nav');

    btn.addEventListener('click', function () {
        if (btn.classList.contains('open')) {
            btn.classList.remove('open');
            btn.classList.add('close');

            nav.style.display = 'flex';
        } else {
            btn.classList.add('open');
            btn.classList.remove('close');

            nav.style.display = 'none';
        }

    })
})()