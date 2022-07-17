// const activeSlide = document.querySelector('.slider__item_active');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const slider__item = document.querySelectorAll('.slider__item');
let arr = Array.from(slider__item)
let slideNumber = 0;

// prev.addEventListener('click', function (ever) {
//   activeSlide.classList.toggle("slider__item_active");
// })

prev.onclick = function () {

  if (slideNumber == 0) {
    // arr[slideNumber].classList.toggle("slider__item_active");
    slideNumber = arr.length - 1;
    // arr[slideNumber].classList.toggle("slider__item_active");
  } else {
    // arr[slideNumber].classList.toggle("slider__item_active");
    slideNumber --;
    // arr[slideNumber].classList.toggle("slider__item_active");
  }
}

next.onclick = function () {

  if (slideNumber == arr.length - 1) {
    arr[slideNumber].classList.toggle("slider__item_active");
    slideNumber = 0;
    arr[slideNumber].classList.toggle("slider__item_active");
  } else {
    arr[slideNumber].classList.toggle("slider__item_active");
    slideNumber ++;
    arr[slideNumber].classList.toggle("slider__item_active");
  }
}
