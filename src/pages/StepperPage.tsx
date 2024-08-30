import { Box, Container, Divider, Stack } from '@mui/material';
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
import StepperForm from '../components/StepperForm';
import { FormDataProvider } from '../contexts/FormDataContext';

export default function StepperPage() {

    const [mode, setMode] = React.useState<PaletteMode>('light');
    // const StepperTheme = createTheme(getMPTheme(mode));
    const StepperTheme = createTheme(getMPTheme(mode));
    const StepperContainer = styled(Stack)(({ theme }) => ({
        height: 'auto',
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.up('sm')]: {
            height: '100dvh',
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
                { /* put a top bar with the logo, then in the center the stepper form */}
                <Box sx={{ display: 'flex', width: '100%', p: 2 }} >
                    <ReblLogo />
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', width: '100%', p: 2, justifyContent: 'center' }}>
                    <FormDataProvider>
                        <StepperForm />
                    </FormDataProvider>
                </Box>
            </StepperContainer>
        </ThemeProvider >
    )
}
