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



if (!localStorage.getItem("color")) {

    form.style.backgroundColor = "#fff";

} else {

    form.style.backgroundColor = "red";

}



ChangeBtn.addEventListener("click", () => {
    if (!localStorage.getItem("color")) {
        form.style.backgroundColor = "red";

        localStorage.setItem("color", "changed");
    } else {

        form.style.backgroundColor = "#fff";
        localStorage.removeItem("color");
    }

});


const person = {
    name: "Alex",
    age: 25

};

const StoragePersone = JSON.stringify(person);
localStorage.setItem("Alex", StoragePersone);
console.log(JSON.parse(localStorage.getItem("Alex")));