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
import Myproducts from "../components/Myproducts";
import Error from "../components/Error";
import UpdateProduct from "../Pages/UpdateProduct";
import Delete from "../components/Delete";
import Profile from "../Pages/Profile";
import DashboardLayout from "../Pages/DashboardLayout";


const router = createBrowserRouter([

    
    {
        path: "/",
        Component: RootLayOut,
        hydrateFallbackElement: <Loading></Loading>,
        children:[
            {
                index: true,
                loader: ()=> fetch(`https://assignment-11-server-six-sage.vercel.app/products`),
                Component: Home,
                hydrateFallbackElement: <Loading></Loading>
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
                Component: Cart,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/products',
                loader: () => fetch('https://assignment-11-server-six-sage.vercel.app/products'),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
            {
                path: '/product/:id',
                loader: ({params}) => fetch(`https://assignment-11-server-six-sage.vercel.app/product/${params.id}`),
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                hydrateFallbackElement: <Loading></Loading>
                
            },
            {
                path: '/productcetagory',
                Component: CetagoryProducts,
                hydrateFallbackElement: <Loading></Loading>
            },  
            {
                path: '/regester',
                Component: Regester,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/myproducts',
                loader: () => fetch('https://assignment-11-server-six-sage.vercel.app/products'),
                element: <PrivateRoute><Myproducts></Myproducts></PrivateRoute>
            },
            {
                path: 'user/profile',
                element: <Profile></Profile>
            },
            {
                path: '*',
                Component: Error
            },
            {
                path: '/update/:id',
                Component: UpdateProduct
            },
            {
                path: '/delete',
                Component: Delete
            }
                    
        ]
        
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>
    }
])

export {
    router
}