import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from "./Header"
import AdminSideBar from "./SideBar"

const AdminLayout = () => {
  return (
    <div className='flex min-h-screen w-full'>
        {/* Admin side bar */}
        <AdminSideBar/>
        <div className="flex flex-1 flex-col">
            {/* Admin header */}
            <AdminHeader/>
            <main className='flex flex-1 bg-muted/40 p-4 md:p-6'>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default AdminLayout