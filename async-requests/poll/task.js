
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    let jsonAnswer = JSON.parse(xhr.responseText);
    pollTitle.innerText = jsonAnswer.data.title;

    let answers = jsonAnswer.data.answers;

    for (let i = 0; i < answers.length; i++) {
      pollAnswers.insertAdjacentHTML('beforeEnd',
      `<button class = "poll__answer">${answers[i]}</button>`)
    }

    const pollAnswer = document.querySelectorAll('.poll__answer');
    for (let i = 0; i < pollAnswer.length; i++) {
      pollAnswer[i].onclick = function() {
        alert('Спасибо, ваш голос засчитан!')
      }
    }
  }
})
