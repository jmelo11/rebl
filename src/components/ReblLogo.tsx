import { Box, Typography } from '@mui/material'
import React from 'react'

export default function ReblLogo() {
    return (
        <Box sx={{
            display: 'flex',
            pr: 1,
            pl: 1,
        }}>
            <Typography variant="h2" sx={{
                fontFamily: 'Merriweather',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'black',
            }}>
                rebl
            </Typography>
        </Box>)
}
