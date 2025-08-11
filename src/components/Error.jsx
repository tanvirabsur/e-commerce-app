import React from 'react';
import { NavLink } from 'react-router';

const Error = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center bg-gray-100'>
            <h1 className="text-4xl font-bold text-center mt-10">404 - Page Not Found</h1>
            <p className="text-center mt-4">Sorry, the page you are looking for does not exist.</p>
            <p className="text-center mt-2">Please check the URL or return to the homepage.</p>
            <NavLink to={'/'} className="btn bg-blue-500 text-white mt-4">Go home</NavLink>
        </div>
    );
};

export default Error;