const newTask = document.querySelector("#input-box");
const taskList = document.querySelector(".todoTaskList");
const addTaskBtn = document.querySelector("button");
const date = new Date();
const d = date.getDate();
const m = date.getMonth();
const y = date.getFullYear();
const taskAddedDate = `${d}/${m}/${y}`;

console.log(taskAddedDate);

addTaskBtn.addEventListener("click", () => {
  if (newTask.value === "") {
    alert("Enter your task before adding.");
  } else {
    let todoTask = document.createElement("div");
    todoTask.classList.add("todoTask");
    todoTask.innerHTML = `
    <div class="taskContainer">
        <input type="checkbox" id="taskCompleted">
        <div class="task">
            <p> ${newTask.value} </p>
        </div>
        <p id="date"> ${taskAddedDate} </p>
    </div>
    <button class="delete-icon">
        <i class="bi bi-trash3"></i>
    </div>`;

    taskList.appendChild(todoTask);

    // deleteBtn
    todoTask.querySelector(".delete-icon").addEventListener("click", (e) => {
      // console.log(hii);
      todoTask.remove();
    });

    // taskCompelted-checkbox
    todoTask.querySelector("#taskCompleted").addEventListener("click", (e) => {
      todoTask.classList.toggle("checked");
    });
  }
  newTask.value = "";
});
