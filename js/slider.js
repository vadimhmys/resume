"use strict"

let slider = document.querySelector('.slider');
let dotsWrapper = document.querySelector('.dots-wrapper');
let arrowPrev = document.querySelector('.arrow-prev');
let arrowNext = document.querySelector('.arrow-next');
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let slideIndex = 1;

dotsWrapper.addEventListener('click', e => {
    let dot = e.target;
    if(dot.tagName == 'SPAN') {
        chooseSlide(dot.dataset.dotNumber);
    }
});

arrowPrev.onclick = () => {
    changeSlide(-1);
};

arrowNext.onclick = () => {
    changeSlide(1);
};

showSlide(slideIndex);

function changeSlide(a) {
    showSlide(slideIndex += a);
}

function chooseSlide(a) {
    showSlide(slideIndex = a);
}

function showSlide(a) {
    if(a > slides.length) {
        slideIndex = 1;
    }

    if(a < 1) {
        slideIndex = slides.length;
    }

    for(let i = 0; i< slides.length; i++) {
        slides[i].style.display='none';
        dots[i].className = dots[i].className.replace('dot--active','');
        slides[i].className = slides[i].className.replace('slide--active','');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot--active');
    slides[slideIndex - 1].classList.add('slide--active');
}