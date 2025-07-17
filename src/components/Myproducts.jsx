import React, { use } from 'react';
import { AuthContext } from '../authprovider/Authprovider';
import { useLoaderData } from 'react-router';
import Product from './Product';
import MyProduct from './MyProduct';


const Myproducts = () => {
    const {user} = use(AuthContext)

    const products = useLoaderData()
    const myproducts = products.filter(product => product.author  === user?.email)
    
    if (!myproducts.length) {
        return <div className="h-screen flex flex-col items-center justify-center bg-gray-100 font-bold text-3xl">
                         <title>My products</title>
            No products found for {user?.displayName}</div>;
    } else {
         return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4  mx-auto'>
             <title>My products</title>
           {
            myproducts.map(product => <MyProduct key={product._id} product={product}></MyProduct>)
           }
        </div>
    );
    }
   
};

export default Myproducts;