import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const SampleProduct = () => {
  const products = [
    { name: "Jacket", image: "/jacket.jpg" },
    { name: "Gloves", image: "/glovez.jpg" },
    { name: "Jacket", image: "/jacket.jpg" },
    { name: "Gloves", image: "/glovez.jpg" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full px-4 md:px-10 py-16 bg-gradient-to-b ">
      <h2 className="text-gray-900 text-3xl sm:text-4xl font-bold font-serif text-center mb-12 tracking-tight">
        ✨ OUR FEATURED PRODUCTS
      </h2>

      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-4">
            <div className="relative group rounded-3xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-500 border border-gray-200">
              
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover transition-transform duration-700 transform group-hover:scale-110"
              />

              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-700 z-10" />

              {/* Product Name */}
              <div className="absolute bottom-0 left-0 w-full z-20 text-white text-xl sm:text-2xl font-bold text-center py-4 tracking-wider drop-shadow-md">
                {product.name}
              </div>

              {/* Button */}
              <Link to="/shop">
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-50%] z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold px-6 py-2 rounded-full shadow-xl tracking-wide">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SampleProduct;
