const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Create task item
  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">X</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function toggleComplete(taskSpan) {
  taskSpan.parentElement.classList.toggle("completed");
}

function deleteTask(button) {
  button.parentElement.remove();
}
