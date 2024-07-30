import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdClose } from "react-icons/md"; // Importing close icon
import Modal from "@mui/material/Modal";
import bucket from "../../assets/bucket.png";

const DescriptionBox = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                {/* Left side: Back button */}
                <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                    <button className="flex items-center p-2 rounded">
                        <FaArrowLeft className="text-gray-600" />
                        <span className="ml-2 text-gray-600">Back</span>
                    </button>
                </div>

                {/* Right side: Search input field */}
                <div className="flex items-center w-full sm:w-auto">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded px-4 py-2 w-full sm:w-64"
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row mt-4">
                {/* Left side: Bucket image */}
                <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
                    <img
                        src={bucket}
                        alt="Bucket"
                        className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto object-cover"
                    />
                </div>

                {/* Right side: Heading and description */}
                <div className="w-full md:w-1/2 pl-0 md:pl-4">
                    <h2 className="text-lg md:text-xl font-bold mb-2">
                        Bacillus Cereus Agar (MYP)
                    </h2>
                    <h2 className="text-lg md:text-xl font-bold mb-2">SKU: KM0075</h2>
                    <p className="text-gray-700 text-sm md:text-base">
                        Category: Dehydrated Culture Media.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base">
                        Alkaline peptone water is generally used as an enrichment medium in
                        the isolation of Vibrio spp. from faeces. This medium may also be
                        used for the enrichment of Vibrio spp. from food and water samples.
                        First developed by Shread, Donovan and Lee as an enrichment broth
                        for the growth of Aeromonas spp., Cruickshank showed that with a
                        higher pH the medium can be used for the enrichment of Vibrio spp.
                        The peptone is the source of the required nitrogen, carbon and
                        vitamins. Sodium chloride maintains the osmotic balance. The high pH
                        of the medium inhibits most enteric organisms for at least 24 hours.
                    </p>
                    <button
                        className="bg-[#5F1654] py-2 px-4 text-white mt-7"
                        onClick={handleOpen}
                    >
                        Enquire about Product
                    </button>
                </div>
            </div>

            {/* Modal */}
            <Modal open={open} onClose={handleClose}>
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white p-6 rounded-lg max-w-2xl w-full shadow-lg">
                        <button
                            className="absolute top-2 right-2 text-gray-600 bg-gray-300 rounded-full p-1 hover:text-gray-800"
                            onClick={handleClose}
                        >
                            <MdClose size={24} />
                        </button>
                        <h2 className="text-md  mt-8 font-bold mb-4">
                            Send Enquiry for Bacillus Cereus Agar (MYP)
                        </h2>
                        <form className="space-y-4">
                            <div className="flex justify-between gap-4">
                                <div className="w-full">
                                    <label className="block text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className=" bg-[#FAFAFA] rounded px-4 py-2 w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="block text-gray-700 mb-1">
                                        Company/Organisation
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Company/Organisation"
                                        className="bg-[#FAFAFA] rounded px-4 py-2 w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between gap-4">
                                <div className="w-full">
                                    <label className="block text-gray-700 mb-1">Address</label>
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        className="bg-[#FAFAFA] rounded px-4 py-2 w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="block text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="bg-[#FAFAFA] rounded px-4 py-2 w-full  "
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 justify-between gap-4">
                                <div className="w-full">
                                    <label className="block text-gray-700 mb-1">Phone No</label>
                                    <input
                                        type="tel"
                                        placeholder="Phone No"
                                        className=" bg-[#FAFAFA] rounded px-4 py-2 w-full "
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="block text-gray-700 mb-1">Country Code</label>
                                    <input
                                        type="text"
                                        placeholder="Country Code"
                                        className="bg-[#FAFAFA] rounded px-4 py-2 w-full  "
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="block text-gray-700 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="bg-[#FAFAFA] rounded px-4 py-2 w-full  "
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-1">Message</label>
                                <textarea
                                    placeholder="Subject message"
                                    className=" bg-[#FAFAFA] rounded px-4 py-2 w-full "
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-[#5F1654] py-2 px-4 text-white rounded"
                                >
                                    Send Enquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default DescriptionBox;
