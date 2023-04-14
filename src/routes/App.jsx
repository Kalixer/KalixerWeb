import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '@containers/Layout';
import Home from "@components/Home";
import NotFound from "@components/NotFound";

import '@styles/global.css'

const App = () => {
    return (
        <BrowserRouter basename="/Kalixer/">
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
					<Route path="*" element={<NotFound/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;