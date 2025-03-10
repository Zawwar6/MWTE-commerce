import React from "react";
import { Heart } from "lucide-react"; // or use any heart icon from Heroicons

const products = [
  { name: "Denim Jacket", price: "€450", image: "/1.jpg",  },
  { name: "Leather Jacket", price: "€120", image: "/2.jpg",  },
  { name: "Luxury Coat", price: "€580", image: "/3.jpg" },
  { name: "Biker Jacket", price: "€720", image: "/6.jpg",  },
  { name: "Warm Gloves", price: "€95", image: "/8.jpg" },
  { name: "Classic Jacket", price: "€750", image: "/5.jpg" },
];

const Shop = () => {
  return (
    <section className="min-h-screen py-16 px-4 md:px-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold font-serif text-gray-900 mb-3">
          Discover Your Style
        </h1>
        <p className="text-lg text-gray-600">
          Shop our premium outerwear & accessories — for the bold, by the bold.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
          >
            {/* Wishlist Icon */}
            <div className="absolute top-3 right-3 z-10 bg-white p-1 rounded-full shadow-sm">
              <Heart className="w-5 h-5 text-gray-500 hover:text-red-500 transition" />
            </div>

            {/* Tag Badge */}
            {product.tag && (
              <div className="absolute top-3 left-3 z-10 bg-black text-white text-xs px-3 py-1 rounded-full font-medium">
                {product.tag}
              </div>
            )}

            {/* Image */}
            <div className="w-full h-72 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Product Info */}
            <div className="p-5 text-center flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm">{product.price}</p>
              </div>
              <button className="mt-6 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-all duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
