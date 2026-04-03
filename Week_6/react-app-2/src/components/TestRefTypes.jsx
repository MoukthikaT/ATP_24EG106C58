import { useState } from "react";

function TestRefTypes(){
    const[user, setUser]= useState({username:"Vivek",age:21,city:"Hyd"});
    const[marks, setMarks]=useState([10,20,30]);

    // update user state
    const updateUser=()=>{
        setUser({...user,username:"Anand", age:26});
    };

    // update marks
    const updateMarks=()=>{
        setMarks([...marks,40]);
    }

    
}