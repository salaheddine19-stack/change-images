const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.querySelector('#left')
const rightBtn = document.querySelector('#right')
let activeSlide = 0
rightBtn.addEventListener('click', function (){
    activeSlide++
    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    setSlideImage()

})
leftBtn.addEventListener('click', function (){
    activeSlide--
    if (activeSlide < 0 ) {
        activeSlide = slides.length -1
    }

    setSlideImage()      
})
function changeBG() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}
function setSlideImage() {
    slides.forEach(function (slide) {
        slide.classList.remove('active')
    })
    slides[activeSlide].classList.add('active')
    changeBG()
}


 
 
