import { Task } from "./task.js";
async function loadData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    let data = await response.json();
    console.log(data);
    return data.map((task) => new Task(task.id, task.title, task.completed));
}
export { loadData };
