import { useEffect , useState } from "react";

function APIDemo(){
    let [users, setUsers]=useState([]);
    let [loading,setLoading]=useState(false);
    let [error,setError]=useState(null);
    useEffect(()=>{
        console.log("Use Effect executed")
        async function getData() {
                setLoading(true);
            try{
                let res=await fetch("https://jsonplaceholder.typicode.com/comments")
                let usersList=await res.json();
                // update state
                setUsers(usersList);
            } catch(err){
                console.log("Err is",err)
                setError(err)
            }finally{
                setLoading(false)
            }
        }
        getData();
    },[]);
    console.log("API Demo rendered");

    // Making API req need to be in waiting until initial rendering finishes
    // Initial Render---> Display---> API CALL---> Re-render---> Display

    // deal with loading state
    if(loading){
        return <p className="text-center text-4xl">Loading...</p>
    }

    // deal with error state
    if(error!==null){
        return <p className="text-center text-red-500">{error.message}</p>
    }
    return(
        <div className="text-center mt=10">
            <h1 className="text-6xl text-blue-400">List of Users</h1>
            <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{users.map((userObj)=>(
                <div key={userObj.id}>
                <p>{userObj.title}</p>
                <p>{userObj.body}</p>    
                </div>
            ))}
            </div>
        </div>
    )
    }

export default APIDemo;