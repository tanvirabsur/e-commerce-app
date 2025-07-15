import React from 'react';
import { NavLink } from 'react-router';

const Product = ({product}) => {
    const {image, name, brand, category, maxQuantity, price,description,_id,minQuantity} = product
    // console.log(minQuantity, product );
    return (
        <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
      <figure className="bg-base-100">
        <img src={image} alt={name} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-xl font-bold mb-2">{name}</h2>
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
          <span className="text-lg font-semibold text-primary">${price}</span>
        </div>
        <NavLink to={`/product/${_id}`}>
        <button className="btn btn-primary w-full">
        Buy
        </button>
        </NavLink>
       
        
      </div>
    </div>
    );
};

export default Product;