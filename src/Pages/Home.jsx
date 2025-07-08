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
  if (uniqueByCategory.length === 8) break;
}

console.log(uniqueByCategory);
    return (
       <>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8'>
       {
        uniqueByCategory.map(product => <Product key={product._id} product={product}></Product>)
       }
       </div> 
       </>
    );
};

export default Home;