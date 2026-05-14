/*
2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends
        */

// console.log("OTP sent Successfully")
// let v=10
// setInterval(()=>{
//     if(v>0){
//         console.log(v)
//         v--
//     }},1000)

// setTimeout(()=>{
//     console.log("Resend OTP")
// },11000)


console.log("OTP sent successfully")
let s=5;
let intervalId=setInterval(()=>{
    console.log(s)
    s--;
    if(s===0){
        console.log("Resend OTP");
        clearInterval(intervalId);
    }
},1000)
