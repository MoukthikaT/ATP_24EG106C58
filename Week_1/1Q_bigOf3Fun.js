//Q5. Write a function that receives 3 number arguments and return the big number

function greatest(a,b,c){
    if(a>b && a>c){
    return a
}
else if(b>c && b>a){
    return b
}
else{
    return c
}
}

big=greatest(152,841,123)
console.log("The big number is",big)