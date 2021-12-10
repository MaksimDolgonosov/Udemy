function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add("show");
    modal.classList.remove("hide");
    // modal.classList.toggle("show");
    document.body.style.overflow = "hidden";
    clearTimeout(setTimeoutId);
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add("hide");
    modal.classList.remove("show");
    // modal.classList.toggle("show");
    document.body.style.overflow = "";
}



function modal(triggerSelector, modalSelector) {
    // Открытие модального окна
    const modal = document.querySelector(modalSelector);
    //const styleOfModal=window.getComputedStyle(modal);
    //console.log(styleOfModal);

    const modalTrigger = document.querySelectorAll(triggerSelector);
    // const btnClose = document.querySelector("[data-close]");

    modalTrigger.forEach(btn => {
        btn.addEventListener("click", () => openModal(modalSelector));
    });




    const setTimeoutId = setTimeout(openModal, 9997000);



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
            openModal(modalSelector);
            window.removeEventListener("scroll", openModalInTheEnd);
        }

    }

    window.addEventListener("scroll", openModalInTheEnd);


}

export default modal;
export { openModal };
export { closeModal };