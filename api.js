export async function loadData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        let data = await response.json();
        console.log(data);
        let tasksFromApi = data.map(task => ({
            id: task.id,
            title: task.title,
            etat: task.completed ? "True" : "False"
        }));
        console.log("Taches fromApi :", tasksFromApi);
        return tasksFromApi;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return [];
    }
}