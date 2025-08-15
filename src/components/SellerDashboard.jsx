import React from 'react';

const SellerDashboard = () => {
  // Fake data for the dashboard
  const stats = [
    { title: 'Total Revenue', value: '$45,231.89', change: '+20.1% from last month' },
    { title: 'Total Sales', value: '+12,234', change: '+19% from last month' },
    { title: 'Total Orders', value: '5,643', change: '+10% from last month' },
    { title: 'Conversion Rate', value: '2.3%', change: '+5% from last month' },
  ];

  const recentOrders = [
    { orderId: '#3210', customerName: 'John Doe', amount: '$120.50', status: 'Paid' },
    { orderId: '#3209', customerName: 'Jane Smith', amount: '$89.99', status: 'Paid' },
    { orderId: '#3208', customerName: 'Bob Johnson', amount: '$250.00', status: 'Shipped' },
    { orderId: '#3207', customerName: 'Alice Williams', amount: '$45.00', status: 'Paid' },
    { orderId: '#3206', customerName: 'Chris Brown', amount: '$199.99', status: 'Shipped' },
  ];

  const topProducts = [
    { name: 'Wireless Earbuds', sales: 1200 },
    { name: 'Smart Watch', sales: 950 },
    { name: 'Bluetooth Speaker', sales: 780 },
    { name: 'Gaming Mouse', sales: 600 },
    { name: 'Mechanical Keyboard', sales: 450 },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', backgroundColor: '#f0f4f8' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1e3a8a' }}>Seller Dashboard</h1>

      {/* Key Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {stats.map((stat, index) => (
          <div key={index} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
            <h3 style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.5rem' }}>{stat.title}</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a' }}>{stat.value}</p>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{stat.change}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Recent Orders */}
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1e3a8a' }}>Recent Orders</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: '#4b5563', textTransform: 'uppercase' }}>Order ID</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: '#4b5563', textTransform: 'uppercase' }}>Customer</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: '#4b5563', textTransform: 'uppercase' }}>Amount</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: '#4b5563', textTransform: 'uppercase' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.orderId} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '0.75rem' }}>{order.orderId}</td>
                  <td style={{ padding: '0.75rem' }}>{order.customerName}</td>
                  <td style={{ padding: '0.75rem' }}>{order.amount}</td>
                  <td style={{ padding: '0.75rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '9999px', 
                      fontSize: '0.875rem',
                      backgroundColor: order.status === 'Paid' ? '#d1fae5' : '#fee2e2',
                      color: order.status === 'Paid' ? '#065f46' : '#991b1b'
                    }}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top Selling Products */}
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1e3a8a' }}>Top Selling Products</h2>
          <ul>
            {topProducts.map((product, index) => (
              <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
                <span>{product.name}</span>
                <span style={{ fontWeight: 'bold' }}>{product.sales} sales</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;