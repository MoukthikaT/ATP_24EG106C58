import { addTask,getAllTasks,completeTask} from './task.js';
// Test your module system
// 1. Add some tasks
addTask("eating","high","2024-12-12")
addTask("sleep","high","2024-12-21")

// 2. Display all tasks
console.log(getAllTasks())
// 3. Complete a task
completeTask("sleep")
// 4. Display all tasks again
console.log(getAllTasks())
