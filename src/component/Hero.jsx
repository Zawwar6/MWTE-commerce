import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const images = ["/bg3.jpg", "/bg4.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative flex items-center justify-center h-screen text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide">
      <span className='text-gray-400 to-black bg-gradient-to-r'> FASHION </span> <span className="text-white">CHANGING</span>{' '}
          <span className="text-white to-black bg-gradient-to-r  px-2 rounded-md">
            ALWAYS
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-black font-bold max-w-2xl mx-auto">
           <span className='text-gray-300 to-black bg-gradient-to-r'>Step into style that evolves with every trend. Discover unique fashion pieces just for you.</span>
        </p>

        <Link
          to="/shop"
          className="mt-8 inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105"
        >
          SHOP NOW
        </Link>
      </div>
    </section>
  );
};

export default Hero;
