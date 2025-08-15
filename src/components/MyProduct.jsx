
import React from 'react';
import { NavLink } from 'react-router';

const MyProduct = () => {
  const product = {
  image: "https://via.placeholder.com/200x200.png?text=Product+Image",
  productName: "Wireless Headphones",
  brand: "SoundMax",
  category: "Electronics",
  maxQuantity: 50,
  minQuantity: 5,
  price: 129.99,
  description: "High-quality wireless headphones with noise cancellation and long battery life.",
  _id: "prod123456"
};
  const { image, productName, brand, category, maxQuantity, price, description, _id, minQuantity } = product;

  return (
    <div style={{ 
      backgroundColor: 'white', 
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
      borderRadius: '0.75rem', 
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ height: '16rem', overflow: 'hidden' }}>
        <img src={image} alt='' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ padding: '1.5rem', flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{productName}</h2>
        <div style={{ display: 'flex', gap: '1rem', color: '#4b5563', marginBottom: '1rem' }}>
          <span>Brand:{brand} </span>
          <span>Category: {category}</span>
        </div>
        <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
          <span style={{ marginRight: '1rem' }}>Max Qty: <span style={{ fontWeight: '600' }}>{maxQuantity}</span></span>
          <span>Min Qty: <span style={{ fontWeight: '600' }}>{minQuantity}</span></span>
        </div>
        <p style={{ color: '#374151', marginBottom: '1.5rem', flexGrow: '1' }}>{description}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#10b981' }}>${price}</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <NavLink to={`/update/${_id}`} style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              width: '100%',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600'
            }}>
              Edit
            </button>
          </NavLink>
          <button style={{
            backgroundColor: '#ef4444',
            color: 'white',
            width: '100%',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
