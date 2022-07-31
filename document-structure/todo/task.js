const taskAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
const tasksInput = document.getElementById('task__input');

tasksInput.addEventListener("keydown", (e) => {
  if (e.keyCode === 13 && tasksInput.value != '') {
    e.preventDefault();
    let text = tasksInput.value;
    tasksList.insertAdjacentHTML('beforeEnd', `<div class="task"><div class="task__title">${text}</div><a href="#" class="task__remove">&times;</a></div>`);
    tasksInput.value = '';

    let taskRemove = Array.from(document.querySelectorAll('.task__remove'));
    let task = Array.from(document.querySelectorAll('.task'));
    for (let i = 0; i < taskRemove.length; i++) {
      taskRemove[i].addEventListener('click', (e) => {
        e.preventDefault();
        task[i].remove();
      })
    }
  };
});

taskAdd.addEventListener("click", (e) => {
  if (tasksInput.value != '') {
    e.preventDefault();
    let text = tasksInput.value;
    tasksList.insertAdjacentHTML('beforeEnd', `<div class="task"><div class="task__title">${text}</div><a href="#" class="task__remove">&times;</a></div>`);
    tasksInput.value = '';

    let taskRemove = Array.from(document.querySelectorAll('.task__remove'));
    let task = Array.from(document.querySelectorAll('.task'));
    for (let i = 0; i < taskRemove.length; i++) {
      taskRemove[i].addEventListener('click', (e) => {
        e.preventDefault();
        task[i].remove();
      })
    }
  }
});
