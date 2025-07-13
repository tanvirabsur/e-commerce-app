import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Orders from '../components/Orders';
import { AuthContext } from '../authprovider/Authprovider';
import axios from 'axios';
import Swal from 'sweetalert2';

// Dummy cart data for demonstration

const Cart = () => {
  const { user } = use(AuthContext);
  const orders = useLoaderData()
  
  const [allorders, setAllorders] = useState([]);

  useEffect(() => {
    if (orders && user) {
      const filtered = orders.filter(order => order.customerEmail === user.email);
      setAllorders(filtered);
    }
  }, [orders, user]);

  
  const handleDelete = async (id)=>{
    try {
      // Call your API to delete the order
      await axios.delete(`https://assignment-11-server-six-sage.vercel.app/deleteorder/${id}`)
      .then(res => {
        console.log(res.data);
        setAllorders(prev => prev.filter(order => order._id !== id));
        if(res.data.deletedCount > 0){
          Swal.fire({
            title: 'Success!',
            text: 'Order deleted successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }
      })
      // Remove from state for real-time update
      
      
    } catch (error) {
      console.error('Failed to delete order:', error);
    }
  }

  if (allorders.length === 0) {
    return (
      <div className="min-h-screen bg-base-200 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">My Cart</h1>
          <p className="text-center text-gray-500">Your cart is empty.</p>
        </div>
      </div>
    );

  } else {
    return (
      <div className="min-h-screen bg-base-200 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">My Cart</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              allorders.map((product) => <Orders key={product._id} product={product} handleDelete={handleDelete}></Orders>)
            }
          </div>
        </div>
      </div>
    );
  }

};

export default Cart; 