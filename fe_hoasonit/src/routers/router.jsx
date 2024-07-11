import React from 'react'
import Layout from '../components/layout/layout'
import Home from '../pages/home'
import Product from '../pages/product'
import Management from '../pages/management'
import Register from '../pages/register'
import Login from '../pages/login'
import { Navigate, useRoutes } from 'react-router-dom'

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Navigate to="/home" />,
        },
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "home", element: <Home /> },
                { path: "product", element: <Product /> },
                { path: "management", element: <Management /> },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
    ])
}