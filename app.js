function saveTasks(event, task) {
    /*
    let task_input = document.getElementById("task-input").value;
    let choix = document.querySelector('input[name="choice"]:checked').value;
    let etat = (choix === "completed") ? "true" : "false";
    */
    let table = document.querySelector("#task-table tbody");
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td><input type="checkbox" name="task-select"></td>
        <td>${task.id}</td>
        <td>${task.title}</td>
        <td>${task.etat}</td>
    `;
    table.appendChild(tr);

    //document.getElementById("task-form").reset(); // reset le formulaire
}


