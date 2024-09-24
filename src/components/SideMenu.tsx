import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuContent from './MenuContent';
import OptionsMenu from './OptionsMenu';
import ReblLogo from './ReblLogo';
import CardAlert from './Report/CardAlert';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
    width: drawerWidth,
    flexShrink: 0,
    boxSizing: 'border-box',
    [`& .${drawerClasses.paper}`]: {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
});

export default function SideMenu({ mobileOpen, handleDrawerToggle }: { mobileOpen: boolean, handleDrawerToggle: () => void }) {

    const drawerContent = (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%', // Ensure the drawer takes the full height
                overflowY: 'auto', // Allow scrolling if content exceeds the height
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    mt: '60px',
                    p: 1.5,
                }}
            >
                <ReblLogo />
            </Box>
            <Divider />
            <MenuContent />
            <CardAlert />
            <Stack
                direction="row"
                sx={{
                    p: 2,
                    gap: 1,
                    alignItems: 'center',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Avatar
                    sizes="small"
                    alt="Riley Carter"
                    src="/static/images/avatar/7.jpg"
                    sx={{ width: 36, height: 36 }}
                />
                <Box sx={{ mr: 'auto' }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
                        Riley Carter
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        riley@email.com
                    </Typography>
                </Box>
                <OptionsMenu />
            </Stack>
        </Box>
    );

    return (
        <>
            {/* Mobile Drawer */}
            <SwipeableDrawer
                container={typeof window !== 'undefined' ? document.body : undefined}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                onOpen={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Keeps drawer in DOM for better performance
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    [`& .${drawerClasses.paper}`]: {
                        width: drawerWidth,
                        height: '100%', // Ensure the drawer takes full height on small screens
                        overflowY: 'auto', // Scroll if content exceeds the screen height
                    },
                }}
            >
                {drawerContent}
            </SwipeableDrawer>

            {/* Permanent Drawer for larger screens */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' },
                    [`& .${drawerClasses.paper}`]: {
                        backgroundColor: 'background.paper',
                    },
                }}
                open
            >
                {drawerContent}
            </Drawer>
        </>
    );
}
