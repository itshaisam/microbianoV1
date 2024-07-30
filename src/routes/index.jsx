import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/home";
import Product from "../pages/product";
import ProductDetails from "../pages/product-details";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    
                    <Route path="/product-details/:id" element={<ProductDetails />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default AppRoutes;
