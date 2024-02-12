import React, { createContext, useContext, useState} from "react";
import Footer from "@components/Footer.jsx";
import Header from "@components/Header.jsx";

const FooterPositionContext = createContext();

const Layout = ({children}) => {
    const [hideFooter, setHideFooter] = useState(false)
    
    return (
        <FooterPositionContext.Provider value={{setHideFooter}}>
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