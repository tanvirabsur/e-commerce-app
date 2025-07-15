
import React from 'react';


const Orders = ({product,handleDelete}) => {

    const {productName, totalPrice, productDescription,quantity,productImage, _id,productBrand,productCategory,orderTimeText} = product;
   
    return (
         <div  className="card bg-white shadow-lg rounded-lg overflow-hidden">
              <figure className="bg-base-100">
                <img src={productImage} alt={productName} className="h-48 w-full object-cover" />
              </figure>
              <div className="card-body p-6">
                <h2 className="card-title text-xl font-bold mb-2">{productName}</h2>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-2">
                  <span className="badge badge-outline">Brand: {productBrand}</span>
                  <span className="badge badge-outline">Category: {productCategory}</span>
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  <span className="mr-2">Buying Date: <span className="font-semibold">{orderTimeText}</span></span>
                  
                  
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  <span>Bought Qty: <span className="font-semibold">{quantity}</span></span>
                </div>
                <p className="text-gray-700 mb-4">{productDescription}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-primary">${totalPrice}</span>
                </div>
                <button onClick={()=> handleDelete(_id)} className="btn btn-error w-full">
                  Remove / Cancel
                </button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  <span className="font-semibold">Note:</span> Removing this product will decrease the main quantity by the bought quantity and remove it from your cart and the database.
                </p>
              </div>
            </div>
    );
};

export default Orders;