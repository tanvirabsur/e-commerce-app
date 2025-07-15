import React, { use } from 'react';
import { AuthContext } from '../authprovider/Authprovider';
import { useLoaderData } from 'react-router';
import Product from './Product';


const Myproducts = () => {
    const {user} = use(AuthContext)

    const products = useLoaderData()
    const myproducts = products.filter(product => product.author  === user?.email)
    
    if (!myproducts.length) {
        return <div className="text-center mt-10">No products found for {user?.displayName}</div>;
    } else {
         return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4  mx-auto'>
           {
            myproducts.map(product => <Product key={product._id} product={product}></Product>)
           }
        </div>
    );
    }
   
};

export default Myproducts;