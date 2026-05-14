//create http server

import exp from 'express'
const app=exp()

//use body parser middleware
app.use(exp.json())

const port=3000
//assign port no to HTTP server
app.listen(port, ()=>console.log("server listening to port", port,"..."))

//Test Data
    let users=[]

//Create APIs (REST API- representational State transfer)

    //Route to handle Get req of client (http://localhost:3000/users)
    app.get('/users/:id',(req,res)=>{
        //get id of the user from url parameter
        let idOfUrl=Number(req.params.id)   //{ id : value}
        //find index of user
        let index=users.findIndex(userObj=>userObj.id===idOfUrl)
        //if id not found
        if(index==-1)
            res.json({message:"User not found"})

        //send res
        res.json({message:"User Details",
            payload:users[index]
        })
    })
    //Route to handle POST req of Client
    app.post('/users',(req,res)=>{
        //get user from client
        const newUser=req.body
        //push user into users
        users.push(newUser)
        //send res
        res.json({message:"User Created"})
    })

    //Route to handle PUT req of Client
    app.put('/users',(req,res)=>{
    
        // get modified user from client
        let modiUser=req.body
        // get index of existing user in users array
        let index=users.findIndex(userObj=>userObj.id===modiUser.id)
        //if user not found
        if(index==-1)
            return res.json({message:"User not found"})
        //update user with index
        users.splice(index,1,modiUser)
        //send res
        res.json({message:"User Updated"})
    })

    //Route to handle DELETE req of Client
    app.delete('/users/:id',(req,res)=>{
        //get id od the user from url parameter
        let idOfUrl=Number(req.params.id)   //{ id : value}
        //find index of user
        let index=users.findIndex(userObj=>userObj.id===idOfUrl)
        //if id not found
        if(index==-1)
            res.json({message:"User not found"})

        //delete user by index
        users.splice(index,1)
        //send res
        res.json({message:"User deleted"})
    })

    // Read all users
        app.get('/users', (req, res) => {
            res.json({
                message: "All Users",
                payload: users
            })
        })

// Create product API with below operations
    // Create new Product({productId,name,brand,price})
    // Read all products
    // Read a Product by brand
    // Update a product
    // Delete a product by id

let products=[]

//Create APIs (REST API- representational State transfer)

    //Route to handle Get req of client (http://localhost:3000/users)
    app.get('/products',(req,res)=>{
        console.log(products)
        //send res
        res.json({message:"All Products",
            payload:products
        })
    })

    app.get('/products/:brand',(req,res)=>{
        //get brand of the product from url parameter
        let brandOfUrl=req.params.brand   
        //find index of product
        let index=products.findIndex(proObj=>proObj.brand===brandOfUrl)
        //if brand not found
        if(index==-1)
            res.json({message:"Product not found"})

        //send res
        res.json({message:"Product Details",
            payload:products[index]
        })
    })
    //Route to handle POST req of Client
    app.post('/products',(req,res)=>{
        //get product from client
        const newProduct=req.body
        //push product into users
        products.push(newProduct)
        //send res
        res.json({message:"Product Created"})
    })

    //Route to handle PUT req of Client
    app.put('/products',(req,res)=>{
    
        // get modified product from client
        let modiProduct=req.body
        // get index of existing product in products array
        let index=products.findIndex(proObj=>proObj.brand===modiProduct.brand)
        //if product not found
        if(index==-1)
            return res.json({message:"Product not found"})
        //update product with index
        products.splice(index,1,modiProduct)
        //send res
        res.json({message:"Product Updated"})
    })

    //Route to handle DELETE req of Client
    app.delete('/products/:id',(req,res)=>{
        //get id of the product from url parameter
        let idOfUrl=Number(req.params.id)   //{ id : value}
        //find index of product
        let index=products.findIndex(proObj=>proObj.productId===idOfUrl)
        //if id not found
        if(index==-1)
            res.json({message:"Product not found"})

        //delete product by index
        products.splice(index,1)
        //send res
        res.json({message:"Product deleted"})
    })