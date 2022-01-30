let activeSlideNumber = 1;

let arrowLeft = document.querySelector('.arrow-left');

let arrowRight = document.querySelector('.arrow-right');


let dot1 = document.querySelector('#dot1');
let dot2 = document.querySelector('#dot2');
let dot3 = document.querySelector('#dot3');

let slide1 = document.querySelector('#slide1');
let slide2 = document.querySelector('#slide2');
let slide3 = document.querySelector('#slide3');
/*----------------- DOT-------------------*/
let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active')
    activeElement.classList.remove('active'); 
}
let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide'+slideNumber).classList.add('active');
}
/*-----------ARROW------------------*/
let showNextSlide = () => {
    activeSlideNumber = activeSlideNumber + 1;
    showSlide(activeSlideNumber);
}
/*-----------ARROW------------------*/

let showSlide1 = () => {
    showSlide(1);
};
dot1.addEventListener('click', showSlide1);

let showSlide2 = () => {
    showSlide(2);
};
dot2.addEventListener('click', showSlide2); 


let showSlide3 = () => {
    showSlide(3);
};

dot3.addEventListener('click', showSlide3);

/*-----------ARROW------------------*/
arrowRight.addEventListener('click', showNextSlide);