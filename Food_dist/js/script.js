window.addEventListener("DOMContentLoaded",( )=>{
let tabs = document.querySelectorAll(".tabheader__item");
let tabsParent=document.querySelector(".tabheader__items");
let tabsContent=document.querySelectorAll(".tabcontent");

function hideTabContent(){
    tabsContent.forEach(item=>{
    item.style.display="none";
    tabs.forEach(e=>{
        e.classList.remove("tabheader__item_active");
    });
});
}

function showTabContent(i=0){
tabs[i].classList.add("tabheader__item_active");
tabsContent[i].style.display="block";
tabsContent[i].classList.add("fade");
}
hideTabContent();
showTabContent();

tabsParent.addEventListener("click",(event)=>{
    if (event.target && event.target.classList.contains("tabheader__item")){
       tabs.forEach((item,i) =>{
          if (item==event.target){
             hideTabContent();
            showTabContent(i);
            }
        });
    }
});
    
const deadline = '2021-11-06';
// console.log(Date.parse('2021-11-04'));
// let T= Date.parse(deadline)-Date.parse(new Date());
// console.log(T/(1000*60*60));



function getTimeRemanig(endtime) {
let t =  Date.parse(endtime)- Date.parse(Date());
console.log(t/(1000*60*60*24));
let days=Math.floor(t/(1000*60*60*24));
console.log(days+" дней");
let hours=Math.floor((t/(1000*60*60)%24)-3);
console.log(hours+" часов");
let minutes=Math.floor(t/(1000*60)%60);
console.log(minutes+" минут");
let seconds=Math.floor(t/1000%60);
console.log(seconds+" секунд");
return {
"total": t,
"days" : days,
"hours": hours,
"minutes": minutes,
"seconds": seconds
};
}


function setClock(selector,endtime){
let timer= document.querySelector(selector);
let days= timer.querySelector("#days");
let hours= timer.querySelector("#hours");
let minutes= timer.querySelector("#minutes");
let seconds= timer.querySelector("#seconds");
const SetInterval = setInterval(updateClock, 1000);
updateClock();
function updateClock(){
let t = getTimeRemanig(endtime);
days.innerHTML=getZero(t.days);
hours.innerHTML=getZero(t.hours);
minutes.innerHTML=getZero(t.minutes);
seconds.innerHTML=getZero(t.seconds);
if (t<=0){
    clearInterval(SetInterval);
}
}
}
setClock(".timer",deadline);

function getZero(num){
    if (num>0 && num<10){
        return `0${num}`;
    }else{
        return num;
    }
}




});// конец DOMContentLoaded



