let links = document.querySelectorAll('.menu__link');
let arrLinks = Array.from(links);


for (let i = 0; i <= links.length; i++) {
  links[i].onclick = function () {

    if (links[i].parentElement.querySelector('.menu_sub').className === "menu menu_sub") {
      links[i].parentElement.querySelector('.menu_sub').className = "menu menu_sub menu_active";
      return false;
    } else {
      links[i].parentElement.querySelector('.menu_sub').className = "menu menu_sub";
    }
  }
}
