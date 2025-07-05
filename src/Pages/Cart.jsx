import React from 'react';

// Dummy cart data for demonstration
const cartProducts = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/G/31/smartcommerce/blog/smartbiz/img_14.jpg',
    name: 'Sample Product',
    brand: 'BrandX',
    category: 'Electronics & Gadgets',
    mainQuantity: 100,
    boughtQuantity: 18,
    minimumBuyingQuantity: 10,
    price: 49.99,
    buyingDate: '2024-06-01',
    description: 'A high-quality product for your needs.',
  },
  {
    id: 2,
    image: 'https://m.media-amazon.com/images/G/31/smartcommerce/blog/smartbiz/img_14.jpg',
    name: 'Kitchen Mixer',
    brand: 'HomePro',
    category: 'Home & Kitchen Appliances',
    mainQuantity: 50,
    boughtQuantity: 12,
    minimumBuyingQuantity: 5,
    price: 89.99,
    buyingDate: '2024-06-03',
    description: 'Powerful kitchen mixer for all your baking needs.',
  },
];

const Cart = () => {
  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">My Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartProducts.map((product) => (
            <div key={product.id} className="card bg-white shadow-lg rounded-lg overflow-hidden">
              <figure className="bg-base-100">
                <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
              </figure>
              <div className="card-body p-6">
                <h2 className="card-title text-xl font-bold mb-2">{product.name}</h2>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-2">
                  <span className="badge badge-outline">Brand: {product.brand}</span>
                  <span className="badge badge-outline">Category: {product.category}</span>
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  <span className="mr-2">Buying Date: <span className="font-semibold">{product.buyingDate}</span></span>
                  <span className="mr-2">Min. Buying Qty: <span className="font-semibold">{product.minimumBuyingQuantity}</span></span>
                  <span>Main Qty: <span className="font-semibold">{product.mainQuantity}</span></span>
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  <span>Bought Qty: <span className="font-semibold">{product.boughtQuantity}</span></span>
                </div>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-primary">${product.price.toFixed(2)}</span>
                </div>
                <button className="btn btn-error w-full">
                  Remove / Cancel
                </button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  <span className="font-semibold">Note:</span> Removing this product will decrease the main quantity by the bought quantity and remove it from your cart and the database.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart; 