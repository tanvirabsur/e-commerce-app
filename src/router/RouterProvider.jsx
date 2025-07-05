import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AddProduct from "../Pages/AddProduct";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";


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
            }  
                    
        ]
    }
])

export {
    router
}