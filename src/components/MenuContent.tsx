import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router hook for navigation
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

const mainListItems = [
    { text: 'Inicio', icon: <HomeRoundedIcon />, route: '/' },
    { text: 'Nueva evaluación', icon: <AssignmentRoundedIcon />, route: '/stepper' },
    { text: 'Reportes', icon: <AnalyticsRoundedIcon />, route: '/mydebtreport' },
];

const secondaryListItems = [
    { text: 'Feedback', icon: <HelpRoundedIcon />, route: '/feedback' },
];

export default function MenuContent() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();

    const handleListItemClick = (index: number, route: string) => {
        setSelectedIndex(index); // Update selected menu item
        navigate(route); // Navigate to the route
    };

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
                            selected={selectedIndex === index + mainListItems.length} // Highlight secondary item if selected
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
