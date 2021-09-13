import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenSidebar = () => {
        setIsSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };    

    return <AppContext.Provider value={{
        isModalOpen,
        isSidebarOpen,
        handleOpenSidebar,
        handleCloseSidebar,
        handleOpenModal,
        handleCloseModal
    }}>{children}</AppContext.Provider>
}

//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}



export {
    AppContext,
    AppProvider
};