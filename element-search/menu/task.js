let links = document.querySelectorAll('.menu__link');
let arrLinks = Array.from(links);


for (let i = 0; i <= arrLinks.length; i++) {
  arrLinks[i].onclick = function () {

    if (arrLinks[i].parentElement.querySelector('.menu_sub').className === "menu menu_sub") {
      arrLinks[i].parentElement.querySelector('.menu_sub').className = "menu menu_sub menu_active";

    } else if (arrLinks[i].parentElement.querySelector('.menu_sub').className ==="menu menu_sub menu_active"){
      arrLinks[i].parentElement.querySelector('.menu_sub').className = "menu menu_sub";
    }

    if (arrLinks[i].closest('.menu_main')) {
      return false;
    }

  }
}


// const links = Array.from(document.querySelectorAll('.menu__link'));
//
// for (let link of links) {
// 	link.onclick = function () {
// 		const parent = link.parentElement;
// 		if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {
// 			parent.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
// 		} else {
// 			parent.querySelector('.menu_sub').className = 'menu menu_sub'
// 		}
//
// 		if (link.closest('.menu_main')) {
// 			return false
// 		}
// 	}
// }
