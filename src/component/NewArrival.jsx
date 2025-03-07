import React, { useEffect } from "react";
import { motion } from "framer-motion";

const NewArrival = () => {
  const products = [
    { name: "Leather Skin", price: "$120", image: "/ls1.png" },
    { name: "Stylish Gloves", price: "$35", image: "/glovez.jpg" },
    { name: "Leather Jacket", price: "$90", image: "/Ls2.png" },
    { name: "Stylish Gloves", price: "$250", image: "/glovez.jpg" },
    { name: "Leather Jacket", price: "$80", image: "/Ls3.png" },
    { name: "Stylish Gloves", price: "$45", image: "/glovez.jpg" },
    { name: "Leather Jacket", price: "$30", image: "/ls4.png" },
    { name: "Stylish Gloves", price: "$70", image: "/glovez.jpg" },
    { name: "Stylish Gloves", price: "$70", image: "/glovez.jpg" },
    { name: "Stylish Gloves", price: "$70", image: "/glovez.jpg" },
    { name: "Stylish Gloves", price: "$70", image: "/glovez.jpg" },
    { name: "Stylish Gloves", price: "$70", image: "/glovez.jpg" },
  ];

  return (
    <section className="text-center py-12 px-6">
      {/* Heading */}
      <h2 className="text-6xl font-bold font-serif mb-10">NEW ARRIVALS</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            {/* Image Outside the Card */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover transition-all cursor-pointer duration-500 hover:scale-110"
              />
            </div>

            {/* Name & Price */}
            <div className="mt-4 bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-lg">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Browse More Button */}
      <div className="mt-12">
        <button className="px-10 py-4 text-lg font-semibold text-white bg-black  shadow-lg transition-all duration-300 cursor-pointer hover:bg-gray-800 hover:scale-105">
          Browse More
        </button>
      </div>
    </section>
  );
};

export default NewArrival;
