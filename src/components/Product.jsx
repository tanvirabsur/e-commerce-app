import React from 'react';
import { NavLink } from 'react-router';

const Product = ({product}) => {
    const {image, 
productName, brand, category, maxQuantity, price,description,_id,minQuantity} = product
    // console.log(minQuantity, product );
    return (
        <div className="card bg-white shadow-lg rounded-lg overflow-hidden ">
      <figure className="bg-base-100">
        <img src={image} alt={productName} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-xl font-bold mb-2">{productName}</h2>
        <div className="flex flex-wrap gap-2  text-gray-600 mb-2">
          <span className="">Brand: {brand}</span>
          <span className="">Category: {category}</span>
        </div>
        <div className="text-sm text-gray-500 mb-2">
          <span className="mr-2">Main Qty: <span className="font-semibold">{minQuantity}</span></span>
          <span>Min. Buying Qty: <span className="font-semibold">{maxQuantity}</span></span>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-semibold text-blue-500">${price}</span>
          <span className="ml-4 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={`text-xl ${star <= product.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                  ))}
                  <span className="ml-2 text-gray-500">({product.rating}/5)</span>
                </span>
        </div>
        
       <div className=''>
        <div className=''>
           <NavLink to={`/product/${_id}`}>
        <button className="btn bg-blue-500 text-white w-full">
        Buy
        </button>
        </NavLink>
        </div>
        {/* <div className='w-[40%]'>  
          <NavLink to={`/update/${_id}`}>
        <button className="btn btn-primary w-full">
        Edit
        </button>
        </NavLink>
        </div> */}
       </div>
       
        
      </div>
    </div>
    );
};

export default Product;