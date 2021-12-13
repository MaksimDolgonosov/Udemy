import { getResource } from "../services/services";

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



    getResource(`http://localhost:3000/menu`)
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
export default cards;