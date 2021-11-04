'use strict';

let btn = document.querySelector("button"),
    box = document.querySelector(".box");

let width=box.offsetWidth;
let height=box.offsetHeight;

console.log(width, height);
btn.addEventListener("click",()=>{
console.log(box.scrollHeight);
 box.style.width=box.scrollHeight+"px";
 


 });