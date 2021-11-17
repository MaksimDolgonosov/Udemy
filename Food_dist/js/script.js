window.addEventListener("DOMContentLoaded", () => {
    let tabs = document.querySelectorAll(".tabheader__item");
    let tabsParent = document.querySelector(".tabheader__items");
    let tabsContent = document.querySelectorAll(".tabcontent");

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = "none";
            tabs.forEach(e => {
                e.classList.remove("tabheader__item_active");
            });
        });
    }

    function showTabContent(i = 0) {
        tabs[i].classList.add("tabheader__item_active");
        tabsContent[i].style.display = "block";
        tabsContent[i].classList.add("fade");
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (item == event.target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    const deadline = '2021-11-10';
    // console.log(Date.parse('2021-11-04'));
    // let T= Date.parse(deadline)-Date.parse(new Date());
    // console.log(T/(1000*60*60));



    function getTimeRemanig(endtime) {
        let t = Date.parse(endtime) - Date.parse(Date());

        let days = Math.floor(t / (1000 * 60 * 60 * 24));

        let hours = Math.floor((t / (1000 * 60 * 60) % 24) - 3);

        let minutes = Math.floor(t / (1000 * 60) % 60);

        let seconds = Math.floor(t / 1000 % 60);

        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }


    function setClock(selector, endtime) {
        let timer = document.querySelector(selector);
        let days = timer.querySelector("#days");
        let hours = timer.querySelector("#hours");
        let minutes = timer.querySelector("#minutes");
        let seconds = timer.querySelector("#seconds");
        const SetInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock() {
            let t = getTimeRemanig(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(SetInterval);
                days.innerHTML = "00";
                hours.innerHTML = "00";
                minutes.innerHTML = "00";
                seconds.innerHTML = "00";
            }
        }
    }
    setClock(".timer", deadline);

    function getZero(num) {
        if (num > 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    // Открытие модального окна
    const modal = document.querySelector(".modal");
    //const styleOfModal=window.getComputedStyle(modal);
    //console.log(styleOfModal);

    const modalTrigger = document.querySelectorAll("[data-modal");
    // const btnClose = document.querySelector("[data-close]");

    modalTrigger.forEach(btn => {
        btn.addEventListener("click", openModal);
    });




    const setTimeoutId = setTimeout(openModal, 9997000);

    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        // modal.classList.toggle("show");
        document.body.style.overflow = "hidden";
        clearTimeout(setTimeoutId);
    }

    function closeModal() {
        modal.classList.add("hide");
        modal.classList.remove("show");
        // modal.classList.toggle("show");
        document.body.style.overflow = "";
    }

    //btnClose.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.classList.contains(`modal__close`)) {  //e.target.getAttribute(`modal-close`)=="";
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code == "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });

    function openModalInTheEnd() {
        if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener("scroll", openModalInTheEnd);
        }

    }

    window.addEventListener("scroll", openModalInTheEnd);

    // Создание карточек через классы (Раздел 48)

    class Cards {
        constructor(img, alt, name, text, price, parentSelector, ...classes) {
            this.img = img;
            this.alt = alt;
            this.name = name;
            this.text = text;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
            this.transfer = 27;
            this.changeToUAH();// уточнить
        }

        changeToUAH() {
            this.price = +this.price * this.transfer;
        }
        rendle() {
            let element = document.createElement("div");
            if (this.classes.length == 0) {
                //this.element = "menu__item";
                element.classList.add("menu__item");
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML =
                `<img src=${this.img} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.name}</h3>
                <div class="menu__item-descr">${this.text}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>`;
            this.parent.append(element);
        }

    }

    new Cards(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        10,
        ".menu .container",
    )
        .rendle();

    new Cards(
        "img/tabs/elite.jpg",
        "elite",
        'Меню "Премиум"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        20,
        ".menu .container",
        "menu__item")
        .rendle();

    new Cards(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        30,
        ".menu .container",
        "menu__item",
        "big")
        .rendle();

    // Отправка формы на сервер php

    let forms = document.querySelectorAll('form');

    const message = {
        loading: "img/form/spinner.svg",
        success: "Данные успешно отправлены",
        failure: "Ошибка"
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;   
            `;

            //form.append(statusMessage);
            form.insertAdjacentElement()


            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader("Content-type", "application/json, charset=utf-8");
            let formData = new FormData(form);
            let jsonRequest = {};
            formData.forEach((item, key) => {
                jsonRequest[key] = item;
            });



            request.send(JSON.stringify(jsonRequest));

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    //statusMessage.textContent = message.success;

                    showThanksModal(message.success);
                    form.reset();

                    statusMessage.remove();

                } else {

                    showThanksModal(message.failure);
                }
            });
        });
    }

    // Красивое оповещение пользователя

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");
        prevModalDialog.classList.add("hide");
        openModal();

        let thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
        <div class="modal__content">
        <div data-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
        </div>
        `;
        document.querySelector(".modal").append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add("show");
            prevModalDialog.classList.remove("hide");
            closeModal();
        }, 4000);
    }

    // function showThanksModal(message) {
    //     const prevModalDialog = document.querySelector(".modal__content");
    //     prevModalDialog.classList.add("hide");
    //     openModal();

    //     let thanksModal = document.createElement("div");
    //     thanksModal.classList.add("modal__content");
    //     thanksModal.innerHTML = `
    //     <div data-close class="modal__close">&times;</div>
    //     <div class="modal__title">${message}</div>
    //     `;
    //     console.log(thanksModal);
    //     document.querySelector(".modal.dialog").append(thanksModal);
    //     setTimeout(() => {
    //         thanksModal.remove();
    //         prevModalDialog.classList.add("show");
    //         prevModalDialog.classList.remove("hide");
    //         closeModal();
    //     }, 4000);
    // }
    // showThanksModal("sdf");

});// конец DOMContentLoaded



