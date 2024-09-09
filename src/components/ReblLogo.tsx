import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

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
            }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>rebl</Link>
            </Typography>
        </Box>)
}
