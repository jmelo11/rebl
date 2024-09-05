import { Box, Divider, Stack, Typography } from '@mui/material'
import { useTheme } from '@emotion/react';

type TopBarProps = {
  path: string[];
}

export default function TopBar({ path }: TopBarProps) {

  return (
    <Box>
      <Stack direction='row' spacing={1} sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
      }}>
        <Stack direction={'row'} spacing={1}>
          {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            
            {path}
          </Typography>
          <Typography variant='body2'>
            
            &gt;
          </Typography>
          <Typography variant='subtitle2'> */}
          {path.map((item, index) => (
            <Typography key={index} variant="body2" sx={{ color: 'text.secondary' }}>
              {item}
              {index < path.length - 1 ? ' > ' : ''}
            </Typography>
          ))}
          {/* </Typography> */}
        </Stack>

      </Stack>
      <Divider />
    </Box >
  )
}
