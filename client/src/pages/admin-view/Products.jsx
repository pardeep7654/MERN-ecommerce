import { Fragment, useState, useEffect } from "react";
import ProductImageUpload from "../../components/admin-view/image-upload";
import AdminProductTile from "../../components/admin-view/product-tile";
import CommonForm from "../../components/common/form";
import { Button } from "../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../../components/ui/sheet";
import {
  addNewProduct,
  fetchAllProducts,
  editProduct,
  deleteProduct,
} from "../../store/admin/products-slice";
import { useToast } from "../../hooks/use-toast";
import { productFormElements } from "../../config";
import { useDispatch, useSelector } from "react-redux";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  averageReview: 0,
};

const AdminProducts = () => {
  const [openCreateProductDialog, setOpenCreateProductDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [currentEditId, setCurrentEditId] = useState(null);

  const { productList } = useSelector((state) => state.AdminProducts);
  console.log(productList);
  
  const dispatch = useDispatch();
  const { toast } = useToast();
  function onSubmit(e) {
    e.preventDefault();
    // console.log(formData);
    // console.log(uploadedImageUrl);
    
    currentEditId !== null
      ? dispatch(editProduct({ id: currentEditId, formData })).then((data) => {
          console.log(data, "data");

          if (data?.payload?.success) {
            dispatch(fetchAllProducts());
            setFormData(initialFormData);
            setCurrentEditId(null);
            setOpenCreateProductDialog(false);
          }
        })
      : dispatch(addNewProduct({ ...formData, image: uploadedImageUrl })).then(
          (data) => {
            if (data?.payload?.success) {
              dispatch(fetchAllProducts());
              setFormData(initialFormData);
              setOpenCreateProductDialog(false);
              setImageFile(null);
              toast({
                title: "Product Added Successfully",
              });
            }
          }
        );
  }

  function handleDelete(getcurrentProductId) {
    dispatch(deleteProduct(getcurrentProductId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
      }
    });
  }
  function isValid() {
    return Object.keys(formData)
      .filter((currkey) => currkey !== "averageReview")
      .map((key) => formData[key] !== "")
      .every((item) => item);
  }
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  // console.log(formData, "productList");
  return (
    <Fragment>
      <div className="mb-5 flex justify-end">
        <Button onClick={() => setOpenCreateProductDialog(true)}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
          >
          Add new Product
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        {productList && productList.length > 0
          ? productList.map((product) => (
              <AdminProductTile
                key={product._id}
                setFormData={setFormData}
                setOpenCreateDialog={setOpenCreateProductDialog}
                setCurrentEditId={setCurrentEditId}
                product={product}
                handleDelete={handleDelete}
              />
            ))
          : <p className="text-center text-gray-500 col-span-full">No products available</p>}
      </div>
      <Sheet
        open={openCreateProductDialog}
        onOpenChange={() => {
          setOpenCreateProductDialog(false);
          setCurrentEditId(null);
          setFormData(initialFormData);
        }}
      >
        <SheetContent side="right" className="bg-white p-8 rounded-lg shadow-lg max-w-md transform transition-transform ease-in-out duration-500" aria-describedby="dialog-description">
          <SheetHeader>
            <SheetTitle>
              {currentEditId !== null ? "Edit Product" : "Add New Product"}
            </SheetTitle>
            <p id="dialog-description">
              {currentEditId !== null
                ? "Update the details of the existing product."
                : "Enter details to add a new product to the catalog."}
            </p>
          </SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoadingState={setImageLoadingState}
            imageLoadingState={imageLoadingState}
            isEditMode={currentEditId !== null}
          />
          <div className="py-6">
            <CommonForm
              setFormData={setFormData}
              formControls={productFormElements}
              formData={formData}
              onSubmit={onSubmit}
              buttonText={currentEditId !== null ? "Edit" : "Add"}
              isBtnDisabled={!isValid()}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};

export default AdminProducts;
