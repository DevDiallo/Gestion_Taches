export class Task {
    constructor(id, title, completed) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
    // Getters
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    isCompleted() {
        return this.completed;
    }
    // Setters
    setTitle(title) {
        this.title = title;
    }
    setCompleted(completed) {
        this.completed = completed;
    }
}
