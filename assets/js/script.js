'use strict';


/** Event listener -> x elements */

const addEventOnElements = function(elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}

/* Mobile nav Toggle */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggle]");

const toggleNav = () => navbar.classList.toggle("active");

addEventOnElements(navTogglers, "click", toggleNav);


/* Header animations 
--> After 100px scroll, header will still be active*/

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[btop-btn]");

window.addEventListener("scroll", () => {
    if(window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
})





/* Slider (Topics) */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

/** Next slide */

const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if (slideEnd){
        currentSlidePos = 0
    } else {
        currentSlidePos++;
    }

    moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);

/* Prev slide */

const slidePrev = function () {
    if (currentSlidePos <= 0){
        currentSlidePos = totalSlidableItems;
    } else {
        currentSlidePos--;
    }

    moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrev);


/* Responsive reactions */

window.addEventListener("resize", function () {
    totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    moveSliderItem();
});


