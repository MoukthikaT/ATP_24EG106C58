// Create HTTP Server
import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import { productApp } from './APIs/ProductAPI.js'
import cookieParser from 'cookie-parser';
const app=exp()

// add body parser
app.use(exp.json())

// add cookie parser middleware
app.use(cookieParser())

//forward request to UserApp if path starts with /user-api
app.use("/user-api",userApp)
app.use("/product-api",productApp)


// start server
app.listen(4000,()=>console.log(`server listening to port 4000...`))

// connect to DB server
async function connectDB(){
    try{
        await connect("mongodb://localhost:27017/anuragdb");
        // locahost-127.0.0.1---> replace localhost with this IP address if there is an error
        console.log("DB connection success")
    } catch(err){
        console.log("err in DB connection:",err);
    }
}

connectDB();

// error handling middleware
// this executes only when error occurs

/*
app.use((err,req,res,next)=>{
    res.json({message:"Error Occured",error:err.message})
})
*/
// error => {name,message,callstack}

app.use((err,req,res,next)=>{
    console.log(err.name)
    // console.log(err.code)
    // validation error
    if(err.name==='ValidationError'){
        return res.status(400).json({message:"Error Occured",error:err.message})
    }
    // cast error
    if(err.name==='CastError'){
        return res.status(400).json({message:"Error Occured",error:err.message})
    }

    // senf server side error
    res.status(500).json({message:"Error Occured",error:"Server Side Error"})
})
