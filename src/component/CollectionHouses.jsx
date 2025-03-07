import React from 'react';
import { Link } from 'react-router-dom';

const CollectionHouses = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Hero2.jpg"
          alt="Collection Houses"
          className="w-full h-full opacity-80 object-cover"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      </div>

      {/* Text Content */}
      <div className="relative text-center text-black z-40 px-6">
        <h2 className="text-7xl font-serif font-bold mb-4">COLLECTION<br /> HOUSES OUR FIRST- <br /> EVER </h2>
        
        <Link to='/about'>
          <button className="mt-6 px-20 font-serif py-4 text-lg font-semibold rounded-2xl text-white bg-black shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden group">
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
            ABOUT US
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CollectionHouses;
