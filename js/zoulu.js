// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;
// function nextSlide() {
//   slides[currentSlide].classList.remove('active');
//   currentSlide = (currentSlide + 1) % slides.length;
//   slides[currentSlide].classList.add('active');
// }


var slide = document.querySelectorAll('.slide');
for(let i=0;i<span.length;i++){
    span[i].onmouseover = function(){
        for(let j=0;j<span.length;j++){
            tc[j].style.display="none";
            tc[i].style.display="block";
        }
        tc[i].style.display="block";
    }
}
setInterval(nextSlide, 3000); 