import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:gap-16 gap-10">
        
        {/* Left: Image */}
        <div className="md:w-1/2">
          <img
            src="/3.jpg" // Replace with your image path
            alt="About Us"
            className="w-full rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 text-center md:text-left">
  <h2 className="text-5xl font-extrabold mb-6 text-gray-800 font-serif tracking-wide">
    ABOUT US
  </h2>
  <p className="text-gray-600 text-lg leading-8 mb-4 font-[500]">
    Welcome to our <span className="text-gray-800 font-semibold">fashion sanctuary</span> — where creativity meets comfort.
    Our mission is to design with passion, detail, and a bold spirit that celebrates individuality.
  </p>
  <p className="text-gray-500 text-base leading-7 font-medium">
    Whether you're after <span className="text-gray-700 font-semibold">timeless elegance</span> or modern edge, 
    our collections empower you to express who you are — confidently and stylishly.
    Fashion isn’t just clothing, it's a <span className="italic text-gray-800">lifestyle</span>.
  </p>
</div>

      </div>
    </section>
  );
};

export default About;
