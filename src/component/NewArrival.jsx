import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const tabs = ["Jacket", "Leather", "Glove"];

const productsData = {
  Jacket: [
    { name: "Denim Storm Jacket", price: "€450", image: "/denim.png" },
    { name: "Skyline Hooded Jacket", price: "€499", image: "/denim.png" },
    { name: "Mountain Windbreaker", price: "€520", image: "/denim.png" },
    { name: "Urban Field Coat", price: "€580", image: "/denim.png" },
  ],
  Leather: [
    { name: "Classic Leather Jacket", price: "€750", image: "/ls1.png" },
    { name: "Cropped Biker Leather", price: "€720", image: "/Ls2.png" },
    { name: "Vintage Leather Coat", price: "€800", image: "/Ls3.png" },
    { name: "Modern Moto Jacket", price: "€770", image: "/ls4.png" },
  ],
  Glove: [
    { name: "Winter Grip Gloves", price: "€90", image: "/4.jpg" },
    { name: "Leather Rider Gloves", price: "€120", image: "/5.jpg" },
    { name: "Touchscreen Gloves", price: "€110", image: "/6.jpg" },
    { name: "Fleece Warm Gloves", price: "€95", image: "/8.jpg" },
  ],
};

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="rounded-2xl p-4 shadow-md w-72 cursor-pointer mx-auto group relative bg-white"
      whileHover={{ scale: 1.03 }}
    >
      <div className="w-full h-80 rounded-xl overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Name */}
      <h3 className="text-center mt-4 text-gray-900 font-medium text-lg">
        {product.name}
      </h3>

      {/* Price */}
      <p className="text-center text-gray-800 text-sm font-semibold">
        {product.price}
      </p>
        <div className="absolute top-3 right-3 z-10 bg-white p-1 rounded-full shadow-sm">
                      <Heart className="w-5 h-5 text-gray-500 hover:text-red-500 transition" />
                    </div>
      {/* Colour Text */}
      <p className="text-center text-green-700 text-sm mt-1">1 colour</p>

      {/* Sizes on Hover - Bottom Position */}
      <div className="flex justify-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {["S", "M", "L", "XL"].map((size) => (
          <span
            key={size}
            className="text-xs bg-white border border-gray-300 px-2 py-1 mx-1 rounded-full shadow-sm hover:bg-gray-200 cursor-pointer"
          >
            {size}
          </span>
        ))}
      </div>
    </motion.div>
  );
};


const NewArrival = () => {
  const [activeTab, setActiveTab] = useState("Jacket");

  return (
    <section className="text-center py-12 px-4 min-h-screen ">
      {/* Heading */}
      <h2 className="text-4xl font-bold font-serif mb-6">NEW ARRIVALS</h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-8 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-lg font-semibold cursor-pointer transition-colors duration-300 ${
              activeTab === tab ? "text-black underline underline-offset-4" : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {productsData[activeTab].map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
