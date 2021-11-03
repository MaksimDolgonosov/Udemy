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

const deadline = '2021-11-09';
console.log(Date.parse('2021-11-04'));
let T= Date.parse(deadline)-Date.parse(new Date());
console.log(T/(1000*60*60));



function getTimeRemanig(endtime) {
let t =  Date.parse(endtime)- Date.parse(Date());
console.log(t/(1000*60*60*24));
let days=Math.floor(t/(1000*60*60*24));
console.log(days+" дней");
let hours=Math.floor((t/(1000*60*60)%24)-3);
console.log(hours+" часов");
let min=Math.floor(t/(1000*60)%60);
console.log(min+" минут");
let sec=Math.floor(t/1000%60);
console.log(sec+" секунд");
}

getTimeRemanig(deadline);


