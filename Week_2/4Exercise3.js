//💡 Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter

// OR>>>const sum=(...a)=>{return a.reduce((p,q)=>p+q)}

function sum(...a){
    return a.reduce((p,q)=>p+q)
}
let result=sum(10,20,30,40,50,60)
console.log(result)

