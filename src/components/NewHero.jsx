import React from 'react';
import { Link } from 'react-router';

const NewHero = () => {
    return (
        <section className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Welcome to <span className="text-yellow-300">Elyqor</span>
                    </h1>
                    <p className="text-lg sm:text-xl mb-8 text-gray-100">
                        Discover premium products, unbeatable deals, and a shopping
                        experience designed just for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            href="/shop"
                            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
                        >
                            Shop Now
                        </Link>
                        <Link
                            href="/about"
                            className="px-6 py-3 border border-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/Niche service marketplace-amico.png" // replace with your image
                        alt="Hero Banner"
                        className="w-[300px] sm:w-[400px] lg:w-[500px] drop-shadow-2xl rounded-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default NewHero;