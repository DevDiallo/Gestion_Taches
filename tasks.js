export function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function addTask(task) {
    let tasks = getTasks();
    let lastId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) : 0;
    task.id = lastId + 1;
    tasks.push(task);
    saveTasks(tasks);
}

export function deleteTasks(taskIds) {
    let tasks = getTasks();
    tasks = tasks.filter(task => !taskIds.includes(task.id));
    saveTasks(tasks);
}

