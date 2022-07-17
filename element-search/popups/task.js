let main = document.getElementById('modal_main');
let close = document.querySelectorAll('div.modal__close');
let show_success = document.querySelector('.show-success');
let success = document.getElementById('modal_success');


show_success.onclick = function () {
  success.className = "modal modal_active";
  main.className = "modal";
}


for (let i = 0; i <= close.length; i++) {
  close[i].onclick = function () {
    main.className = "modal";
    success.className = "modal";
  }
}
