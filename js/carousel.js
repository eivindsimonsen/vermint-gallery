let slidesPosition = 0
const slides = document.getElementsByClassName('carousel_img')
const totalSlides = slides.length

console.log(totalSlides)
console.log(slides)

document.getElementById('previous').addEventListener("click", function(){
    previousSlide()
});


document.getElementById('next').addEventListener("click", function(){
    nextSlide()
});

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('active')
        slide.classList.add('hidden')
    }

    slides[slidesPosition].classList.add('active');
}


function previousSlide() {
    updateSlidePosition()
    if (slidesPosition === 0) {
        slidesPosition = totalSlides - 1;
    }  else {
        slidesPosition--;
    }
}

function nextSlide() {
    updateSlidePosition()
    if (slidesPosition === totalSlides - 1) {
        slidesPosition = 0;
    } else {
        slidesPosition++;
    }
}