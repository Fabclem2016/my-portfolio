let tasks = [];

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const errorBox = document.getElementById("taskError");
const countBox = document.getElementById("taskCount");

function saveTasks() {
  try { localStorage.setItem("tasks", JSON.stringify(tasks)); } catch (e) {}
}

function loadTasks() {
  try { tasks = JSON.parse(localStorage.getItem("tasks")) || []; } catch (e) { tasks = []; }
}

function addTask(text) {
  tasks.push({ id: Date.now(), text: text, done: false });
  saveTasks();
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  renderTasks();
}

function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    if (task.done) li.classList.add("done");

    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = task.done;
    box.setAttribute("aria-label", "Mark task as completed");
    box.addEventListener("change", () => toggleTask(task.id));

    const label = document.createElement("span");
    label.textContent = task.text;

    const del = document.createElement("button");
    del.className = "del";
    del.textContent = "Delete";
    del.addEventListener("click", () => deleteTask(task.id));

    li.append(box, label, del);
    list.appendChild(li);
  });
  const done = tasks.filter((t) => t.done).length;
  countBox.textContent = tasks.length + " task(s), " + done + " completed";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text === "") {
    errorBox.textContent = "Please enter a task.";
    return;
  }
  errorBox.textContent = "";
  addTask(text);
  input.value = "";
});

loadTasks();
renderTasks();
