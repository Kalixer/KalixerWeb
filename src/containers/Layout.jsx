import React, { createContext, useContext, useState} from "react";
import Footer from "@components/Footer.jsx";
import Header from "@components/Header.jsx";

const FooterPositionContext = createContext();
const showFooter = createContext(true)

const Layout = ({children, showFooter}) => {
    const [footerPosition, setFooterPosition] = useState(null)
    console.log(showFooter)
    
    return (
        <FooterPositionContext.Provider value={{footerPosition, setFooterPosition}}>
            <div className="Layout">
                <Header />
                {children}
                {/* Consume the state from the context */}
                {!showFooter && <Footer/>}
            </div>
        </FooterPositionContext.Provider>
    );
}

export const useFooterPosition = () => useContext(FooterPositionContext)
export default Layout;