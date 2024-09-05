import { Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import SideMenu from './SideMenu';
import TopBar from './TopBar';
import { MenuProvider } from '../contexts/MenuContext';
import { useLocation } from 'react-router-dom';

type BaseDashboardProps = {
    children: React.ReactNode;
};

export default function BaseDashboard({ children }: BaseDashboardProps) {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false); // Drawer state

    // Function to derive the path based on the current route
    const getPath = (pathname: string) => {
        switch (pathname) {
            case '/':
                return ['Inicio'];
            case '/stepper':
                return ['Nueva evaluación'];
            case '/mydebtreport':
                return ['Reportes'];
            case '/feedback':
                return ['Feedback'];
            default:
                return ['Inicio'];
        }
    };

    const path = getPath(location.pathname);

    // Handle drawer toggle
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <MenuProvider>
            <Box sx={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden' }}>
                {/* SideMenu is passed drawer control via props */}
                <SideMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

                {/* Content area */}
                <Stack direction="column" spacing={2} sx={{ flexGrow: 1, height: '100%', overflowY: 'auto' }}>
                    {/* Pass the handleDrawerToggle function to TopBar */}
                    <TopBar path={path} onMenuClick={handleDrawerToggle} />

                    {/* Content area */}
                    <Box sx={{ flexGrow: 1, p: 2}}>
                        {children}
                    </Box>
                </Stack>
            </Box>
        </MenuProvider>
    );
}
