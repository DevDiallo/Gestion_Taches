function saveTask(event) {
    event.preventDefault(); // empeche le reload de la page

    let task_input = document.getElementById("task-input").value;
    let choix = document.querySelector('input[name="choice"]:checked').value;
    let etat = (choix === "completed") ? "true" : "false";

    let table = document.querySelector("#task-table tbody");
    let row = table.insertRow(-1); // insérer une nouvelle ligne à la fin du tableau
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = '<input type="checkbox">';  // créer une checkbox
    cell2.innerHTML = table.rows.length; // une colonne qui s'incremente
    cell3.innerHTML = task_input;
    cell4.innerHTML = etat;

    document.getElementById("task-form").reset(); // reset le formulaire
}

function deleteTasks() {
    let task_selected = document.querySelectorAll('#task-table tbody input[type="checkbox"]:checked');
    task_selected.forEach(function (checkbox) {
        let row = checkbox.parentElement.parentElement; // accéder à la ligne parente de la checkbox
        row.remove(); // supprimer la ligne
    });
}