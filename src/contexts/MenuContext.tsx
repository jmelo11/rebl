import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Context to manage the selected menu state
const MenuContext = createContext<any>(null);

export function MenuProvider({ children }: { children: ReactNode }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <MenuContext.Provider value={{ selectedIndex, setSelectedIndex }}>
            {children}
        </MenuContext.Provider>
    );
}

export const useMenu = () => useContext(MenuContext);
