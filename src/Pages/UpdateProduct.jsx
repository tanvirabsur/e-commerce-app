import axios from 'axios';
import React, { useState, use, useEffect } from 'react';
import Loading from '../components/Loading'
import Swal from 'sweetalert2';
import { AuthContext } from '../authprovider/Authprovider';
import { useParams } from 'react-router';


const UpdateProduct = () => {
   

    const [rating, setRating] = useState(5);
    const { user } = use(AuthContext)
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const categories = [
        "Electronics & Gadgets",
        "Home & Kitchen Appliances",
        "Fashion & Apparel",
        "Industrial Machinery & Tools",
        "Health & Beauty",
        "Automotive Parts & Accessories",
        "Office Supplies & Stationery"
    ];

    useEffect(() => {
        axios.get(`https://assignment-11-server-six-sage.vercel.app/product/${id}`)
            .then(res => {
                setProduct(res.data);
                setRating(res.data.rating || 5);
            })
            .catch(error => {
                console.error("Failed to fetch product:", error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to fetch product details.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    }, [id]);



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData.entries());

        const updatedProduct = {
            image: formObject.image,
            productName: formObject.productName,
            maxQuantity: Number(formObject.maxQuantity),
            minQuantity: Number(formObject.minQuantity),
            brand: formObject.brand,
            category: formObject.category,
            description: formObject.description,
            price: Number(formObject.price),
            rating: rating,
            authorName: user?.displayName,
            author: user?.email,
        }
        

        axios.patch(`https://assignment-11-server-six-sage.vercel.app/update/${id}`, updatedProduct,
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
                        text: 'Product updated successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: res.data.message || 'Failed to update product.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            })
        

    };


    if (!product) {
        return <Loading></Loading>
    }


    return (
        <div className="min-h-screen bg-base-200 py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-8">Update Product</h1>

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
                                defaultValue={product.image}
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
                                name="productName"
                                defaultValue={product.productName}
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
                                    name="maxQuantity"
                                    defaultValue={product.maxQuantity}
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
                                    name="minQuantity"
                                    defaultValue={product.minQuantity}
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
                                    name="brand"
                                    defaultValue={product.brand}
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
                                    defaultValue={product.category}
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
                                name="description"
                                defaultValue={product.description}
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
                                        defaultValue={product.price}
                                        
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
                                Update Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
