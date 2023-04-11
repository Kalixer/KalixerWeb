import React from "react";
import Footer from "@components/Footer.jsx";
import Header from "@components/Header.jsx"

const Layout = ({children}) => {
    return (
        <div className="Layout">
            <Header />
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;