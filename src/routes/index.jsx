import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/home";
import Product from "../pages/product";
import ProductDetails from "../pages/product-details";
import AboutUs from "../pages/about-us";
import Blogs from "../pages/blogs";
import ContactUs from "../pages/contact-us";
import Shop from "../pages/shop";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    
                    <Route path="/product-details/:id" element={<ProductDetails />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/blog" element={<Blogs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/shop" element={<Shop />} />

                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default AppRoutes;
