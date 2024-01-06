const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);

})
const sliderWrapper = document.querySelector('.slider-wrapper');
let currentIndex = 0;

function showSlide(index) {
  const translateValue = - index * 100 + '%';
  sliderWrapper.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 3;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  showSlide(currentIndex);
}

setInterval(nextSlide, 2000); // Auto slide every 2 seconds
var typed = new Typed(".auto-type",{
  strings : ["Well come To Home Sweet Home", "Make It Simple But Significant",
  "Your Dream Our Creation","Goood Design Doedn't Luxurious","For Your Home"],
  typeSpeed :120,
  backSpeed : 20,
  looped : true
})