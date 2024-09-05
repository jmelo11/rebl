import { Box, Stack } from '@mui/material'
import React from 'react'
import SideMenu from './SideMenu'
import TopBar from './TopBar'

type BaseDashboardProps = {
    children: React.ReactNode
}

export default function BaseDashboard({ children }: BaseDashboardProps) {
    return (
        <Box sx={{ display: 'flex', width: '100%', p: 2, justifyContent: 'center' }}>
            <SideMenu />
            <Stack direction="column" spacing={2} sx={{ width: '100%', p: 2 }}>
                <TopBar path={['Reportes', 'Crédito N° 123']} />
                {children}
            </Stack>
        </Box>
    )
}
