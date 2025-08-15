
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
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">My Donation Requests</h1>

      <div className="mb-4">
        <label htmlFor="filterStatus" className="label-text mr-2">Filter by Status:</label>
        <select
          id="filterStatus"
          className="select select-bordered"
        // value={filterStatus}
        // onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>

      {fakeProducts.length > 0 ? (
        <div className="overflow-x-auto mb-4">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Recipient Name</th>
                <th>Location</th>
                <th>Date</th>
                <th>Time</th>
                <th>Blood Group</th>
                <th>Status</th>
                <th>Donor Info</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                fakeProducts.map(product => <TaibleRow key={product._id} product={product}></TaibleRow>)
              }
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-info">
          No donation requests found for the selected filter.
        </div>
      )}

      {/* <div className="flex justify-center gap-2">
        {[...Array(totalPages).keys()].map(number => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`btn ${currentPage === number + 1 ? 'btn-active' : ''}`}
          >
            {number + 1}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Myproducts;
