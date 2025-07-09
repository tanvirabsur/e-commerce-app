import React from 'react';
import Products from '../components/Products';
import { useLoaderData } from 'react-router';
import Product from '../components/Product';

const Home = () => {
    const products = useLoaderData();
   const uniqueByCategory = [];
const seenCategories = new Set();

for (let item of products) {
  if (!seenCategories.has(item.category)) {
    uniqueByCategory.push(item);
    seenCategories.add(item.category);
  }
  if (uniqueByCategory.length === 7) break;
}

    return (
       <>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2  mx-auto'>
       {
        uniqueByCategory.map(product => <Product key={product._id} product={product}></Product>)
       }
       </div> 
       </>
    );
};

export default Home;