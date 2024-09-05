import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useMenu } from '../contexts/MenuContext';

const mainListItems = [
    { text: 'Inicio', icon: <HomeRoundedIcon />, route: '/' },
    { text: 'Nueva evaluación', icon: <AssignmentRoundedIcon />, route: '/stepper' },
    { text: 'Reportes', icon: <AnalyticsRoundedIcon />, route: '/mydebtreport' },
];

const secondaryListItems = [
    { text: 'Feedback', icon: <HelpRoundedIcon />, route: '/feedback' },
];

export default function MenuContent() {
    const { selectedIndex, setSelectedIndex } = useMenu();
    const navigate = useNavigate();
    const location = useLocation();

    // Handle click on menu item and navigation
    const handleListItemClick = (index: number, route: string) => {
        setSelectedIndex(index);
        navigate(route);
    };

    // Set the selectedIndex based on the current route path
    React.useEffect(() => {
        const currentIndex = mainListItems.findIndex(item => item.route === location.pathname);
        if (currentIndex >= 0) {
            setSelectedIndex(currentIndex);
        }
    }, [location.pathname, setSelectedIndex]);

    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            {/* Main List Items */}
            <List dense>
                {mainListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={selectedIndex === index} // Highlight the selected item
                            onClick={() => handleListItemClick(index, item.route)} // Handle item click
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            {/* Secondary List Items */}
            <List dense>
                {secondaryListItems.map((item, index) => (
                    <ListItem key={index + mainListItems.length} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={selectedIndex === index + mainListItems.length} // Highlight secondary item
                            onClick={() => handleListItemClick(index + mainListItems.length, item.route)} // Handle item click
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}
