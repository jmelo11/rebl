import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'



type ReblLogoProps = {
    white?: boolean;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function ReblLogo({ white, variant }: ReblLogoProps) {
    return (
        <Box sx={{
            display: 'flex',
            pr: 1,
            pl: 1,
        }}>
            <Typography variant={variant || 'h1'}
                sx={{
                    fontFamily: 'Merriweather',
                    fontSize: '2rem',
                    fontWeight: 700,
                }}>
                <Link to="/" style={{ textDecoration: 'none', color: white ? 'white' : 'black' }}>
                    rebl
                </Link>
            </Typography>
        </Box>)
}
