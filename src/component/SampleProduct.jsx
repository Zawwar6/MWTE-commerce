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
    ,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full px-10 my-10">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-4">
            <div className="relative group overflow-hidden">
              {/* Product Image */}
              <img src={product.image} alt={product.name} className="w-full cursor-pointer h-[400px] object-cover transition-all duration-500 group-hover:scale-110" />

              {/* Name Slide From Bottom */}
              <div className="absolute bottom-0 cursor-pointer left-0 w-full bg-blue-950  text-white text-2xl text-center py-3 translate-y-full group-hover:translate-y-0 transition-all duration-500">
                {product.name}
              </div>

              {/* Button Slide From Top */}
       <Link to='/shop'><button className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full group-hover:translate-y-10 bg-white text-black font-semibold px-5 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer">
                SHOP NOW
              </button></Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SampleProduct;
