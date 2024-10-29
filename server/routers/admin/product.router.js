import { Router } from "express";
import { upload } from "../../utils/multer.js"
import { handleImageUpload,addProduct,fetchAllProducts,deleteProduct,editProduct } 
from "../../controllers/admin/product.controller.js";
const router=Router();

router.post("/upload-image",upload.single("my_file"),handleImageUpload);
router.post("/add",addProduct);
router.put("/edit/:id",editProduct);
router.delete("/delete/:id",deleteProduct);
router.get("/get",fetchAllProducts);

export default router