import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '@containers/Layout';
import Home from "@components/Home";
import NotFound from "@components/NotFound";
import AboutPage from "@pages/AboutPage";
import BlogPage from "@pages/BlogPage";
import BooksPage from "@pages/BooksPage";
import PortfolioPage from "@pages/PortfolioPage";
import Blog1 from "@blogs/Blog1";
import Blog2 from "@blogs/Blog2";
import Blog3 from "@blogs/Blog3";
import Blog4 from "@blogs/Blog4";
import Blog5 from "@blogs/Blog5";
import Blog6 from "@blogs/Blog6";

import BlogTest from "@pages/BlogTest";

import '@styles/global.css'

const App = () => {
    return (
        <BrowserRouter basename="/Kalixer/">
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/blog" element={<BlogPage/>} />
                    <Route exact path="/blog-test" element={<BlogTest/>} />

                    {/* These are the blogs */}
                    <Route exact path="/blog1" element={<Blog1 />} />
                    <Route exact path="/blog2" element={<Blog2 />} />
                    <Route exact path="/blog3" element={<Blog3 />} />
                    <Route exact path="/blog4" element={<Blog4 />} />
                    <Route exact path="/blog5" element={<Blog5 />} />
                    <Route exact path="/blog6" element={<Blog6 />} />
                    {/* These are the blogs */}

                    <Route exact path="/books" element={<BooksPage/>} />
                    <Route exact path="/portfolio" element={<PortfolioPage/>} />
					<Route path="*" element={<NotFound/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;