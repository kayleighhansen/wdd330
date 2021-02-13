export class Task {
    constructor(taskDescription, taskColor) {
        this.TaskId = Date.now();
        this.TaskDescription = taskDescription;
        this.TaskCompleted = false;        
        this.TaskColor = taskColor;
    }
}