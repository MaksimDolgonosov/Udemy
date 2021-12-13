function slides({ container, slide, nextArrow, prevArrow, wrapper, field, totalCounter, currentCounter }) {
    //Слайды
    // const slides = document.querySelectorAll(".offer__slide");

    // if (slides.length < 10) {
    //     document.querySelector("#total").textContent = `0${slides.length}`;
    // } else {
    //     document.querySelector("#total").textContent = slides.length;
    // }

    // const nextBtn = document.querySelector(".offer__slider-next");
    // const prevBtn = document.querySelector(".offer__slider-prev");

    // let nowId = 0;
    // showSlide(nowId);
    // nextBtn.addEventListener("click", () => {
    //     nowId = nowId + 1;
    //     if (nowId > 3) {
    //         reset(0);
    //         showSlide(nowId);
    //     } else {
    //         showSlide(nowId);
    //     }

    // });

    // prevBtn.addEventListener("click", () => {
    //     nowId = nowId - 1;
    //     if (nowId < 0) {
    //         reset(slides.length - 1);
    //         showSlide(nowId);
    //     } else {
    //         showSlide(nowId);
    //     }
    // });
    // function reset(i) {
    //     nowId = i;
    // }

    // function showSlide(nowId) {

    //     slides.forEach(arr => arr.classList.add("hide", "fade"));
    //     slides[nowId].classList.remove("hide");
    //     slides[nowId].classList.add("show");
    //     slides[nowId].classList.remove("show");


    //     if (slides.length < 10) {
    //         document.querySelector("#current").textContent = `0${nowId + 1}`;
    //     } else {
    //         document.querySelector("#current").textContent = nowId + 1;
    //     }
    // }


    // слайды второй вариант

    const slides = document.querySelectorAll(slide);
    const slider = document.querySelector(container);
    const slidesWrapper = document.querySelector(wrapper);
    const slidesField = document.querySelector(field);
    const total = document.querySelector(totalCounter);
    const current = document.querySelector(currentCounter);
    const nextBtn = document.querySelector(nextArrow);
    const prevBtn = document.querySelector(prevArrow);
    const width = window.getComputedStyle(slidesWrapper).width;
    let offset = 0;
    let slideIndex = 1;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }



    slidesField.style.width = 100 * slides.length + "%";
    slides.forEach(slide => {
        slide.style.width = width;
    });

    slidesField.style.display = 'flex';
    slidesWrapper.style.overflow = "hidden";
    slidesField.style.transition = '0.5s all';

    slider.style.position = "relative";
    let indicators = document.createElement('ol');
    let dots = [];
    indicators.classList.add("carousel-indicators"); // такого класса в данном проекте нет, все стили описаны ниже
    indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {

        const dot = document.createElement('li');
        dot.setAttribute("data-slide-to", i + 1);
        dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
        `;

        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }




    nextBtn.addEventListener("click", () => {
        if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, "");
        }

        slidesField.style.transform = `translateX(-${offset}px)`;


        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        dots.forEach(dot => {
            dot.style.opacity = 0.5;
        });
        dots[slideIndex - 1].style.opacity = 1;

        if (slideIndex < 10) {
            document.querySelector("#current").textContent = `0${slideIndex}`;
        } else {
            document.querySelector("#current").textContent = slideIndex;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (offset == 0) {
            offset = width.replace(/\D/g, '') * (slides.length - 1);
        } else {
            offset -= +width.replace(/\D/g, "");
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        dots.forEach(dot => {
            dot.style.opacity = 0.5;
        });
        dots[slideIndex - 1].style.opacity = 1;

        if (slideIndex < 10) {
            document.querySelector("#current").textContent = `0${slideIndex}`;
        } else {
            document.querySelector("#current").textContent = slideIndex;
        }
    });


    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            slideIndex = e.target.getAttribute("data-slide-to");
            if (slideIndex < 10) {
                document.querySelector("#current").textContent = `0${slideIndex}`;
            } else {
                document.querySelector("#current").textContent = slideIndex;
            }
            offset = width.replace(/\D/g, "") * (slideIndex - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => {
                dot.style.opacity = 0.5;
            });
            e.target.style.opacity = 1;
        });

    });

}

export default slides;