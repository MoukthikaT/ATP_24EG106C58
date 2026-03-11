// Q4. Find the smallest element in the marks array

let marks=[90,78,65,98]
let min=10000
for(index=0;index<marks.length;index++)
{
    if(marks[index]<min){
        min=marks[index]
    }
}
console.log("The minimum is:",min)