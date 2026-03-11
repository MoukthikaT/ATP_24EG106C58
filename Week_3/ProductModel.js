/*
Create Product REST API with below features
Product document structure
     a.productId (required)
     b.productName(required)
     c.price(required, min price 10000 and max price 50000)
     d.brand(required)
*/

import { Schema,model } from "mongoose";

const productSchema=new Schema({
    productId:{
        type:Number,
        required:[true,"Product ID is required"]
    },
    productName:{
        type:String,
        required:[true,"Product Name is required"]
    },
    price:{
        type:Number,
        required:[true,"Price is required"],
        min:[10000,"Minimum Proce is 10000"],
        max:[50000,"Maximum Price is 50000"]
    },
    brand:{
        type:String,
        required:[true,"Brand is required"]
    },
    
    
},
{
    versionKey:false
})

export const productModel=model("product",productSchema)
