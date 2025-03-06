import React from "react";

const NewArrival = () => {
  const products = [
    { name: "Leather Jacket", price: "$120", image: "/jacket.jpg" },
    { name: "Stylish Gloves", price: "$35", image: "/glovez.jpg" },
    { name: "Leather Jacket", price: "$90", image: "/jacket.jpg" },
    { name: "Stylish Gloves", price: "$250", image: "/glovez.jpg" },
    { name: "Leather Jacket", price: "$80", image: "/jacket.jpg" },
    { name: "Stylish Gloves", price: "$45", image: "/glovez.jpg" },
    { name: "Leather Jacket", price: "$30", image: "/jacket.jpg" },
    { name: "Stylish Gloves", price: "$70", image: "/glovez.jpg" },
  ];

  return (
    <section className="text-center py-12 px-6">
      {/* Heading */}
      <h2 className="text-4xl font-bold font-serif mb-10">New Arrivals</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition-all duration-300">
            {/* Image with Hover Effect */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-all cursor-pointer duration-500 hover:scale-105"
              />
            </div>

            {/* Name & Price */}
            <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600 text-lg">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
