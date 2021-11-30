'use strict';

const form = document.querySelector(".form-signin");
const ChangeBtn = document.querySelector("#color");
const checkbox = document.querySelector("#checkbox");

if (localStorage.getItem("isChacked")) {
    checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
    localStorage.setItem("isChacked", true);
});




// localStorage.setItem("color", "");
// form.style.backgroundColor = localStorage.getItem("color");
// ChangeBtn.addEventListener("click", () => {
//     if (localStorage.getItem("color")) {
//         form.style.backgroundColor = localStorage.getItem("color");

//         localStorage.removeItem("color", "red");
//     } else {

//         form.style.backgroundColor = "#fff";
//         localStorage.setItem("color", "red");
//     }

// });
