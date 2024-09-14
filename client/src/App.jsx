import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/Layout"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Header from "./components/admin-view/Header"
import AdminLayout from "./components/admin-view/Layout"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminOrders from "./pages/admin-view/Orders"
import AdminFeatures from "./pages/admin-view/features"
import AdminProducts from "./pages/admin-view/Products"

 

function App() {
   

  return (
     <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header element</h1>

      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
        <Route path="login" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
      <Route path="dashboard" element={<AdminDashboard/>}/>
      <Route path="orders" element={<AdminOrders/>}/>
      <Route path="features" element={<AdminFeatures/>}/>
      <Route path="products" element={<AdminProducts/>}/>
      <Route/>
      <Route/>

        </Route>
      </Routes>
     </div>
  )
}

export default App
