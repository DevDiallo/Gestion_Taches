import { getTasks, addTask, deleteTask } from "./taskService.js";
import { loadData } from "./api.js";
let tbody = document.querySelector("#task-table tbody");
function displayTasks() {
    let tasks = getTasks();
    if (!tbody)
        return;
    tbody.innerHTML = "";
    tasks.forEach((task) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td><input type="checkbox" name="task-selected"></td>
            <td>${task.getId()}</td>
            <td>${task.getTitle()}</td>
            <td>${task.isCompleted()}</td>
        `;
        tbody.appendChild(tr);
    });
}
// ajouter une tache  
document.getElementById("ajouter")?.addEventListener("click", function (e) {
    e.preventDefault();
    let tasks = getTasks();
    let title = document.getElementById("title").value;
    let choice = document.querySelector('input[name="choice"]:checked').value;
    let status = (choice === "completed") ? "True" : "False";
    addTask(title, status);
    displayTasks();
});
// supprimer une ou plusieurs taches
document.getElementById("supprimer")?.addEventListener("click", function () {
    console.log("supprimer");
    let taskSelected = document.querySelectorAll('input[name="task-selected"]:checked');
    taskSelected.forEach(function (checkbox) {
        let row = checkbox.closest("tr");
        // récupérer le Id AVANT suppression
        let taskId = row.querySelector("td:nth-child(2)")?.textContent;
        deleteTask([parseInt(taskId)]);
    });
    displayTasks();
});
window.addEventListener("load", async () => {
    console.log("welcome");
    let tasks = await loadData();
    tasks.forEach((task) => addTask(task.getTitle(), task.isCompleted()));
    displayTasks();
});
