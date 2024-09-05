import React, { createContext, useState, useContext, ReactNode } from 'react';

interface MenuContextType {
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

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
