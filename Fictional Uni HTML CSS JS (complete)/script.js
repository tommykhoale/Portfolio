
const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides(){
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}
    

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

$(document).ready(function(){
    $('#typewriteText').typewrite({
        actions: [
            {type: 'Coding'},
            {delay: 2500},
            {remove: {num: 6, type: 'stepped'}},
            {type: 'Technology'},
            {delay: 2500},
            {remove: {num: 10, type: 'stepped'}},
            {type: 'the Future'}
        ]
    });
});

$(`i`).on(`click`, function(){
    $(`#links`).fadeToggle();
    $(`#links`).toggleClass(`hidden`);
});