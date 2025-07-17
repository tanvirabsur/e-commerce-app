import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from '../Pages/ProductCard';
import Product from './Product';

const Products = () => {
    const products = useLoaderData()
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4'>
             <title>All products</title>
           {
            products.map(product => <Product key={product._id} product={product}></Product>)
           }
        </div>
    );
};

export default Products;