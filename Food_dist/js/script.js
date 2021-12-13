
import tabs from "./modules/tabs";
import cards from "./modules/cards";
import slides from "./modules/slides";
import timer from "./modules/timer";
import modal from "./modules/modal";
import calc from "./modules/calc";
import forms from "./modules/forms";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
    const setTimeoutId = setTimeout(() => openModal(".modal", 3), 5000);
    //const setTimeoutId2 = setTimeout(() => openModal(".modal", setTimeoutId2), 5000);
    tabs();
    cards();

    timer(".timer", '2021-12-14');
    modal("[data-modal]", ".modal", setTimeoutId);
    calc();
    forms('form', setTimeoutId);
    slides({
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



