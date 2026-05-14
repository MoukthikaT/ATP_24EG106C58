/*Q7. Write a function that receives an array & search element as args and returns 
the index of that search element in the array. It shouldn return "not found", 
when search element not found.
*/

function search(num, key) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] === key) {
      return i;
    }
  }
  return -1;
}

let p = search([78, 89, 56, 12, 484, 66, 48, 63], 12);
if (p === -1) {
  console.log("not found");
} else {
  console.log("Value found at index",p);
}