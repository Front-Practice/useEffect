import React from 'react';
import Products from '../products'; 


const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            The Future of Design is Here
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Experience our revolutionary new product that combines elegance,
            power, and simplicity into one stunning package.
          </p>
          <div className="mt-8">
            <a
              href="#products-section"
              className="inline-block rounded-full bg-blue-600 px-10 py-4 text-lg font-semibold text-white 
                         shadow-lg ring-1 ring-blue-600 ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-800
                         transition-all duration-300 ease-in-out 
                         hover:scale-105 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2"
            >
              Discover Our Product
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Products />
    </>
  );
};

export default LandingPage;