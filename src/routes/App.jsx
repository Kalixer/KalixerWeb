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
        <BrowserRouter basename="/Kalixer/">
            <Layout>
                <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/blog" element={<BlogPage/>} />
                    {/* <Route exact path="/blog-test" element={<BlogTest/>} /> */}
                    <Route exact path="/books" element={<BooksPage/>} />
                    <Route exact path="/portfolio" element={<PortfolioPage/>} />
					<Route path="*" element={<NotFound/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;