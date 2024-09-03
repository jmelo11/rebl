import { Box, Divider, Stack } from '@mui/material';
import React from 'react'
import {
    createTheme,
    ThemeProvider,
    styled,
    PaletteMode,
} from '@mui/material/styles';
import getMPTheme from '../theme/getMPTheme';
import CssBaseline from '@mui/material/CssBaseline';
import ReblLogo from '../components/ReblLogo';
import { WebReport, WebReportProps } from '../components/Report/WebReport';
import SideMenu from '../components/SideMenu';

export default function ReportPage() {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    // const StepperTheme = createTheme(getMPTheme(mode));
    const BaseTheme = createTheme(getMPTheme(mode));
    const BaseContainer = styled(Stack)(({ theme }) => ({
        height: 'auto',
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.up('xs')]: {
            height: '100vh',
        },
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    }));

    const reportData: WebReportProps = {
        interest: 1_000_00,
        outstanding: 25_000_000,
        current_rate: 10.25,
        estimated_rate: 9.25,
        current_payment: 10_000,
        estimated_payment: 9_000,
        prepayment_penalty: 200_000,
        currency_symbol: "$",
    }

    return (
        <ThemeProvider theme={BaseTheme}>
            <CssBaseline />
            <BaseContainer direction="column">
                <Box sx={{ display: 'flex', width: '100%', p: 2, justifyContent: 'center' }}>
                    <SideMenu />
                    <WebReport {...reportData} />
                </Box>
            </BaseContainer>
        </ThemeProvider >
    )
}
