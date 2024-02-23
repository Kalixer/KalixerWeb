import React, {useState} from "react";

const MyContext = React.createContext();

function MyContextProvider({children}) {
    const [blogIndex, setBlogIndex] = useState(0)

    return(
        <MyContext.Provider value={{
            blogIndex, 
            setBlogIndex,
            }}>

            {children}
        </MyContext.Provider>
    )
}

export { MyContext, MyContextProvider}