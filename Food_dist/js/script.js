
import tabs from "./modules/tabs";
import cards from "./modules/cards";
import slides from "./modules/slides";
import timer from "./modules/timer";
import modal from "./modules/modal";
import calc from "./modules/calc";
import forms from "./modules/forms";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
    const setTimeoutId = setTimeout(() => openModal(modalSelector, setTimeoutId), 9997000);

    tabs();
    cards();
    slides();
    timer();
    modal("[data-modal]", ".modal");
    calc();
    forms();

});// конец DOMContentLoaded



