import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Define the list of menu items for reference inside the provider
const mainListItems = [
    { text: 'Inicio', route: '/' },
    { text: 'Nueva evaluación', route: '/stepper' },
    { text: 'Reportes', route: '/mydebtreport' },
];

const secondaryListItems = [
    { text: 'Feedback', route: '/feedback' },
];

interface MenuContextType {
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
    const location = useLocation(); // Get the current route path
    const [selectedIndex, setSelectedIndex] = useState<number>(-1); // Start with -1 to indicate "no selection"

    // Sync the selectedIndex with the current location path
    useEffect(() => {
        let currentIndex = mainListItems.findIndex(item => item.route === location.pathname);

        // If the route isn't found in mainListItems, check in secondaryListItems
        if (currentIndex === -1) {
            currentIndex = secondaryListItems.findIndex(item => item.route === location.pathname);
            if (currentIndex !== -1) {
                currentIndex += mainListItems.length; // Adjust index for secondary items
            }
        }

        // Only set selectedIndex if we found a matching route
        if (currentIndex !== -1) {
            setSelectedIndex(currentIndex);
        }
    }, [location.pathname]);

    return (
        <MenuContext.Provider value={{ selectedIndex, setSelectedIndex }}>
            {children}
        </MenuContext.Provider>
    );
}

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
};
