import { data } from '../mod1.js';
import { validateTitle,validatePriority,validateDueDate } from './validator.js';
                    
const tasks = [];

// 1. Add new task
function addTask(title, priority, dueDate) {
    // Validate using imported functions
    if(!validateTitle(title)&& !validatePriority(priority) && !validateDueDate(dueDate))
    {
    return "Invalid task"
    }
    tasks.push({title,priority,data})
    return "success"

    // If valid, add to tasks array

    // Return success/error message
}

// 2. Get all tasks
function getAllTasks() {
    // Return all tasks
    return tasks
}

// 3. Mark task as complete
function completeTask(taskId) {
    // Find task and mark as complete
    for(let taskObj of tasks)
    {
    if(taskObj.title==taskId)
        taskObj.status="complete"
    }
}

export {addTask,getAllTasks,completeTask}

// Export functions
