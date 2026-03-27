import { getTasks, addTask, deleteTask } from "./taskService";
import { Task } from "./task";
import { loadData } from "./api";
let tbody = document.querySelector("#task-table tbody") as HTMLTableSectionElement;

function displayTasks() {
    let tasks = getTasks();
    if (!tbody) return;
    tbody.innerHTML = "";
    tasks.forEach((task: Task) => {
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
document.getElementById("ajouter")?.addEventListener("click", function (e: any) {
    e.preventDefault();
    let tasks = getTasks();
    let title = (document.getElementById("title") as HTMLInputElement).value;
    let choice = (document.querySelector('input[name="choice"]:checked') as HTMLInputElement).value;
    let status = (choice === "completed") ? "True" : "False";

    addTask(title, status);
    displayTasks();
})

// supprimer une ou plusieurs taches
document.getElementById("supprimer")?.addEventListener("click", function () {
    console.log("supprimer");
    let taskSelected = document.querySelectorAll('input[name="task-selected"]:checked');
    taskSelected.forEach(function (checkbox) {
        let row: any = checkbox.closest("tr");
        // récupérer le Id AVANT suppression
        let taskId = row.querySelector("td:nth-child(2)")?.textContent
        deleteTask([parseInt(taskId)])
    })

    displayTasks();
})

window.addEventListener("load", async () => {
    console.log("welcome")
    let tasks = await loadData();
    tasks.forEach((task: Task) => addTask(task.getTitle(), task.isCompleted()));
    displayTasks();
});

