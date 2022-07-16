let prev = document.querySelector('.slider__arrow_prev');
let next = document.querySelector('.slider__arrow_next');
let slider__item = document.querySelectorAll('.slider__item');
let arr = Array.from(slider__item)
let slideNumber = 0;

prev.onclick = function () {
  if (slideNumber == 0) {
    arr[slideNumber].classList.toggle("slider__item_active");
    slideNumber = arr.length - 1;
    arr[slideNumber].classList.toggle("slider__item_active");
  } else {
    arr[slideNumber].classList.toggle("slider__item_active");
    slideNumber --;
    arr[slideNumber].classList.toggle("slider__item_active");
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
