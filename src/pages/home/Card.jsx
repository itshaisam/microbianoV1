import React from "react";
import dog from '../../assets/dog.png'

const Card = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img src={dog} />
          </div>
        ))}
      </div>

      {/* Product heading */}
      <div>
        <h1 className="text-black text-[40px] font-medium">Products</h1>
      </div>

      {/* Product buttons */}
      <div className="flex flex-wrap gap-4 mt-6">
        <button className="border-2 rounded-lg border-[#000000] px-4 py-2 text-[#000000] hover:bg-gray-200">
          All Products
        </button>
        <button className="border-2 rounded-lg border-[#707070] px-4 py-2 text-black hover:bg-gray-200">
          Veterinary Food
        </button>
        <button className="border-2 rounded-lg border-[#707070] px-4 py-2 text-black hover:bg-gray-200">
          Water & Environmental
        </button>
        <button className="border-2 rounded-lg border-[#707070] px-4 py-2 text-black hover:bg-gray-200">
          Pharmaceutical
        </button>
        <button className="border-2 rounded-lg border-[#707070] px-4 py-2 text-black hover:bg-gray-200">
          Industrial
        </button>
        <button className="border-2 rounded-lg border-[#707070] px-4 py-2 text-black hover:bg-gray-200">
          Cosmetic
        </button>
      </div>
    </div>
  );
};

export default Card;
