
import React from 'react';
import TaibleRow from './TaibleRow';

const Myproducts = () => {
  const fakeProducts = [
    {
      _id: '1',
      image: 'https://via.placeholder.com/150',
      productName: 'Wireless Earbuds',
      brand: 'SoundWave',
      category: 'Electronics',
      price: '75.00',
    },
    {
      _id: '2',
      image: 'https://via.placeholder.com/150',
      productName: 'Smart Watch',
      brand: 'FitTech',
      category: 'Wearables',
      price: '199.99',
    },
    {
      _id: '3',
      image: 'https://via.placeholder.com/150',
      productName: 'Bluetooth Speaker',
      brand: 'AudioBlast',
      category: 'Electronics',
      price: '45.50',
    },
    {
      _id: '4',
      image: 'https://via.placeholder.com/150',
      productName: 'Gaming Mouse',
      brand: 'GamerGear',
      category: 'Peripherals',
      price: '60.00',
    },
    {
      _id: '5',
      image: 'https://via.placeholder.com/150',
      productName: 'Mechanical Keyboard',
      brand: 'TypeFast',
      category: 'Peripherals',
      price: '120.00',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
           
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          
          {
            fakeProducts.map(product => <TaibleRow product={product}></TaibleRow>)
          }
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Myproducts;
