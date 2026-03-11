console.log("Waiting for 10000 for tomorrow")
let future=true

const promiseObj=new Promise((a,b)=>{
    setTimeout(()=>{
        if(future===true){
            a("10000 sent")
        }
        else{
            b("10000 not sent")
        }
    },10000);
})
promiseObj
.then((message)=>console.log("Message in then:",message))
.catch((errorMessage)=>console.log("Error is:",errorMessage))
