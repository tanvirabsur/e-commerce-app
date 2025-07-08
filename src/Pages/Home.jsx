import React from 'react';
import Products from '../components/Products';
import { useLoaderData } from 'react-router';
import Product from '../components/Product';

const Home = () => {
    const products = useLoaderData();
    console.log(products);
    return (
       <>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
       {
        products.map(product => <Product key={product._id} product={product}></Product>)
       }
       </div>
       </>
    );
};

export default Home;