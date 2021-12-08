function tabs() {

    let tabs = document.querySelectorAll(".tabheader__item");
    let tabsParent = document.querySelector(".tabheader__items");
    let tabsContent = document.querySelectorAll(".tabcontent");

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = "none";
            tabs.forEach(e => {
                e.classList.remove("tabheader__item_active");
            });
        });
    }

    function showTabContent(i = 0) {
        tabs[i].classList.add("tabheader__item_active");
        tabsContent[i].style.display = "block";
        tabsContent[i].classList.add("fade");
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (item == event.target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


}
module.exports = tabs;