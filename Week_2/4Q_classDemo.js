/*
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)

  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise

  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.

  2. Perform the following operations:
      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books

*/
class Book{
    title;
    author;
    pages;
    isAvailable=true;

    constructor(title,author,pages){
        this.title=title
        this.author=author
        this.pages=pages
    }

    borrow(){
        return this.isAvailable=false
    }

    returnBook(){
        return this.isAvailable=true
    }

    getInfo(){
        console.log(`${this.title} by ${this.author} (${this.pages} pages)`)
    }

    isLongBook(){
        if(this.pages>300){
            return true;
        }
        return false;
    }
}

// 1
let b1=new Book("Harry Potter","JK.ROwling",864)
let b2=new Book("1984","Charles",219)
let b3=new Book("The Hobbit","Ruskin",180)
let b4=new Book("The last Leaf","Peter",401)
let b5=new Book("The Lost Book","Albert",110)

// 2(i)
b1.getInfo()
b2.getInfo()
b3.getInfo()
b4.getInfo()
b5.getInfo()

// 2(ii)
console.log(b1.borrow())
console.log(b3.borrow())

// 2(iii)
console.log(b1.returnBook())

// 2(iv)
let c=0
if(isLongBook){
    c++;
}

//2(v)

