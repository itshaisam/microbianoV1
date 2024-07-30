import React from 'react';

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className="bg-[#FAFAFA] text-white py-8">
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <img src={logo} alt="Logo" className="w-48 h-12 mb-4" />
                        <p className="text-[#716B66] text-sm px-3 text-center md:text-left">
                            Safecare Prepared plates and broth tested in accordance with CLSI M22 A3- Quality assurance for Commercially Prepared Microbiological Culture Media – second edition.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-lg font-bold mb-2 text-black">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline text-[#716B66]">Home</a></li>
                            <li><a href="#" className="hover:underline text-[#716B66]">About Us</a></li>
                            <li><a href="#" className="hover:underline text-[#716B66]">Product</a></li>
                            <li><a href="#" className="hover:underline text-[#716B66]">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-lg font-bold mb-2 text-black">News Letter</h2>
                        <p className="text-center md:text-left text-[#716B66] mb-4">
                            Over 750+ people have subscribed.
                        </p>
                        <div className="flex flex-col md:flex-row items-center ">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 border border-gray-300 rounded-md text-black"
                            />
                            <button
                                className="bg-[#9E1F66] text-white px-4 py-2 rounded-md"
                            >
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-lg font-bold mb-4 text-black">Social Links</h1>
                        <div className="flex space-x-4">
                            <a href="#" className="text-[#716B66] hover:text-gray-600"><FaFacebookF size={24} /></a>
                            <a href="#" className="text-[#716B66] hover:text-gray-600"><FaTwitter size={24} /></a>
                            <a href="#" className="text-[#716B66] hover:text-gray-600"><FaInstagram size={24} /></a>
                            <a href="#" className="text-[#716B66] hover:text-gray-600"><FaYoutube size={24} /></a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-lg font-bold mb-4 text-black">Key Features</h1>
                        <p className="text-sm text-[#716B66]  mb-2">All our PPM products are quality assured and manufacturing facilities adhere to Good Manufacturing Practice Guidelines.</p>
                        <p className="text-sm text-[#716B66]  mb-2">We produce our PPM products using high quality dehydrated culture media/ supplements and automated production lines to get consistent performance.</p>
                        <p className="text-sm text-[#716B66]  mb-2">Safecare follows the stringent standards of Good Manufacturing Practices (GMP) defined and approved by Ministry of Health UAE.</p>
                        <p className="text-sm text-[#716B66]  mb-2">Class 10,000 validated clean area</p>
                        <p className="text-sm text-[#716B66]  mb-2">Fully automated 6 line production lines.</p>
                        <p className="text-sm text-[#716B66]  mb-2">Fully automatic online quality inspection composed of camera vision system for poured plates for capturing the images of the dishes and High speed expulsion station for extracting the not suitable dishes.</p>
                        <p className="text-sm text-[#716B66]  mb-2">Warehouse logistics function and warehouse located in Abu Dhabi, Dubai, Sharjah Emirates with Refrigerated vehicle facilitating the timeframe delivery.</p>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-lg font-bold mb-4 text-black">Accreditation</h1>
                        <p className="text-sm text-[#716B66] mb-2">ISO 9001: 2015 Quality Management System</p>
                        <p className="text-sm text-[#716B66] mb-2">ISO 13485: 2016 The development, manufacture and supply of ready-to-use culture media.</p>
                        <p className="text-sm text-[#716B66] mb-2">CE (European Conformity)</p>
                        <p className="text-sm text-[#716B66] mb-2">International Good Manufacturing Practices (GMP) which is certified by Ministry of Health UAE.</p>
                        <p className="text-sm text-[#716B66] mb-2">MOH License</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
