import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

type TopBarProps = {
  path: string[];
  onMenuClick: () => void; // Function to handle opening the drawer
};

export default function TopBar({ path, onMenuClick }: TopBarProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        width: '100%',
        boxSizing: 'border-box',
        backgroundColor: 'background.paper',
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Breadcrumbs */}
        <Stack direction={'row'} spacing={1}>
          {path.map((item, index) => (
            <Typography key={index} variant="body2" sx={{ color: 'text.secondary' }}>
              {item}
              {index < path.length - 1 ? ' > ' : ''}
            </Typography>
          ))}
        </Stack>
      </Stack>

      {/* Menu Button for small screens */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={onMenuClick}
        size="small"
        sx={{ display: { xs: 'block', md: 'none' } }} // Only show the button on small screens (xs, sm)
      >
        <MenuIcon />
      </IconButton>

      <Divider />
    </Box>
  );
}
