export class Task {
    taskId: string = '';
    taskName: string = '';
    taskDescription: string = '';
    isCompleted: boolean = false;
    timestamp: number = new Date().getTime()

    constructor (task: {[key: string]: any}) {
        if (task) {
            this.taskId = task["taskId"] || task["id"] || '';
            this.taskName = task["taskName"] || task["name"] || '';
            this.taskDescription = task["taskDescription"] || task["description"] || '';

            if (String(task["isCompleted"]) === 'true' || String(task["isCompleted"]) === 'false') {
                this.isCompleted = String(task["isCompleted"]) === 'true';
            }

            if(isNaN(this.timestamp = parseInt(task['timestamp']))) {
                this.timestamp = new Date().getTime();
            }
        }
    }
}
