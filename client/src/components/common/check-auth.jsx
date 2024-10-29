/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const CheckAuth = ({ isAuthenticated, user, children }) => {
    const location = useLocation();
    const isLoginOrRegister = location.pathname.includes("/login") || location.pathname.includes("/register");
    // console.log(isAuthenticated,user)

    // If user is not authenticated, redirect to login (unless already on login or register page)
    if (!isAuthenticated && !isLoginOrRegister) {
        return <Navigate to="/auth/login" />;
    }

    // If user is authenticated and tries to access login/register, redirect based on role
    if (isAuthenticated && isLoginOrRegister) {
        return user?.role === "admin" 
            ? <Navigate to="/admin/dashboard" /> 
            : <Navigate to="/shop/home" />;
    }

    // Check role-specific access
    if (isAuthenticated) {
        if (user?.role !== "admin" && location.pathname.includes("/admin")) {
            return <Navigate to="/unauth-Page" />;
        }
        if (user?.role === "admin" && location.pathname.includes("/shop")) {
            return <Navigate to="/unauth-Page" />;
        }
    }
   
    

    // Main redirection on the homepage
    if (location.pathname === "/") {
        return !isAuthenticated 
            ? <Navigate to="/auth/login" />
            : user?.role === "admin"
                ? <Navigate to="/admin/dashboard" />
                : <Navigate to="/shop/home" />;
    }

    return <>{children}</>;
};

export default CheckAuth;
