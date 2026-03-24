import { useState } from "react";   
function Counter(){
    const [count,setCount]=useState(0);

    // functions to modify the state
    const increment=()=>{
        setCount(count+1)
    };
    const decrement=()=>{
        setCount(count-1)
    };
    console.log("Counter Component");
    return(
        <div className="text-center p-10 border">
            <h1 className="text-6xl">Count:{count}</h1>
        </div>
    )
}