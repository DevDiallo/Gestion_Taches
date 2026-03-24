import { getTasks, saveTasks, addTask, deleteTasks } from "./tasks.js";
import { loadData } from "./api.js";


let tbody = document.querySelector("#task-table tbody");

// display tasks from localStorage
function displayTasks() {
    let tasks = getTasks();

    tbody.innerHTML = ""; // Clear existing rows
    tasks.forEach(function (task) {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td><input type="checkbox" name="task-select"></td>
            <td>${task.id}</td>
            <td>${task.title}</td>
            <td>${task.etat}</td>
        `;
        tbody.appendChild(tr);
    });
}


// Ajouter une tache
document.getElementById("btn-ajouter").addEventListener("click", function (event) {
    event.preventDefault();

    let title = document.getElementById("task-input").value;
    let choice = document.querySelector('input[name="choice"]:checked').value;
    let etat = (choice === "completed") ? "True" : "False";

    if (typeof (Storage) !== "undefined") {
        console.log("localStorage is supported.");
        addTask({ title, etat });
        displayTasks();
        document.getElementById("task-form").reset(); // reset le formulaire
    } else {
        console.error("localStorage is not supported in this browser.");
    }
});

// Supprimer les taches selectionnees
document.getElementById("btn-supprimer").addEventListener("click", function () {
    let tasksSelected = document.querySelectorAll('input[name="task-select"]:checked');

    tasksSelected.forEach(function (checkbox) {
        let row = checkbox.closest("tr");

        // récupérer le Id AVANT suppression
        let taskId = parseInt(row.querySelector("td:nth-child(2)").textContent);

        // supprimer la tache du tableau des taches existantes
        deleteTasks([taskId]);

    });
    displayTasks();
});

// Charger les taches depuis le localStorage au chargement de la page
window.addEventListener("load", async () => {
    let tasks = getTasks();
    if (tasks.length === 0) {
        // Load default tasks or fetch from API
        let tasksFromApi = await loadData();
        saveTasks(tasksFromApi);
    }
    displayTasks();
});
