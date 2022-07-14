const timer = document.getElementById("timer");

function winner() {
  if (timer.textContent >= 1) {
    timer.textContent --;
  } else if (timer.textContent === '0') {
    alert("Вы победили в конкурсе!");
    clearInterval(interval);
  }
}

const interval = setInterval(winner, 1000);
