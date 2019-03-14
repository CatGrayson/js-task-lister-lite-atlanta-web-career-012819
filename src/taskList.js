class TaskList {
    constructor ( ) {
        this.list = document.getElementById('tasks')
    }
    addTask (task) {
        this.list.appendChild (task.listItem)
    }
}
