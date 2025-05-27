const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Handle adding a new task
addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.classList.add('task'); // for styling consistency

  // Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('task-checkbox');

  // Task Text
  const span = document.createElement('span');
  span.textContent = taskText;

  // Remove Button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove-btn');
  

  // Delete logic: remove only if checkbox is checked
  removeBtn.addEventListener('click', () => {
    if (checkbox.checked) {
      li.remove();
    } else {
      alert('Please complete the task before removing.');
    }
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
  taskInput.focus();
}

// Handle static task's delete button
document.addEventListener('DOMContentLoaded', () => {
  const deleteBtn = document.querySelector('.task-delete');
  const checkbox = document.querySelector('.task-checkbox');

  if (deleteBtn && checkbox) {
    deleteBtn.addEventListener('click', () => {
      const task = deleteBtn.closest('.task');
      if (checkbox.checked) {
        task.remove();
      } else {
        alert('Please complete the task before deleting.');
      }
    });
  }
});