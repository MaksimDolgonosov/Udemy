/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
    // Калькулятор каллорий

    let result = document.querySelector(".calculating__result span");





    let sex, height, weight, age, ratio;

    if (localStorage.getItem("sex")) {
        sex = localStorage.getItem("sex");
    } else {
        sex = "female";
        localStorage.setItem("sex", "female");
    }

    if (localStorage.getItem("ratio")) {
        ratio = localStorage.getItem("ratio");
    } else {
        ratio = 1.375;
        localStorage.setItem("ratio", 1.375);
    }

    function initLocalSettings(parentSelector, activeClass) {
        let elements = document.querySelectorAll(`${parentSelector} div`);
        elements.forEach((e) => {
            e.classList.remove(activeClass);
            if (e.getAttribute(`data-ration`) == localStorage.getItem("ratio")) {
                e.classList.add(activeClass);
            } else if (e.getAttribute(`id`) == localStorage.getItem("sex")) {
                e.classList.add(activeClass);
            }
        });

        //let activeElement=elements.querySelector("#id");



    }

    initLocalSettings("#gender", "calculating__choose-item_active");
    initLocalSettings(".calculating__choose_big", "calculating__choose-item_active");


    function calcTotal() {
        if (!height || !weight || !age) {
            result.textContent = "____";
            return;
        }

        if (sex == "female") {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }

    }
    calcTotal();


    function getStaticInformaton(parentSelector, activeClass) {
        let elements = document.querySelectorAll(`${parentSelector} div`);
        elements.forEach((e) => {
            e.addEventListener("click", (e) => {
                if (e.target.getAttribute(`data-ration`)) {
                    ratio = +e.target.getAttribute(`data-ration`);
                    localStorage.setItem("ratio", +e.target.getAttribute(`data-ration`));
                } else {
                    sex = e.target.getAttribute("id");
                    localStorage.setItem("sex", e.target.getAttribute("id"));
                }
                elements.forEach((e) => {
                    e.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);

                calcTotal();
            });
        });
    }

    getStaticInformaton("#gender", "calculating__choose-item_active");
    getStaticInformaton(".calculating__choose_big", "calculating__choose-item_active");


    function getDinamicInformaton(selector) {
        let input = document.querySelector(selector);
        input.addEventListener("input", () => {
            if (input.value.match(/\D/g)) {
                input.style.border = `1px solid red`;
            } else {
                input.style.border = `none`;
            }
            switch (input.getAttribute("id")) {
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
            }
            calcTotal();
        });
    }


    getDinamicInformaton("#height");
    getDinamicInformaton("#weight");
    getDinamicInformaton("#age");


    // document.querySelectorAll(".calculating__choose_medium input").forEach(e => {
    //     e.addEventListener("input", e => {
    //         weight = +document.querySelector("#weight").value;
    //         height = +document.querySelector("#height").value;
    //         age = +document.querySelector("#age").value;
    //         calcTotal();
    //     });
    // });


}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
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



    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)(`http://localhost:3000/menu`)
        .then(data => {
            data.forEach(({ img, alting, title, descr, price }) => {
                new Cards(img, alting, title, descr, price, `.menu .container`).rendle();
            });

        });

    // getResource(`http://localhost:3000/menu`)
    //     .then(data => createCard(data));


    //   function createCard(data) {
    //     data.forEach(({ img, alting, title, descr, price }) => {
    //         let element = document.createElement("div");
    //         element.classList.add("menu__item");
    //         element.innerHTML =
    //             `<img src=${img} alt=${alting}>
    //         <h3 class="menu__item-subtitle">${title}</h3>
    //         <div class="menu__item-descr">${descr}</div>
    //         <div class="menu__item-divider"></div>
    //         <div class="menu__item-price">
    //         <div class="menu__item-cost">Цена:</div>
    //         <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //         </div>`;

    //         document.querySelector(".menu .container").append(element);
    //     });
    // }



    // new Cards(
    //     "img/tabs/vegy.jpg",
    //     "vegy",
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     10,
    //     ".menu .container",
    // )
    //     .rendle();

    // new Cards(
    //     "img/tabs/elite.jpg",
    //     "elite",
    //     'Меню "Премиум"',
    //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     20,
    //     ".menu .container",
    //     "menu__item")
    //     .rendle();

    // new Cards(
    //     "img/tabs/post.jpg",
    //     "post",
    //     'Меню "Постное"',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     30,
    //     ".menu .container",
    //     "menu__item",
    //     "big")
    //     .rendle();


}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector, setTimeoutId) {
    // Отправка формы на сервер php

    let forms = document.querySelectorAll(formSelector);

    const message = {
        loading: "img/form/spinner.svg",
        success: "Данные успешно отправлены",
        failure: "Ошибка"
    };

    forms.forEach(item => {
        bindPostData(item);
    });





    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;   
            `;


            form.insertAdjacentElement("afterend", statusMessage);

            let formData = new FormData(form);
            let json = JSON.stringify(Object.fromEntries(formData.entries()));
            // let Object = {};
            // formData.forEach((item, key) => {
            //     Object[key] = item;
            // });

            // ФОРМАТ formData
            // fetch('server.php', {
            //     method: "POST",
            //     body: formData

            // }).then(data => data.text())
            //     .then((data) => {

            //         console.log(data);


            //         showThanksModal(message.success);
            //         statusMessage.remove();
            //     })
            //     .catch(() => {
            //         showThanksModal(message.failure);
            //     }).finally(() => {
            //         form.reset();
            //         statusMessage.remove();
            //     });




            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)(`http://localhost:3000/requests`, json)

                .then((data) => {

                    console.log(data);

                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                    statusMessage.remove();

                });

            // let request = new XMLHttpRequest();
            // request.open('POST', 'server.php');
            // request.setRequestHeader("Content-type", "application/json, charset=utf-8");
            // let formData = new FormData(form);
            // let jsonRequest = {};
            // formData.forEach((item, key) => {
            //     jsonRequest[key] = item;
        });
    }


    //request.send(JSON.stringify(jsonRequest));

    //         request.addEventListener('load', () => {
    //             if (request.status === 200) {
    //                 console.log(request.response);
    //                 //statusMessage.textContent = message.success;

    //                 showThanksModal(message.success);
    //                 form.reset();

    //                 statusMessage.remove();

    //             } else {

    //                 showThanksModal(message.failure);
    //             }
    //         });
    //     });
    // }

    // Красивое оповещение пользователя

    // function showThanksModal(message) {
    //     const prevModalDialog = document.querySelector(".modal__dialog");
    //     prevModalDialog.classList.add("hide");
    //     openModal();

    //     let thanksModal = document.createElement("div");
    //     thanksModal.classList.add("modal__dialog");
    //     thanksModal.innerHTML = `
    //     <div class="modal__content">
    //     <div data-close class="modal__close">&times;</div>
    //     <div class="modal__title">${message}</div>
    //     </div>
    //     `;
    //     document.querySelector(".modal").append(thanksModal);
    //     setTimeout(() => {
    //         thanksModal.remove();
    //         prevModalDialog.classList.add("show");
    //         prevModalDialog.classList.remove("hide");
    //         closeModal();
    //     }, 4000);
    // }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__content");
        prevModalDialog.classList.add("hide");
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(".modal", setTimeoutId);

        let thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__content");
        thanksModal.innerHTML = `
                 <div data-close class="modal__close">&times;</div>
                 <div class="modal__title">${message}</div>
                 `;

        document.querySelector(".modal__dialog").append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add("show");
            prevModalDialog.classList.remove("hide");
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(".modal");
        }, 4000);
    }

    // fetch(`http://localhost:3000/menu`)
    //     .then(data => data.json())
    //     .then(data => console.log(data));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal)
/* harmony export */ });


function openModal(modalSelector, setTimeoutId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add("show");
    modal.classList.remove("hide");
    // modal.classList.toggle("show");
    document.body.style.overflow = "hidden";
    if (setTimeoutId) {
        console.log(setTimeoutId);
        clearTimeout(setTimeoutId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add("hide");
    modal.classList.remove("show");
    // modal.classList.toggle("show");
    document.body.style.overflow = "";
}



function modal(triggerSelector, modalSelector, setTimeoutId) {
    // Открытие модального окна
    const modal = document.querySelector(modalSelector);
    //const styleOfModal=window.getComputedStyle(modal);
    //console.log(styleOfModal);

    const modalTrigger = document.querySelectorAll(triggerSelector);
    // const btnClose = document.querySelector("[data-close]");

    modalTrigger.forEach(btn => {
        btn.addEventListener("click", () => openModal(modalSelector, setTimeoutId));
    });








    //btnClose.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.classList.contains(`modal__close`)) {  //e.target.getAttribute(`modal-close`)=="";
            closeModal(modalSelector);
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code == "Escape" && modal.classList.contains("show")) {
            closeModal(modalSelector);
        }
    });

    function openModalInTheEnd() {
        if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, setTimeoutId);
            window.removeEventListener("scroll", openModalInTheEnd);
        }

    }

    window.addEventListener("scroll", openModalInTheEnd);


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slides.js":
/*!******************************!*\
  !*** ./js/modules/slides.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slides({ container, slide, nextArrow, prevArrow, wrapper, field, totalCounter, currentCounter }) {
    //Слайды
    // const slides = document.querySelectorAll(".offer__slide");

    // if (slides.length < 10) {
    //     document.querySelector("#total").textContent = `0${slides.length}`;
    // } else {
    //     document.querySelector("#total").textContent = slides.length;
    // }

    // const nextBtn = document.querySelector(".offer__slider-next");
    // const prevBtn = document.querySelector(".offer__slider-prev");

    // let nowId = 0;
    // showSlide(nowId);
    // nextBtn.addEventListener("click", () => {
    //     nowId = nowId + 1;
    //     if (nowId > 3) {
    //         reset(0);
    //         showSlide(nowId);
    //     } else {
    //         showSlide(nowId);
    //     }

    // });

    // prevBtn.addEventListener("click", () => {
    //     nowId = nowId - 1;
    //     if (nowId < 0) {
    //         reset(slides.length - 1);
    //         showSlide(nowId);
    //     } else {
    //         showSlide(nowId);
    //     }
    // });
    // function reset(i) {
    //     nowId = i;
    // }

    // function showSlide(nowId) {

    //     slides.forEach(arr => arr.classList.add("hide", "fade"));
    //     slides[nowId].classList.remove("hide");
    //     slides[nowId].classList.add("show");
    //     slides[nowId].classList.remove("show");


    //     if (slides.length < 10) {
    //         document.querySelector("#current").textContent = `0${nowId + 1}`;
    //     } else {
    //         document.querySelector("#current").textContent = nowId + 1;
    //     }
    // }


    // слайды второй вариант

    const slides = document.querySelectorAll(slide);
    const slider = document.querySelector(container);
    const slidesWrapper = document.querySelector(wrapper);
    const slidesField = document.querySelector(field);
    const total = document.querySelector(totalCounter);
    const current = document.querySelector(currentCounter);
    const nextBtn = document.querySelector(nextArrow);
    const prevBtn = document.querySelector(prevArrow);
    const width = window.getComputedStyle(slidesWrapper).width;
    let offset = 0;
    let slideIndex = 1;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }



    slidesField.style.width = 100 * slides.length + "%";
    slides.forEach(slide => {
        slide.style.width = width;
    });

    slidesField.style.display = 'flex';
    slidesWrapper.style.overflow = "hidden";
    slidesField.style.transition = '0.5s all';

    slider.style.position = "relative";
    let indicators = document.createElement('ol');
    let dots = [];
    indicators.classList.add("carousel-indicators"); // такого класса в данном проекте нет, все стили описаны ниже
    indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {

        const dot = document.createElement('li');
        dot.setAttribute("data-slide-to", i + 1);
        dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
        `;

        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }




    nextBtn.addEventListener("click", () => {
        if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, "");
        }

        slidesField.style.transform = `translateX(-${offset}px)`;


        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        dots.forEach(dot => {
            dot.style.opacity = 0.5;
        });
        dots[slideIndex - 1].style.opacity = 1;

        if (slideIndex < 10) {
            document.querySelector("#current").textContent = `0${slideIndex}`;
        } else {
            document.querySelector("#current").textContent = slideIndex;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (offset == 0) {
            offset = width.replace(/\D/g, '') * (slides.length - 1);
        } else {
            offset -= +width.replace(/\D/g, "");
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        dots.forEach(dot => {
            dot.style.opacity = 0.5;
        });
        dots[slideIndex - 1].style.opacity = 1;

        if (slideIndex < 10) {
            document.querySelector("#current").textContent = `0${slideIndex}`;
        } else {
            document.querySelector("#current").textContent = slideIndex;
        }
    });


    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            slideIndex = e.target.getAttribute("data-slide-to");
            if (slideIndex < 10) {
                document.querySelector("#current").textContent = `0${slideIndex}`;
            } else {
                document.querySelector("#current").textContent = slideIndex;
            }
            offset = width.replace(/\D/g, "") * (slideIndex - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => {
                dot.style.opacity = 0.5;
            });
            e.target.style.opacity = 1;
        });

    });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slides);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs() {

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


}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {
    // Таймер


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
    setClock(id, deadline);

    function getZero(num) {
        if (num > 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }



}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getResource": () => (/* binding */ getResource)
/* harmony export */ });
const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: data
    });
    return await res.json();
};

let getResource = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_slides__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slides */ "./js/modules/slides.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");










window.addEventListener("DOMContentLoaded", () => {
    const setTimeoutId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_4__.openModal)(".modal", 3), 5000);
    //const setTimeoutId2 = setTimeout(() => openModal(".modal", setTimeoutId2), 5000);
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])();

    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_3__["default"])(".timer", '2021-12-14');
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_4__["default"])("[data-modal]", ".modal", setTimeoutId);
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_6__["default"])('form', setTimeoutId);
    (0,_modules_slides__WEBPACK_IMPORTED_MODULE_2__["default"])({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        totalCounter: '#total',
        currentCounter: '#current'
    });
});// конец DOMContentLoaded




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map