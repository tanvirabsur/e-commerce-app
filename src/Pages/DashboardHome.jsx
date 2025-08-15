import React from 'react';
import SellerDashboard from '../components/SellerDashboard';

const DashboardHome = () => {
    const user = {
        role: 'seller'
    }
    if(user.role === 'seller') return <SellerDashboard></SellerDashboard>
    
    return (
        <div>
            dhasbord home
        </div>
    );
};

export default DashboardHome;