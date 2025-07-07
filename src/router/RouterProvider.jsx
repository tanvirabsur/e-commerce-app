import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AddProduct from "../Pages/AddProduct";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";
import Regester from '../Pages/Regester'
import PrivateRoute from "../authprovider/PrivateRoute";
import Products from "../components/Products";

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
                element: <PrivateRoute><AddProduct /></PrivateRoute>
            },
            {
                path: '/productdetails',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
            },
            {
                path: '/cart',
                Component: Cart
            },
            {
                path: '/products',
                loader: () => fetch('http://localhost:8080/products'),
                Component: Products
            },
            {
                path: '/product/:id',
                loader: ({params}) => fetch(`http://localhost:8080/product/${params.id}`),
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
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