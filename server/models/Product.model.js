import mongoose from "mongoose";

const {Schema,model}=mongoose;

const ProductSchema=new Schema({
    image:String,
    title:String,
    description:String,
    category:String,
    brand:String,
    price:Number,
    salePrice:Number,
    totalStock:Number,
    averageReview:Number,
},{
    timestamps:true
})

export const Product=model("Product",ProductSchema);