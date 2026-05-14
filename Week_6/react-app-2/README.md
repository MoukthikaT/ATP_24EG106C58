1. Generate package .json
        npm init -y
2. create express server

3. Install mongoose and connect to MongoDB
        REST API- MongoDB native driver--> DB Server
        REST API- Mongoose ODM tool--> DB Server 
        object document mapping- odm

4. Build USER REST API 
        - Create User
        - Read All Users
        - Read a User by ID
        - Update a User by ID
        - Delete a User by ID

5. Create Schema and Model of the Resource(User)

6. Create USER API and define the Routes


----> TCP/IP and HTTP relationship???

---> the find() methid returns a cursor, which has all the objects

//string----this is js datatype
//String----mongoose schema type

__v--->> version key


- Handling unavailable resources
- Validators during Update
- Hashing Password (bcryptjs)
- Unique fields
- Refined version of error handling middleware

// Status codes
// 200 -- success
// 201 -- created

// 400 series is for client side mistakes
// 400 -- bad request 
// 401 -- Unauthorised
// 404 -- Not found

// 500 -- server error


// 403 -- forbidden


### User Authentication (Login)
 - Submit credentials and get token

 ROUTES
  - Public routes(can be accessed by anyone)
  - Protected routes(can be accessed only by authenticated users only)

## req----> Public Routes

req--->middleware(forTokenVerification)---> Protected Routes


ATTACKS:
        ### XSS
        ### CSRF

### refresh token, access tokens




Make the following routes protected
        - Read Users & Products
        - Read User & Product by id
        - Update User & Product 
        - Delete User & Product


### Cross Origin Vs Same origin requests
- Cross origin request means when the client and server applications are running in different domains,
- Same origin request means the client also running on the same domain of the server
- Cookies will be sent along with request automatically in same origin request,
  But for cross origin request, the token should be explicitly included to the request.



Nested Documents
Reference Documents


### userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    // get product id from url
    let productId=req.params.pid;
    // get current user details
    const emailOfUser=req.user?.email
    // Before adding the product to the cart, it sholud check if the product is already existing in the cart.
    // If the product is there, Then the count should be incremented by 1
    // Otherwise, add the product to the cart
    
    // add product to the cart
    let result=await userModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
    // if user invalid
    if(!result){
        return res.status(404).json({message:"User Not Found"})
    }
    res.status(200).json({message:"Product Added to cart"})
})
