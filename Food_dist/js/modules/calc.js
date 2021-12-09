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
export default calc;