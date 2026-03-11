//Q6. Write a function that received an array as arg and reutrn their sum

function sum(numbers){
    let s=0
    for(let i=0;i<numbers.length;i++){
        s=s+numbers[i]
    }
    return s
}

result=sum([15,89,45,23,77])
console.log("Sum:",result)