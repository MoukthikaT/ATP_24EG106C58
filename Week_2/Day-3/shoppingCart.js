/*

ASSIGNMENT 1:

-------------

You are building a shopping cart summary for an e-commerce website.


Test Data : 

const cart = [

{ id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },

{ id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },

{ id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },

{ id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }

];


Tasks:

1. Use filter() to get only inStock products

2. Use map() to create a new array with: { name, totalPrice }

3. Use reduce() to calculate grand total cart value

4. Use find() to get details of "Mouse"

5. Use findIndex() to find the position of "Keyboard"

*/


// 1 

const cart = [

{ id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },

{ id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },

{ id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },

{ id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }

];


let r1=cart.filter(ele=>ele.inStock==true)

console.log(r1)


// 2

let r2=cart.map(ele=>[ele.name,ele.price*ele.quantity])

console.log(r2)


// 3

let r3=cart.reduce((acc,ele)=>{
    return acc+(ele.price*ele.quantity)
},0)
console.log(r3)

// 4
let r4=cart.find(ele=>ele.name=="Mouse")
console.log(r4)

// 5

let r5=cart.findIndex(ele=>ele.name=="Keyboard")
console.log(r5)