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
import StepperForm from '../components/StepperForm/StepperForm';
import { LoanDataProvider } from '../contexts/LoanDataContext';
import SideMenu from '../components/SideMenu';
import TopBar from '../components/TopBar';
import BaseDashboard from '../components/BaseDashboard';

export default function StepperPage() {

    const [mode, setMode] = React.useState<PaletteMode>('light');
    // const StepperTheme = createTheme(getMPTheme(mode));
    const StepperTheme = createTheme(getMPTheme(mode));
    const StepperContainer = styled(Stack)(({ theme }) => ({
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

    return (
        <ThemeProvider theme={StepperTheme}>
            <CssBaseline />
            <StepperContainer direction="column">
                {/* <Divider />
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    p: 2,
                    justifyContent: 'center'
                }}> */}
                <LoanDataProvider>
                    {/* <SideMenu />
                        <Stack direction="column" spacing={2} sx={{ width: '100%', p: 2 }}>
                            <TopBar path={['Nueva evaluación']} /> */}
                    <BaseDashboard>
                        <Box sx={{
                            display: 'flex',
                            width: '100%',
                            p: 2,
                            justifyContent: 'center'
                        }} >
                            <StepperForm />
                        </Box>
                    </BaseDashboard>
                    {/* </Stack> */}
                </LoanDataProvider>
                {/* </Box> */}
            </StepperContainer>
        </ThemeProvider >
    )
}