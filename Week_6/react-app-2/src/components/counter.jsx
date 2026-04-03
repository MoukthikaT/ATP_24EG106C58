//Counter,
import {useState} from "react";

function Counter(){
    const [count,setCount] =useState(0)

    const increment=()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        setCount(count-1)
    }

    const reset=(value)=>{
        setCount(value)
    }
    
    return(
        <div className="m-auto text-center p-2" >
            <h1 className="">Count:{count}</h1>
            <button className="m-2 p-2 bg-amber-600" onClick={increment}>+</button>
            <button className="m-2 p-2 bg-blue-600" onClick={decrement}>-</button>
            <button className="m-2 p-2 bg-pink-600" onClick={()=>reset(0)}>reset</button>
        </div>
    )
}

export default Counter