import React, { useState } from "react";
import { FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import {
    AiOutlineDashboard,
    AiOutlineShopping,
    AiOutlineUser,
    AiOutlineBell,
    AiOutlineFileText,
    AiOutlineCamera,
} from "react-icons/ai";

import logo from "../assets/logo.svg";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        navigate("/");
    };

    const showSidebar = location.pathname !== "/";

    if (!showSidebar) {
        return null;
    }

    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex h-screen">
            <div
                className={`fixed inset-0 bg-[#1F1F22] bg-opacity-25 z-30 lg:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={toggleSidebar}
            ></div>

            <div
                className={`fixed flex flex-col justify-between top-0 left-0 bg-[#1F1F22] text-white w-64 z-40 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform lg:translate-x-0 lg:static lg:h-auto lg:flex-shrink-0 h-full overflow-y-auto`}
            >
                {/* Logo and close button for mobile */}
                <div className="p-4 flex justify-between flex-col">
                    <div className="flex items-center justify-center mt-5">
                        <img src={logo} alt="Logo" className="h-16 w-40" />
                        <button onClick={toggleSidebar} className="text-white lg:hidden">
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Sidebar menu items */}
                    <div className="mt-10">
                        <Link
                            to="/dashboard"
                            className={`flex items-center p-3 rounded ${isActive("/dashboard")
                                ? "bg-yellow-300 text-black"
                                : "text-gray-200 hover:bg-gray-700"
                                }`}
                        >
                            <AiOutlineDashboard className="mr-5 w-6 h-6" /> Dashboard
                        </Link>

                        <Link
                            to="/products"
                            className={`flex items-center p-3 rounded ${isActive("/products")
                                ? "bg-yellow-300 text-black"
                                : "text-gray-200 hover:bg-gray-700"
                                }`}
                        >
                            <AiOutlineShopping className="mr-5 w-6 h-6" /> Products
                        </Link>
                        <Link
                            to="/users"
                            className={`flex items-center p-3 rounded ${isActive("/users")
                                ? "bg-yellow-300 text-black"
                                : "text-gray-200 hover:bg-gray-700"
                                }`}
                        >
                            <AiOutlineUser className="mr-5 w-6 h-6" /> Users
                        </Link>
                        <Link
                            to="/news"
                            className={`flex items-center p-3 rounded ${isActive("/news")
                                ? "bg-yellow-300 text-black"
                                : "text-gray-200 hover:bg-gray-700"
                                }`}
                        >
                            <AiOutlineFileText className="mr-5 w-6 h-6" /> News
                        </Link>
                        <Link
                            to="/blogs"
                            className={`flex items-center p-3 rounded ${isActive("/blogs")
                                ? "bg-yellow-300 text-black"
                                : "text-gray-200 hover:bg-gray-700"
                                }`}
                        >
                            <AiOutlineCamera className="mr-5 w-6 h-6" /> Blog
                        </Link>
                        <Link
                            to="/gallery"
                            className={`flex items-center p-3 rounded ${isActive("/gallery")
                                ? "bg-yellow-300 text-black"
                                : "text-gray-200 hover:bg-gray-700"
                                }`}
                        >
                            <AiOutlineCamera className="mr-5 w-6 h-6" /> Gallery
                        </Link>
                        <Link
                            to="/notifications"
                            className={`flex items-center p-3 rounded ${isActive("/notifications")
                                ? "bg-yellow-300 text-black"
                                : "text-gray-200 hover:bg-gray-700"
                                }`}
                        >
                            <AiOutlineBell className="mr-5 w-6 h-6" /> Notifications
                        </Link>
                        <Link
                            to="/product-delivery"
                            className={`flex items-center p-3 rounded ${isActive("/product-delivery")
                                ? "bg-yellow-300 text-black"
                                : "text-gray-200 hover:bg-gray-700"
                                }`}
                        >
                            <AiOutlineShopping className="mr-5 w-6 h-6" /> Product Delivery
                        </Link>
                    </div>

                    <div className="mt-10">
                        <Link
                            to="/"
                            className="flex items-center p-3 text-gray-200 hover:bg-gray-700 rounded"
                            onClick={handleLogout}
                        >
                            <FaSignOutAlt className="mr-6 w-6 h-" /> Logout
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-[#1F1F22] h-12 py-4 px-2">
                <div className="lg:hidden">
                    <button onClick={toggleSidebar} className="text-white">
                        <FaBars />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
