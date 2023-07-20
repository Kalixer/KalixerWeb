import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '@containers/Layout';
import Home from "@components/Home";
import NotFound from "@components/NotFound";
import AboutPage from "@pages/AboutPage";
import BlogPage from "@pages/BlogPage";
import BooksPage from "@pages/BooksPage";
import PortfolioPage from "@pages/PortfolioPage";

import BlogTest from "@components/BlogTest";

import '@styles/global.css'

const App = () => {
    return (
        // <BrowserRouter>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/blog" element={<BlogPage/>} />
                    <Route path="/books" element={<BooksPage/>} />
                    <Route path="/portfolio" element={<PortfolioPage/>} />
					<Route path="*" element={<NotFound/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;