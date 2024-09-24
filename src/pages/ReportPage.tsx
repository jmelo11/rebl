import { Stack } from '@mui/material';
import React from 'react'
import {
    createTheme,
    ThemeProvider,
    styled,
    PaletteMode,
} from '@mui/material/styles';
import getMPTheme from '../theme/getMPTheme';
import CssBaseline from '@mui/material/CssBaseline';
import { WebReport, WebReportProps } from '../components/Report/WebReport';
import BaseDashboard from '../components/BaseDashboard';

export default function ReportPage() {
    const [mode, _setMode] = React.useState<PaletteMode>('light');
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
        prodType: 'Loan',
        prodFam: 'Consumo',
        reportNumber: 123,
        interest: 100000,
        outstanding: 25000000,
        current_rate: 0.1025,
        estimated_rate: 0.0925,
        current_payment: 10000,
        estimated_payment: 9000,
        prepayment_penalty: 200000,
        currency_symbol: "$",
    }

    return (
        <ThemeProvider theme={BaseTheme}>
            <CssBaseline />
            <BaseContainer direction="column">
                {/* <Box sx={{ display: 'flex', width: '100%', p: 2, justifyContent: 'center' }}> */}
                <BaseDashboard>
                    <WebReport {...reportData} />
                </BaseDashboard>
            </BaseContainer>
        </ThemeProvider >
    )
}
