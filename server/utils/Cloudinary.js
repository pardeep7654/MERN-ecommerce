import {v2 as cloudinary} from "cloudinary";
import fs from "fs"

  // Configuration
 cloudinary.config({ 
  cloud_name: 'dlswmuuka', 
  api_key: '669243533261796', 
  api_secret: 'Z3nyFWJg0ARHCrhn6dUhU2nadvU' // Click 'View API Keys' above to copy your API secret
});
 

 

export const ImageUploadUtil=async(file)=>{
    try {
      console.log(file);
      
      console.log("path");

      const result=  await cloudinary.uploader.upload(file);
      if (result) {
        fs.unlinkSync(file)
        return result;
      }
      
      fs.unlinkSync(file)
      
        return result;
      } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        
      }
}

 