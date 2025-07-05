import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
       <>
       <NavBar/>
       <Outlet></Outlet>
       <Footer />
       </>
    );
};

export default Home;