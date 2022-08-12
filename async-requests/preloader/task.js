const loader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', ' https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.toggle('loader_active');
    let text = JSON.parse(xhr.responseText);
    let valute = text.response.Valute;

    for (let key in valute) {
      let charCode = valute[key].CharCode;
      let value = valute[key].Value;

      let newElement = document.createElement('div');
      newElement.setAttribute('class', 'item');
      newElement.innerHTML =
          `<div class='item__code'>${charCode}</div>
          <div class='item__value'>${value}</div>
          <div class='item__currency'>руб.</div>`;
      items.insertAdjacentElement('beforeEnd', newElement);
    }
  }
})
