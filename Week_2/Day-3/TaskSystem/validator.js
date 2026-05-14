//1. Validate task title (not empty, min 3 chars)
 function validateTitle(title) {
// Your code here
if (title==null || title.length<3)
    return false
    return true
  }
                      
  // 2. Validate priority (must be: low, medium, high)
  function validatePriority(priority) {
    if(priority=="low" || priority=="medium" || priority=="high")
        return true
    //let 
    //let priorities.includes(priority)
    return false
  }
                      
  // 3. Validate due date (must be future date)
  function validateDueDate(date) {
    let dueDate=new Date('2024-10-20')
    let today=new Date()
    if(dueDate>today)
        return "Invalid date"
    return true
  }
export{validateTitle,validatePriority,validateDueDate}
