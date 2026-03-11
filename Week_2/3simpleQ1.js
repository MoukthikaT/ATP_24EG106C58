/*Assignment 1: Daily Temperature Analyzer

----------------------------------------

Scenario : You are analyzing daily temperatures recorded by a weather app.


Test data:

const temperatures = [32, 35, 28, 40, 38, 30, 42];


Tasks:

1. filter() temperatures above 35

2. map() to convert all temperatures from Celsius â†’ Fahrenheit

3. reduce() to calculate average temperature

4. find() first temperature above 40

5. findIndex() of temperature 28

*/


// 1

const temperatures=[32,35,28,40,38,30,42]

let res=temperatures.filter((element)=>element>35)

console.log(res)


// 2

let r=temperatures.map((element)=>(element*1.8)+32)

console.log(r)


// 3

let s=temperatures.reduce((acc,ele)=>{

return (acc+ele)

})/temperatures.length

console.log(s)


// 4

let resu=temperatures.find(ele=>ele>40)

console.log(resu)


// 5

let re=temperatures.findIndex((ele)=>ele==28)

console.log(re)