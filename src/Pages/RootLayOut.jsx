import React from 'react';
import Navbar from '../components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayOut = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default RootLayOut;