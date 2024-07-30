import React from "react";

import newIcon from '../../assets/new.png';
import bagIcon from '../../assets/bag.png';
import bucket from '../../assets/bucket.png';

const RelatedProduct = () => {
   
    const products = [
        { id: 1, code: "KM0075", price: "$45.00", name: "Bacillus Cereus Agar (MYP)" },
        { id: 2, code: "KM0076", price: "$50.00", name: "Bacillus Cereus Agar(MYP)" },
        { id: 3, code: "KM0077", price: "$55.00", name: "Bacillus Cereus Agar(MYP)" },
        { id: 4, code: "KM0078", price: "$60.00", name: "Bacillus Cereus Agar(MYP)" },
      
    ];

    const newProductIndices = [0];

   

    return (
        <div className="container mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg">
                        <div className="flex justify-between items-start p-3">
                            {newProductIndices.includes(index) && (
                                <img src={newIcon} alt="New Product" className="w-8 h-8" />
                            )}
                            <img src={bagIcon} alt="Bag" className="ml-auto w-8 h-8" />
                        </div>
                        <div className="flex justify-center my-4">
                            <img src={bucket} alt={product.name} className="w-48 h-48" />
                        </div>
                        <div className="flex justify-between p-3">
                            <h1 className="text-[16px] font-semibold">{product.code}</h1>
                            <h1 className="text-[13px] font-medium">{product.price}</h1>
                        </div>
                        <div className="text-start px-3 mb-3">
                            <h1 className="text-[14px]">{product.name}</h1>
                        </div>
                    </div>
                ))}
            </div>

           
        </div>
    );
};

export default RelatedProduct;