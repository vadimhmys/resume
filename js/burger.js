"use strict"

let burgerIcon = document.querySelector('.burger__icon');
let cloneNav = document.querySelector('nav').cloneNode(true);
let burgerContainer = document.querySelector('.burger-container');

burgerContainer.append(cloneNav);

let listElementsFromBurgerContainer = burgerContainer.querySelectorAll('[class*="menu"]');
for(let elem of listElementsFromBurgerContainer) {
    elem.setAttribute('class',`burger-${elem.getAttribute('class')}`)
}

let burgerMenu = document.querySelector('.burger-menu');

burgerMenu.onclick = function(e) {
    let link = e.target.matches('.burger-menu__link');
    if(!link) return;
    document.body.style.overflow = '';
    burgerContainer.style.display = 'none';
    burgerIcon.classList.toggle('burger__opened');
};

burgerIcon.onclick = function() {
    this.classList.toggle('burger__opened');
    
    if(this.classList.contains('burger__opened')){
        burgerContainer.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        burgerContainer.style.display = 'none';
        document.body.style.overflow = '';
    }
};