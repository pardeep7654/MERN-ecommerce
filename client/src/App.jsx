/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLayout from "./components/admin-view/Layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminOrders from "./pages/admin-view/Orders";
import AdminFeatures from "./pages/admin-view/features";
import AdminProducts from "./pages/admin-view/Products";
import ShoppingLayout from "./components/shopping-view/Layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/Home";
import ShoppingAccount from "./pages/shopping-view/Account";
import ShoppingCheckout from "./pages/shopping-view/Checkout";
import ShoppingListing from "./pages/shopping-view/Listing";
import CheckAuth from "./components/common/check-auth";
import UnAuthPage from "./pages/un-auth/Index";

function App() {
  const isAuthenticated=false;
  const user={
    name:"pardeep",
    role:"admin"
  };
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* Authentication routes */}
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}  > 
          <AuthLayout />
          </CheckAuth>
      }>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user} > 
          <AdminLayout />
          </CheckAuth>
      }>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>

        {/* Shopping routes */}
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}  > 
          <ShoppingLayout />
          </CheckAuth>
      }>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="listing" element={<ShoppingListing />} />
        </Route>

        {/* Global catch-all for undefined routes */}
        <Route path="*" element={<NotFound />} />
        
        <Route path="/unauth-Page" element={<UnAuthPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
