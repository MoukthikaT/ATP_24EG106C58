/*
ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
    
*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1
let r1=transactions.filter(ele=>ele.type=="credit")
console.log(r1)

// 2
let r2=transactions.map(ele=>ele.amount)
console.log(r2)

// 3
let r3=transactions.reduce((acc,ele)=>{
    if(ele.type=="credit"){
        return acc+ele.amount
    }
    else if(ele.type=="debit"){
        return acc-ele.amount
    }
},0)
console.log("Total Balance:",r3)

// 4
let r4=transactions.find(ele=>ele.type=="debit")
console.log(r4)

// 5
let r5=transactions.findIndex(ele=>ele.amount==10000)
console.log(r5) 