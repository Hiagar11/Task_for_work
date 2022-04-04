(function () {
    const btnNext = document.querySelector('.carousel__next');
    const btnPrev = document.querySelector('.carousel__prev');
    const list = document.querySelector('.carousel__list');
    const wrapper = document.querySelector('.carousel__wrapper');
    let num = 0;


    btnNext.addEventListener('mousedown', mouseDown);
    btnPrev.addEventListener('mousedown', mouseDown);

    function mouseDown(eve) {
        let maxlengh = list.offsetWidth - wrapper.offsetWidth;
        let result = maxlengh + num;

        if(this.classList.contains('carousel__next') && result>0 ) {
            num-=100;
            list.style.translate = num + 'px';
        } else if(this.classList.contains('carousel__prev') && result < maxlengh) {
            num+=100;
            list.style.translate = num + 'px';
        }
    }
})()
