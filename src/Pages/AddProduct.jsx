import axios from 'axios';
import React, { useState } from 'react';
import { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../authprovider/Authprovider';


const AddProduct = () => {

    const [rating, setRating] = useState(5);
    const { user } = use(AuthContext)
   
    const categories = [
        "Electronics & Gadgets",
        "Home & Kitchen Appliances",
        "Fashion & Apparel",
        "Industrial Machinery & Tools",
        "Health & Beauty",
        "Automotive Parts & Accessories",
        "Office Supplies & Stationery"
    ];



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData.entries());

        const product = {
            image: formObject.image,
            name: formObject.name,
            mainQuantity: Number(formObject.mainQuantity),
            minimumSellingQuantity: Number(formObject.minimumSellingQuantity),
            brand: formObject.brandName,
            category: formObject.category,
            shortDescription: formObject.shortDescription,
            price: Number(formObject.price),
            authorName: user?.displayName,
            author: user?.email,
        }

        // Add rating to form object
        formObject.rating = rating;


        axios.post(`https://assignment-11-server-six-sage.vercel.app/addproduct`, product,
            {
                headers: {
                    Authorization: `Bearer ${user?.accessToken}`
                }
            }
        )
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    form.reset();
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: res.data.message || 'Failed to add product.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            })
        console.log('Product Details-client:', formObject);
        setRating(5);

    };


    return (
        <div className="min-h-screen bg-base-200 py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-8">Add New Product</h1>

                    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-6">
                        {/* Image Upload */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Product Cover Image</span>
                            </label>
                            <input
                                type="text"
                                className="file-input file-input-bordered w-full"
                                name="image"

                                required
                            />

                        </div>

                        {/* Product Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Product Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                name="name"
                                placeholder="Enter product name"
                                required
                            />
                        </div>

                        {/* Quantities */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Main Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    className="input input-bordered w-full"
                                    name="mainQuantity"
                                    placeholder="Total available quantity"
                                    min="1"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Minimum Selling Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    className="input input-bordered w-full"
                                    name="minimumSellingQuantity"
                                    placeholder="Minimum order quantity"
                                    min="1"
                                    required
                                />
                            </div>
                        </div>

                        {/* Brand and Category */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Brand Name</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full"
                                    name="brandName"
                                    placeholder="Enter brand name"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Category</span>
                                </label>
                                <select
                                    className="select select-bordered w-full"
                                    name="category"
                                    required
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Short Description */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Short Description</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered w-full h-24"
                                name="shortDescription"
                                placeholder="Brief description of the product"
                                required
                            ></textarea>
                        </div>

                        {/* Price and Rating */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Price per Unit</span>
                                </label>
                                <div className="input-group">
                                    <span className="bg-base-300 px-3 flex items-center">$</span>
                                    <input
                                        type="number"
                                        className="input input-bordered w-full"
                                        name="price"
                                        placeholder="0.00"
                                        step="0.01"
                                        min="0"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Rating (1-5)</span>
                                </label>
                                <div className="flex items-center space-x-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setRating(star)}
                                            className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                    <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="form-control pt-4">
                            <button type="submit" className="btn btn-primary w-full">
                                Add Product
                            </button>
                        </div>
                    </form>

                    {/* Product Content Section */}
                    <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Product Information</h2>
                        <div className="prose max-w-none">
                            <p className="text-gray-700 mb-4">
                                Welcome to our wholesale platform! This form allows you to add new products to our marketplace.
                                Please ensure all information is accurate and complete before submission.
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-blue-800 mb-2">Important Notes:</h3>
                                <ul className="text-blue-700 space-y-1 text-sm">
                                    <li>• Minimum selling quantity is the smallest order size customers can place</li>
                                    <li>• Product images should be high quality and clearly show the product</li>
                                    <li>• Accurate pricing and quantity information is crucial for customer trust</li>
                                    <li>• All fields marked with * are required</li>
                                    <li>• Products will be reviewed before being published to the marketplace</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;