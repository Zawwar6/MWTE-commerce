import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
    const images = ["/glovez.jpg", "/jacket.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  <div className="absolute inset-0 bg-black bg-opacity-30"></div>

  return (
    <section
    className="flex flex-col items-center justify-center h-screen  text-white text-center p-6 bg-cover opacity-80 bg-center bg-fixed transition-all duration-500 ease-in-out"
    style={{ backgroundImage: `url(${images[currentImage]})` }}
  >
   <h2 className="text-xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight z-10 animate-gradient my-4">
  <span className="bg-gradient-to-r from-gray-300 via-gray-600 to-black bg-clip-text text-transparent">
    FASHING
  </span>
  <span className="mx-1 bg-gradient-to-r from-gray-300 via-gray-600 to-black bg-clip-text text-transparent">
    CHANGING
  </span>
  <span className="mx-1 bg-gradient-to-r from-gray-300 via-gray-600 to-black bg-clip-text text-transparent">
    ALWAYS
  </span>
</h2>


    

    <Link
      to="/shop"
      className="mt-4 sm:mt-8 px-6 sm:px-10 py-2 sm:py-3 bg-gradient-to-r from-black to-blue-700 text-white text-sm sm:text-lg font-semibold  shadow-lg hover:from-black hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
    >
      SHOP NOW
    </Link>
  </section>
  )
}

export default Hero