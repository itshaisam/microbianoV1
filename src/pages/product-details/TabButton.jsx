import React, { useState } from 'react';


const tabs = [
  { label: 'Description  ', description: 'Traditionally, the BWE has been studied in serial supply chains. That is also the setting of the famous beer game, where the typical demand pattern across the supply chain looks like this: for a relatively small change in demand seen by the retailer, the demand variability progressively increases at the more  upstream wholesaler, distributor, and factory (see the figure below). This leads to capacity shortages, stockouts, excess inventory, and increased  operational costs. No wonder BWE has  a lot of attention among academics and practitioners alike.' },
  { label: 'Info  ', description: 'Traditionally, the BWE has been studied in serial supply chains. That is also the setting of the famous beer game, where the typical demand pattern across the supply chain looks like this: for a relatively small change in demand seen by the retailer, the demand variability progressively increases at the more  upstream wholesaler, distributor, and factory (see the figure below). This leads to capacity shortages, stockouts, excess inventory, and increased  operational costs.' },
  { label: 'Reviews (1)  ', description: 'Traditionally, the BWE has been studied in serial supply chains. That is also the setting of the famous beer game, where the typical demand pattern across the supply chain looks like this: for a relatively small change in demand seen by the retailer, the demand variability progressively increases at the more  upstream wholesaler, distributor, and factory (see the figure below). This leads to capacity shortages, stockouts, excess inventory, and increased  operational costs.' },
];

const TabButton = () => {
 
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container mx-auto flex space-x-4">
      <div className="flex flex-col w-full">
        <div className="flex space-x-4 border-b">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-4 text-lg font-bold ${
                activeIndex === index ? 'border-b-2 border-red-500' : ''
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600">{tabs[activeIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default TabButton;

