window.addEventListener("DOMContentLoaded", () => {
    const tabs = require("./modules/tabs"),
        cards = require("./modules/cards"),
        slides = require("./modules/slides"),
        timer = require("./modules/timer"),
        modal = require("./modules/modal"),
        calc = require("./modules/calc"),
        forms = require("./modules/forms");

    tabs();
    cards();
    slides();
    timer();
    modal();
    calc();
    forms();

});// конец DOMContentLoaded



