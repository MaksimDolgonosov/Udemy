import { openModal, closeModal } from "./modal";

function forms() {
    // Отправка формы на сервер php

    let forms = document.querySelectorAll('form');

    const message = {
        loading: "img/form/spinner.svg",
        success: "Данные успешно отправлены",
        failure: "Ошибка"
    };

    forms.forEach(item => {
        bindPostData(item);
    });

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




            postData(`http://localhost:3000/requests`, json)

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
        openModal();

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
            closeModal();
        }, 4000);
    }

    // fetch(`http://localhost:3000/menu`)
    //     .then(data => data.json())
    //     .then(data => console.log(data));
}

export default forms;