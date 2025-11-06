import { createContext, useContext, useState, useEffect } from "react";


// Istance del context
const GlobalContext = createContext();

// creazione del provider
function GlobalProvider({ children }) {
    // var gestione di stato
    const [isLoading, setIsLoading] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                isLoading,
                setIsLoading,
            }}>
            {children}
        </GlobalContext.Provider>
    );
}

// Hook personalizzato per il context
function useGlobal() {
    const context = useContext(GlobalContext);
    return context;
}

// Esport 

export { GlobalProvider, useGlobal }
