import React from "react";
import bannerproduct from "../../assets/bannerproduct.png";

const Banner = () => {
  return (
    <div className="relative">
      <div className="container mx-auto">
        <div className="flex justify-center md:justify-end">
          <img src={bannerproduct} className="w-full h-60" alt="Banner" />
        </div>
      </div>
      <div className="absolute bottom-8 left-20 right-0 bg-opacity-50  text-white py-2">
        <h1 className="text-4xl">Product Page</h1>
      </div>
    </div>
  );
};

export default Banner;
