import { useState } from 'react';
import { FaBars, FaTimes, FaSearch, FaShoppingCart } from 'react-icons/fa';

import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (href) => {
        setActiveLink(href);
        setIsOpen(false); // Close the menu after clicking a link on mobile
    };

    const getLinkClasses = (href) => {
        return activeLink === href ? 'font-bold text-[#9E1F66]' : 'text-[#262626]';
    };

    return (
        <nav className="bg-[#F5E9F0CC] text-white px-4 py-2">
            <div className='container mx-auto'>
                <div className="hidden md:flex justify-between items-center text-[#262626] py-2">
                    <div className="flex items-center space-x-2">
                        <span className='text-[13px]'>Sample@gmail.com / +043 89 76 4576</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className='text-[13px]'>OPEN FROM 9AM TO 5PM - CLOSED ON WEEKENDS</span>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#262626] hidden md:block"></div>
            </div>

            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-48 h-12" />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden lg:flex space-x-8">
                    <Link to="/" className={getLinkClasses('/')} onClick={() => handleLinkClick('/')}>Home</Link>
                    <Link to="/about" className={getLinkClasses('/about')} onClick={() => handleLinkClick('/about')}>About Us</Link>
                    <Link to="/product" className={getLinkClasses('/product')} onClick={() => handleLinkClick('/product')}>Shop</Link>
                    <Link to="/blog" className={getLinkClasses('/blog')} onClick={() => handleLinkClick('/blog')}>Blog</Link>
                    <Link to="/contact" className={getLinkClasses('/contact')} onClick={() => handleLinkClick('/contact')}>Contact Us</Link>
                </div>

                {/* Buttons */}
                <div className="hidden lg:flex space-x-5 items-center">
                    <div className="flex items-center text-[#262626] space-x-2">
                        <span>Search</span>
                        <FaSearch />
                    </div>
                    <div className="flex items-center text-[#262626] space-x-2">
                        <span>Cart</span>
                        <FaShoppingCart />
                    </div>
                </div>

                {/* Hamburger Icon */}
                <div className="lg:hidden text-2xl" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-14 left-0 w-full bg-[#9b5d81cc] text-white flex flex-col space-y-2 p-4">
                    <Link to="/" className={`block py-2 ${getLinkClasses('/')}`} onClick={() => handleLinkClick('/')}>Home</Link>
                    <Link to="/about" className={`block py-2 ${getLinkClasses('/about')}`} onClick={() => handleLinkClick('/about')}>About Us</Link>
                    <Link to="/product" className={`block py-2 ${getLinkClasses('/product')}`} onClick={() => handleLinkClick('/product')}>Shop</Link>
                    <Link to="/blog" className={`block py-2 ${getLinkClasses('/blog')}`} onClick={() => handleLinkClick('/blog')}>Blog</Link>
                    <Link to="/contact" className={`block py-2 ${getLinkClasses('/contact')}`} onClick={() => handleLinkClick('/contact')}>Contact Us</Link>
                    <div className="flex items-center text-[#262626] space-x-1">
                        <span>Search</span>
                        <FaSearch />
                    </div>
                    <div className="flex items-center text-[#262626] space-x-1">
                        <span>Cart</span>
                        <FaShoppingCart />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
