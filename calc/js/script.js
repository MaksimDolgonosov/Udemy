"use stcrict";

let inputRUB = document.querySelector("#rub");
let inputUSD = document.querySelector("#usd");


inputRUB.addEventListener("input", () => {
    let request = new XMLHttpRequest();
    request.open("GET", "js/current.json");
    request.setRequestHeader('Content-type', 'applicaton/json; charset=utf-8');
    request.send();

    request.addEventListener("load", () => {
        if (request.status == 200) {
            let data = JSON.parse(request.response);
            console.log(request.response);
            inputUSD.value = (+inputRUB.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = "Ошибка";
        }
    });
});

