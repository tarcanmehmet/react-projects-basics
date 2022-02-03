import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openedPage, setOpenedPage] = useState('');
    const [location, setLocation] = useState('');
    const openSubmenu = (link,left) => {
        setIsSubmenuOpen(true);
        setOpenedPage(link);
        setLocation(left);
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    return(<AppContext.Provider value={{sublinks, isSubmenuOpen, openSubmenu, closeSubmenu, openedPage, location, openSidebar, closeSidebar, isSidebarOpen}}>{children}</AppContext.Provider>)
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider};