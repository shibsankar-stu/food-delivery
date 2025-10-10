import { createContext } from "react";

const storeContext = createContext(null);

const StoreContextProvider = (props) => {

    const contextValue = {

    }
    return (
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )
}

export default StoreContextProvider