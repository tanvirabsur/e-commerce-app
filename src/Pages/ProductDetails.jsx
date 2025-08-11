import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../authprovider/Authprovider';
import axios from 'axios';
import Swal from 'sweetalert2';



const ProductDetails = () => {
  const product = useLoaderData()

  const { user } = use(AuthContext)
  const minQty = Number(product.minQuantity) || 1;
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(minQty);

  const handleIncrease = () => setQuantity(q => q + 1);
  const handleDecrease = () => setQuantity(q => Math.max(minQty, q - 1));

  const handleOrdeer = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    const now = new Date();
    const bdTime = new Date(now.getTime() + (6 * 60 * 60 * 1000));

    const orderISOTime = bdTime.toISOString();

    // Readable format (for UI or history view)
    const formattedOrderTime = bdTime.toLocaleString('en-BD', {
      timeZone: 'Asia/Dhaka',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    const orderDetails = {
      customerName: user.displayName,
      customerEmail: user.email,
      quantity: Number(formObject.quantity),
      shippingAddress: formObject.shippingAddress,
      shippingAddress2: formObject.shippingAddress2,
      phoneNumber: formObject.phoneNumber,
      productId: product._id,
      productName: product.productName,
      productImage: product.image,
      productPrice: product.price,
      totalPrice: product.price * Number(formObject.quantity),
      orderStatus: 'pending',
      orderDate: new Date().toISOString(),
      productBrand: product.brand,
      productCategory: product.category,
      productDescription: product.shortDescription,
      rating: product.rating,
      orderdate: orderISOTime,                 // ✅ ISO format (BD time)
      orderTimeText: formattedOrderTime,
    }

    if (product.minQuantity > formObject.quantity) {
      Swal.fire({
        icon: 'error',
        title: 'Insufficient stock',
        text: `Only ${product.mainQuantity} items available.`,
      });
      return;
    } else if (formObject.quantity > product.maxQuantity) {
      Swal.fire({
        icon: 'error',
        title: 'Minimum order quantity not met',
        text: `You can maximum order ${product.maxQuantity} items.`,
      });
      return;
    } else {
      // https://assignment-11-server-six-sage.vercel.app
      axios.post(`https://assignment-11-server-six-sage.vercel.app/addorder`, orderDetails,
        {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`
          }
        }
      ).then(res => {
        
        if (res.data.acknowledged) {
          Swal.fire({
            title: 'Success!',
            text: 'order recived successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          form.reset();
        } else {
          Swal.fire({
            title: 'Error!',
            text: res.data.message || 'Failed to failed to recive order.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      })
    }


  }

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="container mx-auto px-4 mt-9">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={product.image}
              alt={product.productName}
              className="w-full md:w-80 h-56 object-cover rounded-lg border"
            />
            <div className="flex-1 space-y-3">
              <h1 className="text-3xl font-bold mb-2">{product.productName}</h1>
              <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                <span className="badge badge-outline">Brand: {product.brand}</span>
                <span className="badge badge-outline">Category: {product.category}</span>
                <span className="badge badge-outline">Available: {product.maxQuantity}</span>
                <span className="badge badge-outline">Min. Order: {product.minQuantity}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-2xl font-semibold text-blue-500">${product.price}</span>
                <span className="ml-4 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={`text-xl ${star <= product.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                  ))}
                  <span className="ml-2 text-gray-500">({product.rating}/5)</span>
                </span>
              </div>
              <p className="text-gray-700 mt-4">{product.description}</p>
              <div className="prose max-w-none mt-2">
                <p>{product.content}</p>
              </div>
              <button
                className="btn bg-blue-500 text-white mt-6 w-full md:w-auto"
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
        <div className="fixed inset-0 z-50 flex h-full items-center justify-center bg-opacity-40 backdrop-blur-sm ">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md h-[99%] p-3 relative">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setShowModal(false)}
            >✕</button>
            <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>
            <form onSubmit={handleOrdeer} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={user.displayName}
                  name='customerName'
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
                  name='customerEmail'
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
                    onClick={handleDecrease}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="input input-bordered w-20 text-center"
                    value={quantity}
                    name='quantity'
                    min={product.minQuantity}
                    readOnly

                  />
                  <button
                    type="button"
                    className="btn btn-outline btn-circle text-lg"
                    onClick={handleIncrease}
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-gray-500 mt-1">Minimum order: {product.minQuantity}</span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Shipping Address</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your shipping address"
                  name='shippingAddress'
                />
                {/* <label className="label mt-1">
                  <span className="label-text font-semibold">Shipping Address</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your shipping address"
                  name='shippingAddress2'
                /> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Phone Number</span>
                </label>
                <input
                  type="tel"
                  className="input input-bordered w-full"
                  placeholder="Enter your phone number"
                  name='phoneNumber'
                />
              </div>
              <button type='submit' className="btn btn-primary w-full mt-1">
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