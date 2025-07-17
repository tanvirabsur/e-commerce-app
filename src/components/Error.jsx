import React from 'react';

const Error = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center bg-gray-100'>
            <h1 className="text-4xl font-bold text-center mt-10">404 - Page Not Found</h1>
            <p className="text-center mt-4">Sorry, the page you are looking for does not exist.</p>
            <p className="text-center mt-2">Please check the URL or return to the homepage.</p>
            
        </div>
    );
};

export default Error;