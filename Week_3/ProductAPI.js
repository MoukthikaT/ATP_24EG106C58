/*
REST API with below operations
     a. Create product
     b. Read all products
     c. Read a product by productId
     d. Update a product by productId
     e. Delete a product by productId
*/


// Create a mini express application(Seperate Route)
import exp from 'express'
export const productApp=exp.Router()

import {productModel} from '../models/ProductModel.js'

// Define PRODUCT REST API Routes

    // Create new Product
    productApp.post("/products",async(req,res)=>{
          const newProduct=req.body
          // Create New User Document
          const newProductDocument=new productModel(newProduct)
          // Save
          const results=await newProductDocument.save()
          console.log(results)
          res.status(201).json({message:"Product Created"}) 
    })

    // Read All Products
    productApp.get("/products",async(req,res)=>{
          let productsList=await productModel.find()
          // send Response
          res.status(200).json({message:"Products",payload:productsList})
    })

    // Read a product by productId
    productApp.get("/products/:id",async(req,res)=>{
          const pid=req.params.id
          const productObj=await productModel.findOne({productId:pid})
          if(!productObj){
            return res.status(404).json({message:"Product Not Found"})
          }
        // send response
        res.status(200).json({message:"product",payload:productObj})
    })

    // Update a product by productId
    productApp.put("/products/:id",async(req,res)=>{
          const modifiedProduct=req.body
          const pid=req.params.id
          const updatedProduct=await productModel.findOneAndUpdate({productId:pid},
               {$set:{...modifiedProduct}},
               {new:true,runValidators:true}
          )
     res.status(200).json({message:"Product Updated", payload: updatedProduct})
    })

     // Delete a product by productId
     productApp.delete("product/:id",async(req,res)=>{
          const pid=req.params.id
          let deletedProduct=await productModel.findByIdAndDelete(pid)

          if(!deletedProduct){
            res.status(404).json({message:"Product Not Found"})
        }
        // send response
        res.status(200).json({message:"Product Deleted", payload: deletedProduct})
     })

