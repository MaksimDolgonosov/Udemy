'use strict';
const btn=document.querySelector(".btn");
const box=document.querySelector(".box");
let i = 0;
btn.addEventListener("click",moveBox);

function moveBox (){
const timerId = setInterval(()=>{
    if (i==300){
        clearInterval(timerId);
    }else {
        i++;
    box.style.top=i+"px";
    box.style.left=i+"px";
    
    }
   
},10);

}




