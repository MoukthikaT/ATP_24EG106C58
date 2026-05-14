/*
ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1
let r1=movies.filter(ele=>ele.genre=="Sci-Fi")
console.log(r1)

// 2

let r2=movies.map(ele=>{
  console.log(`${ele.title} (${ele.rating})`)
})

// 3
let r3=movies.reduce((acc,ele)=>{
    return acc+ele.rating
},0)/movies.length

console.log(r3)

// 4
let r4=movies.find(ele=>ele.title=="Joker")
console.log(r4)

// 5
let r5=movies.findIndex(ele=>ele.title=="Avengers")
console.log(r5)