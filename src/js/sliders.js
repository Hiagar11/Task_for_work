(function () {
    const sliders = document.querySelectorAll('.slider');

    for (let slider of sliders) {
        launch(slider)
    }

    function launch(slider) {
        const list = slider.querySelector('.slider__list');
        const items = list.querySelectorAll('.slider__item');
        const dots = slider.querySelector('.slider__dots');
        const btnLeft = slider.querySelector('.slider__controlLeft');
        const btnRight = slider.querySelector('.slider__controlRight');

        let dotItems;

        let shift = 0;
        let numDot = 0;

        const activeDot = (dotItems) => {
            let dot = Math.abs(numDot / items[0].offsetWidth);
            for (let item of dotItems) {
                item.classList.remove('slider__dot--active');
            }
            dotItems[dot].classList.add('slider__dot--active');
        }

        if (dots) {
            for (let i = 0; i < items.length; i++) {
                let dot = document.createElement('div');
                dot.classList.add('slider__dot');
                dots.appendChild(dot);
            }

            dotItems = dots.querySelectorAll('.slider__dot');

            dotItems[0].classList.add('slider__dot--active');

            dotItems.forEach((dot, index) => {
                dot.addEventListener('click', function () {
                    numDot = index * items[0].offsetWidth;
                    moveOfDot(numDot)
                });
            })

            const moveOfDot = (numDot) => {
                    list.style.transform = `translateX(${-numDot+10}px)`;
                    activeDot(dotItems);
            }
        }

        const move = (num) => {
            list.style.transform = `translateX(${num}px)`;
        }

        const toLeft = () => {
            numDot += items[0].offsetWidth;
            shift += items[0].offsetWidth + 15;
            if (shift > 0) {
                shift = 0;
                numDot = 0;
            }

            move(shift);
            if (dots) {
                activeDot(dotItems);
            }

        }
        const toRight = () => {
            numDot += -items[0].offsetWidth;
            shift += -(items[0].offsetWidth + 10);
            if (shift < -((items.length) * items[0].offsetWidth)) {
                shift = 0;
                numDot = 0;
            }

            move(shift);
            if (dots) {
                activeDot(dotItems);
            }
        }
        if (btnLeft && btnRight) {
            btnLeft.addEventListener('click', toLeft);
            btnRight.addEventListener('click', toRight);
        }

    }


})()
