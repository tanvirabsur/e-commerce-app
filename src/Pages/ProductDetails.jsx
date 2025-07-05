import React, { useState } from 'react';

// Dummy user and product data for demonstration
const user = {
  displayName: 'John Doe',
  email: 'john.doe@example.com',
};

const product = {
  image: 'https://m.media-amazon.com/images/G/31/smartcommerce/blog/smartbiz/img_14.jpg',
  name: 'Sample Product',
  brand: 'BrandX',
  category: 'Electronics & Gadgets',
  mainQuantity: 100,
  minimumSellingQuantity: 10,
  price: 49.99,
  rating: 4,
  shortDescription: 'A high-quality product for your needs.',
  content: 'This product is made from premium materials and is perfect for wholesale buyers. Enjoy bulk discounts and fast shipping.',
};

const ProductDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [quantity] = useState(product.minimumSellingQuantity);

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-80 h-56 object-cover rounded-lg border"
            />
            <div className="flex-1 space-y-3">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                <span className="badge badge-outline">Brand: {product.brand}</span>
                <span className="badge badge-outline">Category: {product.category}</span>
                <span className="badge badge-outline">Available: {product.mainQuantity}</span>
                <span className="badge badge-outline">Min. Order: {product.minimumSellingQuantity}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-2xl font-semibold text-primary">${product.price.toFixed(2)}</span>
                <span className="ml-4 flex items-center">
                  {[1,2,3,4,5].map((star) => (
                    <span key={star} className={`text-xl ${star <= product.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                  ))}
                  <span className="ml-2 text-gray-500">({product.rating}/5)</span>
                </span>
              </div>
              <p className="text-gray-700 mt-4">{product.shortDescription}</p>
              <div className="prose max-w-none mt-2">
                <p>{product.content}</p>
              </div>
              <button
                className="btn btn-primary mt-6 w-full md:w-auto"
                onClick={() => setShowModal(true)}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setShowModal(false)}
            >✕</button>
            <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={user.displayName}
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  value={user.email}
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Quantity</span>
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="btn btn-outline btn-circle text-lg"
                    // onClick={() => setQuantity(q => Math.max(product.minimumSellingQuantity, q - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="input input-bordered w-20 text-center"
                    value={quantity}
                    min={product.minimumSellingQuantity}
                    readOnly
                  />
                  <button
                    type="button"
                    className="btn btn-outline btn-circle text-lg"
                    // onClick={() => setQuantity(q => q + 1)}
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-gray-500 mt-1">Minimum order: {product.minimumSellingQuantity}</span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Shipping Address</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your shipping address"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Phone Number</span>
                </label>
                <input
                  type="tel"
                  className="input input-bordered w-full"
                  placeholder="Enter your phone number"
                />
              </div>
              <button type="button" className="btn btn-primary w-full mt-4">
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails; 