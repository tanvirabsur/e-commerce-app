import React from 'react';
import { useLocation } from 'react-router';
import Product from './Product';

const CetagoryProducts = () => {
    const location = useLocation();
    const {products} = location.state
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4  mx-auto'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default CetagoryProducts;