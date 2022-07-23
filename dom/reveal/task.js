const reveal = Array.from(document.querySelectorAll('.reveal'));


document.onscroll = function() {
  for (let i = 0; i < reveal.length; i++) {
    // console.log(reveal[i].getBoundingClientRect());
    // console.log(window.innerHeight);
    const {top, bottom} = reveal[i].getBoundingClientRect();

    if (top > 0 && bottom < window.innerHeight) {
      reveal[i].classList.add('reveal_active');
    } else {
      reveal[i].classList.remove('reveal_active');
    }
  }
}
