const form = document.getElementById('add-task-form');
const taskList = document.getElementById('task-list');

let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    span.textContent = `${task.name} - ${task.description}`;
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      const newName = prompt('Enter new name:', task.name);
      const newDescription = prompt('Enter new description:', task.description);
      if (newName && newDescription) {
        tasks[index].name = newName;
        tasks[index].description = newDescription;
        renderTasks();
      }
    });
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTasks();
    });
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements['task-name'].value;
  const description = form.elements['task-description'].value;
  if (name && description) {
    tasks.push({ name, description });
    form.reset();
    renderTasks();
  }
});

renderTasks();
