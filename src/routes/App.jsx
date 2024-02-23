import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '@containers/Layout';
import Home from "@components/Home";
import NotFound from "@components/NotFound";
import AboutPage from "@pages/AboutPage";
import BlogPage from "@pages/BlogPage";
import HobbiesPage from "@pages/HobbiesPage";
import PortfolioPage from "@pages/PortfolioPage";
import { MyContextProvider } from "../hooks/useContext";
import BlogRead from "@pages/BlogRead";
import InDevelopment from "@pages/InDevelopment";

import '@styles/global.css'
import { BlogPageTest } from "@components/BlogPageTest";

const App = () => {
    return (
        <MyContextProvider>
        {/* <BrowserRouter basename="/Kalixer/"> */}
        <BrowserRouter basename="/">
            <Layout hideFooter={false}>
                <Routes>
                    <Route exact path="/" element={<AboutPage />} />
                    <Route exact path="/about" element={<Home />} />
                    <Route exact path="/blog" element={<BlogPage/>} />
                    {/* <Route exact path="/blog-test" element={<BlogRead/>} /> */}

                    {/* experimental */}
                    <Route exact path="/dev" element={<InDevelopment/>}/>

                    {/* These are the blogs */}
                    <Route exact path="/blogPageTest" element={<BlogPageTest />} />
                    <Route exact path="/blogRead" element={<BlogRead />} />
                    {/* These are the blogs */}

                    <Route exact path="/hobbies" element={<HobbiesPage />} />

                    <Route exact path="/portfolio" element={<InDevelopment />} />
					<Route path="*" element={<NotFound/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
        </MyContextProvider>
    );
}

export default App;