export class Task {
    private id: number;
    private title: string;
    private completed: string;
    constructor(id: number, title: string, completed: string) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }


    // Getters
    public getId() {
        return this.id;
    }
    public getTitle(): string {
        return this.title;
    }

    public isCompleted(): string {
        return this.completed;
    }

    // Setters
    public setTitle(title: string): void {
        this.title = title;
    }

    public setCompleted(completed: string): void {
        this.completed = completed;
    }

}