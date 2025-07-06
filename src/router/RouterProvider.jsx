import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AddProduct from "../Pages/AddProduct";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";
import Regester from '../Pages/Regester'

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
        children:[
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/addproduct',
                Component: AddProduct
            },
            {
                path: '/productdetails',
                Component: ProductDetails
            },
            {
                path: '/cart',
                Component: Cart
            },  
            {
                path: '/regester',
                Component: Regester
            }  
                    
        ]
    }
])

export {
    router
}