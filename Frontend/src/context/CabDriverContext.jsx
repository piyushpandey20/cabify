import { createContext, useState, useContext } from 'react';

export const CabDriverDataContext = createContext();

const CabDriverContext = ({ children }) => {
    const [ cabDriver, setCabDriver ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const updateCabDriver = (cabDriverData) => {
        setCabDriver(cabDriverData);
    };

    const value = {
        cabDriver,
        setCabDriver,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCabDriver
    };

    return (
        <CabDriverDataContext.Provider value={value}>
            {children}
        </CabDriverDataContext.Provider>
    );
};

export default CabDriverContext;