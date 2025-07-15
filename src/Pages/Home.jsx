import React from 'react';
import Products from '../components/Products';
import { useLoaderData } from 'react-router';
import Product from '../components/Product';
import Slider from '../components/Slider';
import Accordtion from '../components/Accordtion';
import CountDown from '../components/CountDown';
import Cetagory from '../components/Cetagory'
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
       <Slider></Slider>

        <h1 className='text-3xl text-center font-bold my-4'>Featured Products</h1>

        <p className='text-center text-gray-500 mb-4'>Explore our exclusive collection of products</p>

        <div className='flex flex-col lg:flex-row items-center gap-3 ml-[3%] py-5'>
          <p className='text-3xl text-center font-bold my-4'>Flash sell on going : </p>
          <CountDown></CountDown>
        </div>
        <Cetagory products={products} uniqueByCategory={uniqueByCategory}></Cetagory>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4  mx-auto'>
       {
        uniqueByCategory.map(product => <Product key={product._id} product={product}></Product>)
       }
       </div> 
       <Accordtion></Accordtion>
       </>
    );
};

export default Home;