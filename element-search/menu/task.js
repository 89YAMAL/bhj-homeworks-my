let links = document.querySelectorAll('.menu__link');
let arrLinks = Array.from(links);


for (let i = 0; i < arrLinks.length; i++) {
  arrLinks[i].onclick = function () {
    // if (arrLinks[i].nextElementSibling.className === "menu menu_sub") {
    //   arrLinks[i].nextElementSibling.className = "menu menu_sub menu_active";
    // } else {
    //   arrLinks[i].target.nextElementSibling.className = "menu menu_sub";
    // }
    //
    // if (arrLinks[i].closest('.menu_main')) {
    //   return false;
    // }
    if (arrLinks[i].nextElementSibling !== null) {
      if (arrLinks[i].nextElementSibling.className === "menu menu_sub") {
      arrLinks[i].nextElementSibling.className = "menu menu_sub menu_active";
    } else if (arrLinks[i].nextElementSibling.className === "menu menu_sub menu_active") {
      arrLinks[i].nextElementSibling.className = "menu menu_sub";
      }
      return false;
    }
  }
}








    // if (arrLinks[i].parentElement.querySelector('.menu_sub').className === "menu menu_sub") {
    //   arrLinks[i].parentElement.querySelector('.menu_sub').className = "menu menu_sub menu_active";
    // } else {
    //   arrLinks[i].parentElement.querySelector('.menu_sub').className = "menu menu_sub";
    // }
    //
    // if (arrLinks[i].closest('.menu_main')) {
    //   return false;
    // }

//   }
// }
