import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { log } from "console";

const initialState = {
  isLoading: false,
  productList: [],
};

export const addNewProduct = createAsyncThunk(
  "/products/add",
  async (formData) => {
    // console.log(formData)
    const result = await axios.post(
      `${import.meta.env.VITE_API_URL}/admin/products/add`,
       formData ,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return result?.data;
  }
);

export const fetchAllProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_API_URL}/admin/products/get`
    );
    return result.data;
  }
);

export const editProduct = createAsyncThunk(
  "/products/editProduct",
  async ({ id, formData }) => {
    const result = await axios.put(
      `${import.meta.env.VITE_API_URL}/admin/products/edit/${id}`,
      { formData },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return result?.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "/products/deleteProduct",

  async (id) => {
    const result = await axios.delete(
      `${import.meta.env.VITE_API_URL}/admin/products/delete/${id}`
    );
    return result?.data;
  }
);


const AdminProductsSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending,(state)=>{
        state.isLoading=true
    })
    .addCase(fetchAllProducts.fulfilled,((state,action)=>{
        state.isLoading=false;
        state.productList=action.payload.data;
    }))
    .addCase(fetchAllProducts.rejected,(state)=>{
        state.isLoading=false;
        state.productList=[];
    });
  },
});

export default AdminProductsSlice.reducer;
