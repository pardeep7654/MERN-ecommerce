import { ImageUploadUtil } from "../../utils/Cloudinary.js";
import { Product } from "../../models/Product.model.js";

//imageuploaderHandler
export const handleImageUpload = async (req, res) => {
    try {
        const img=req.file
        
        console.log(img);
        
      if (!req.file) {
        return res.status(400).json({ success: false, message: 'No file uploaded' });
      }
  
//       
      const result = await ImageUploadUtil(img.path);
  
      // Return success response
      res.json({
        success: true,
        // result,
        result
      });
    } catch (error) {
      console.error('Error during file upload:', error);
      res.status(500).json({
        success: false,
        message: `Error occurred: ${error.message}`,
      });
    }
  };

//add new product
export const addProduct = async (req, res) => {
    try {
      const {
        image,
        title,
        description,
        category,
        brand,
        price,
        salePrice,
        totalStock,
        averageReview,
      } = req.body;
      // console.log(req.body);
      
     
      if (
        !image ||
        !title ||
        !description ||
        !category ||
        !brand ||
        !price ||
        !totalStock ||
        averageReview===undefined  
      ) {
        return res.status(400).json({ success: false, message: "All fields are required" });
      }
  
      const newProduct = new Product({
        image,
        title,
        description,
        category,
        brand,
        price,
        salePrice, // Optional field
        totalStock,
        averageReview,
      });
  
      await newProduct.save();
      res.status(201).json({
        success: true,
        data: newProduct,
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Error occurred",
      });
    }
  };
  

export const fetchAllProducts=async(req,res)=>{
    try {
        const listOfProducts=await Product.find();
        res.status(200).json({
            success:true,
            data:listOfProducts
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Error occured"
        })
    }
}

//edit a product
export const editProduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const {
            image,title,
            description,category,
            brand,price,
            salePrice,totalStock,
            averageReview
        }=req.body;

        let findProduct=await Product.findById(id);
        if (!findProduct) {
            res.status(404).json({
                success:false,
                message:"Product not found"
            })
        }
        findProduct.title=title||findProduct.title;
        findProduct.description=description||findProduct.description;
        findProduct.category=category||findProduct.category;
        findProduct.brand=brand||findProduct.brand;
        findProduct.price = price === "" ? 0 : price || findProduct.price;
        findProduct.salePrice =
          salePrice === "" ? 0 : salePrice || findProduct.salePrice;
        findProduct.totalStock = totalStock || findProduct.totalStock;
        findProduct.image = image || findProduct.image;
        findProduct.averageReview = averageReview || findProduct.averageReview;
        await findProduct.save();
        res.status(200).json({
            success:true,
            data:findProduct
        })
    }catch(e){
        res.status(400).json({
            success:false,
            message:"some error occured"
        })
    }
}

export const deleteProduct=async(req,res)=>{
   try {
    const{id}=req.params;
    const product=await Product.findByIdAndDelete(id);
    if (!product) {
        res.status(404).json({
            success:false,
            message:"Product Not found"
        })
    }
    res.status(200).json({
        success:true,
        message:"Product deleted Successfuly"
    })
   } catch (error) {
    res.status(500).json({
        success:false,
        message:"Internal error occured"
    })
   }
}