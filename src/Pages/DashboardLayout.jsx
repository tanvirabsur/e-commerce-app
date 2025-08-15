import React from 'react';
import { FaBars } from "react-icons/fa";
import { Link, Outlet } from 'react-router';
const DashboardLayout = () => {
    
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {/* <li><Link to="/dashboard/profile">Profile</Link></li> */}
                    <li><Link to="/dashboard">Dashboard Home</Link></li>
                    <li><Link to="/dashboard/all-users">All Users</Link></li>
                    <li><Link to="/dashboard/all-blood-donation-request">All Blood Donation Requests</Link></li>
                    <li><Link to="/dashboard/content-management">Content Management</Link></li>
                </ul>
            </div>
            <div className="drawer-content p-4 w-full min-h-screen">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-4"><FaBars size={20} /></label>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;