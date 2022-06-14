(function () {
    const list = document.querySelector('.selector__list');
    const items = list.querySelectorAll('.selector__item');
    const hiderBtn = document.querySelector('.selector__control');

    const wrapper = document.querySelector('.history__mobile-wrapper');
    const listMobile = wrapper.querySelector('.mobile__list');

    const topBtn = wrapper.querySelector('.top');
    const bottomBtn = wrapper.querySelector('.bottom');
    const readyBtn = wrapper.querySelector('.ready');


    const texts = document.querySelectorAll('.history__text');
    const main = document.querySelector('.main__history');

    const arrItems = [];
    const contentT = {};

    //mobile
    hiderBtn.addEventListener('click', function () {
        wrapper.classList.toggle('hidden');
    })
    readyBtn.addEventListener('click', function () {
        wrapper.classList.toggle('hidden');
    })

    items.forEach((item, index) => {
        arrItems.push(item);
        texts[index].innerHTML = 'В '+ item.innerHTML + texts[index].innerHTML;
        contentT[item.innerHTML] = texts[index].innerHTML;
        texts[index].remove()
        item.remove();
    })

    let p = document.createElement('p');
    p.classList.add('history__text');
    main.appendChild(p);

    function draw() {
        listMobile.innerHTML = '';
        for (let [index,item] of arrItems.entries()) {
            let clone = item.cloneNode(true);
            listMobile.appendChild(clone);
            list.appendChild(item);
            if (index === 4) {
                p.innerHTML = contentT[item.innerHTML];
            }
        }
    }

    list.addEventListener('click', function (e) {
        if (e.target.tagName === "LI") {
            for (let [index,item] of arrItems.entries()) {
                if (item.innerHTML === e.target.innerHTML) {
                    toStep(index);
                }
            }
        }
    });
    topBtn.addEventListener('click', function () {
        toStep(3);
        draw();
    })
    bottomBtn.addEventListener('click', function () {
        toStep(5);
        draw();
    })

    function toStep(index) {
        if (index > 4) {
            let step = index - 4;
            let splice = arrItems.splice(0, step);
            arrItems.push(...splice);

            draw()
        } else if (index === 4) {
            return ''
        } else {
            let step = 4 - index;
            let splice = arrItems.splice(-step, step);
            arrItems.unshift(...splice);

            draw()
        }
    }
    draw()
})()
