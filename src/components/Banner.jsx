import React from 'react';
import illustration from '../assets/Niche service marketplace-pana.png';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Discover Your Next Favorite Product</h1>
          <p className="text-lg mb-8">
            Explore our curated collection of high-quality products. We have something for everyone.
          </p>
          <button className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300">
            Shop Now
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={illustration} alt="Illustration" className="w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;