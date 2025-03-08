import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Arrows for navigation

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  return (
    <motion.div
      className="relative w-80 h-96 overflow-hidden rounded-lg border border-gray-200 shadow-lg bg-white"
      whileHover={{ scale: 1.05 }}
    >
      {/* Image Container */}
      <div className="relative w-full h-3/4">
        <img
          src={product.images[currentImage]}
          alt={product.name}
          className="w-full  h-full object-cover transition-all duration-300"
        />

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Sizes (Now Above Name & Price) */}
      <div className="flex justify-center gap-2 py-2">
        {["S", "M", "L", "XL"].map((size, index) => (
          <span
            key={index}
            className="border border-gray-800 px-3 py-1 text-xs rounded-lg hover:bg-gray-800 hover:text-white transition"
          >
            {size}
          </span>
        ))}
      </div>

      {/* Name & Price (Always Visible) */}
      <div className="p-0 text-center">
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.price}</p>
      </div>
    </motion.div>
  );
};

const NewArrival = () => {
  const products = [
    { name: "Leather Jacket", price: "$120", images: ["/ls1.png", "/Ls2.png", "/Ls3.png"] },
    { name: "Stylish Gloves", price: "$35", images: ["/glovez.jpg", "/jacket.jpg"] },
    { name: "Leather Jacket", price: "$80", images: ["/ls1.png", "/Ls2.png", "/Ls3.png"] },
    { name: "Leather Jacket", price: "$60", images: ["/ls1.png", "/Ls2.png", "/Ls3.png"] },
    { name: "Leather Jacket", price: "$150", images: ["/ls1.png", "/Ls2.png", "/Ls3.png"] },
    { name: "Stylish Gloves", price: "$40", images: ["/glovez.jpg", "/jacket.jpg"] },
    { name: "Stylish Gloves", price: "$25", images: ["/glovez.jpg", "/jacket.jpg"] },
    { name: "Stylish Gloves", price: "$220", images: ["/glovez.jpg", "/jacket.jpg"] },
    { name: "Stylish Gloves", price: "$70", images: ["/glovez.jpg", "/jacket.jpg"] },
    { name: "Leather Jacket", price: "$45", images: ["/ls1.png", "/Ls2.png", "/Ls3.png"] },
    { name: "Leather Jacket", price: "$95", images: ["/ls1.png", "/Ls2.png", "/Ls3.png"] },
    { name: "Leather Jacket", price: "$55", images: ["/ls1.png", "/Ls2.png", "/Ls3.png"] },
  ];

  return (
    <section className="text-center py-12 px-6">
      {/* Heading */}
      <h2 className="text-5xl font-bold font-serif mb-10">NEW ARRIVALS</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
