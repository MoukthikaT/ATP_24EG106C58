/*

Assignment 3: Student Marks List

--------------------------------

Scenario : You receive marks from an exam system.


Test data:

const marks = [78, 92, 35, 88, 40, 67];


Tasks:

1. filter() marks â‰¥ 40 (pass marks)

2. map() to add 5 grace marks to each student

3. reduce() to find highest mark

4. find() first mark below 40

5. findIndex() of mark 92

*/


// 1

const marks = [78, 92, 35, 88, 40, 67]

let s=marks.filter(ele=>ele>=40)

console.log(s)


// 2

let s1=marks.map(ele=>ele+5)

console.log(s1)


// 3

let s2=marks.reduce((a,b)=>a>b?a:b)

console.log(s2)


// 4

let s3=marks.find(ele=>ele<40)

console.log(s3)


// 5

let s4=marks.findIndex(ele=>ele==92)

console.log(s4)