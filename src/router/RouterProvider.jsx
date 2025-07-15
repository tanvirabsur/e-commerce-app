import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AddProduct from "../Pages/AddProduct";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";
import Regester from '../Pages/Regester'
import PrivateRoute from "../authprovider/PrivateRoute";
import Products from "../components/Products";
import RootLayOut from "../Pages/RootLayOut";
import Loading from "../components/Loading";
import CetagoryProducts from "../components/CetagoryProducts";


const router = createBrowserRouter([

    
    {
        path: "/",
        Component: RootLayOut,
        children:[
            {
                index: true,
                loader: ()=> fetch(`https://assignment-11-server-six-sage.vercel.app/products`),
                Component: Home,
               
            },
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
                loader: ()=> fetch('https://assignment-11-server-six-sage.vercel.app/myorder' ),
                Component: Cart
            },
            {
                path: '/products',
                loader: () => fetch('https://assignment-11-server-six-sage.vercel.app/products'),
                Component: Products
            },
            {
                path: '/product/:id',
                loader: ({params}) => fetch(`https://assignment-11-server-six-sage.vercel.app/product/${params.id}`),
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
            },
            {
                path: '/productcetagory',
                Component: CetagoryProducts
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