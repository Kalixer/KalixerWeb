import React, { createContext, useContext, useState} from "react";
import Footer from "@components/Footer.jsx";
import Header from "@components/Header.jsx";

const FooterPositionContext = createContext();

const Layout = ({children}) => {
    const [hideFooter, setHideFooter] = useState(false)
    const [footerPosition, setFooterPosition] = useState(null)
    
    return (
        <FooterPositionContext.Provider value={{footerPosition, setFooterPosition, setHideFooter}}>
            <div className="Layout">
                <Header />
                {children}
                {hideFooter ? null : <Footer/>}
            </div>
        </FooterPositionContext.Provider>
    );
}

export const useFooterContext = () => useContext(FooterPositionContext)
export default Layout;