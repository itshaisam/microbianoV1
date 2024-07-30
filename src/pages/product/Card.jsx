
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import newIcon from '../../assets/new.png';
import bagIcon from '../../assets/bag.png';
import bucket from '../../assets/bucket.png';

const Card = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const [products, setProducts] = useState([
        { id: 1, code: "KM0075", price: "$45.00", name: "Bacillus Cereus Agar (MYP)" },
        { id: 2, code: "KM0076", price: "$50.00", name: "Bacillus Cereus Agar(MYP)" },
        { id: 3, code: "KM0077", price: "$55.00", name: "Bacillus Cereus Agar(MYP)" },
        { id: 4, code: "KM0078", price: "$60.00", name: "Bacillus Cereus Agar(MYP)" },
        { id: 5, code: "KM0079", price: "$65.00", name: "Bacillus Cereus Agar(MYP)" },
        { id: 6, code: "KM0080", price: "$70.00", name: "Bacillus Cereus Agar(MYP)" },
        { id: 7, code: "KM0081", price: "$75.00", name: "Bacillus Cereus Agar(MYP)" },
        { id: 8, code: "KM0082", price: "$80.00", name: "Bacillus Cereus Agar(MYP)" },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const newProductIndices = [0, 3, 5];

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCardClick = (productId) => {
        navigate(`/product-details/${productId}`); // Navigate to product-details page
    };

    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Sidebar */}
                <aside className="lg:col-span-1 bg-white shadow-md h-[110vh] rounded-lg p-4">
                    <div className="mb-4">
                        <input type="text" placeholder="Search" className="w-full p-4 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <select className="w-full p-4 border border-gray-300 rounded">
                            <option value="">Categories</option>
                            <option value="cat1">Category 1</option>
                            <option value="cat2">Category 2</option>
                            <option value="cat3">Category 3</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <div className="flex flex-col">
                            {[...Array(5)].map((_, idx) => (
                                <label key={idx} className="inline-flex items-center mb-2">
                                    <input type="radio" name="price" value={`price${idx + 1}`} className="form-radio" />
                                    <span className="ml-2">Microbiological Media</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Price</label>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="$0" className="w-full p-2 border border-gray-300 rounded" />
                            <input type="text" placeholder="$10000" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <select className="w-full p-4 border border-gray-300 rounded">
                            <option value="">Manufacture</option>
                            <option value="man1">Manufacture 1</option>
                            <option value="man2">Manufacture 2</option>
                            <option value="man3">Manufacture 3</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        {["IKEA", "Ashley HomeStore", "Restoration Hardware", "Kartell", "William-sonoma", "American Signature"].map((brand, idx) => (
                            <label key={idx} className="flex items-center mb-2">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">{brand}</span>
                            </label>
                        ))}
                    </div>
                </aside>

                {/* Card Grid */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="bg-white shadow-md rounded-lg cursor-pointer"
                            onClick={() => handleCardClick(product.id)} // Handle card click
                        >
                            <div className="flex justify-between items-start p-3">
                                {newProductIndices.includes(indexOfFirstProduct + index) && (
                                    <img src={newIcon} alt="New Product" className="w-8 h-8" />
                                )}
                                <img src={bagIcon} alt="Bag" className="ml-auto w-8 h-8" />
                            </div>
                            <div className="flex justify-center my-4">
                                <img src={bucket} alt={product.name} className="w-48 h-48" />
                            </div>
                            <div className="flex justify-between p-3">
                                <h1 className="text-lg font-semibold">{product.code}</h1>
                                <h1 className="text-sm font-medium">{product.price}</h1>
                            </div>
                            <div className="text-start px-3 mb-3">
                                <h1 className="text-sm">{product.name}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-end mt-8">
                <nav aria-label="Page navigation">
                    <ul className="flex list-none">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index} className="mx-1">
                                <button
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`px-4 py-2 border rounded ${currentPage === index + 1 ? 'bg-[#9E1F66] text-white' : 'bg-white text-blue-500'}`}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Card;
