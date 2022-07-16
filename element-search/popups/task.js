let main = document.getElementById('modal_main');
let close = document.querySelectorAll('div.modal__close');
let show_success = document.querySelector('.show-success')
let success = document.getElementById('modal_success');

close[0].onclick = function () {
  main.className = "modal";
}

show_success.onclick = function () {
  success.className = "modal modal_active";
  main.className = "modal";
}

close[1].onclick = function () {
  success.className = "modal";
}
