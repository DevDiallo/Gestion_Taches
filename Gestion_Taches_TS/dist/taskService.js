import { Task } from "./task.js";
function getTasks() {
    let tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks).map((t) => new Task(t.id, t.title, t.completed)) : [];
}
function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function addTask(title, completed) {
    let tasks = getTasks();
    let lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
    //let title = task.getTitle();
    //let completed = task.isCompleted();
    let newTask = new Task(lastId + 1, title, completed);
    tasks.push(newTask);
    saveTasks(tasks);
}
function deleteTask(taskIds) {
    let tasks = getTasks();
    tasks = tasks.filter((task) => !taskIds.includes(task.getId()));
    saveTasks(tasks);
}
export { getTasks, addTask, deleteTask };
