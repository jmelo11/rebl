
// StepOne.tsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { useLoanData } from '../../contexts/LoanDataContext';


interface StepProps {
    handleNext: () => void;
}

const StepOne: React.FC<StepProps> = ({ handleNext }) => {
    const [prodFam, setProdFam] = React.useState<string>('');
    const [currency, setCurrency] = React.useState<string>('');
    const [amount, setAmount] = React.useState<string>('');
    const [rate, setRate] = React.useState<string>('');
    const [startDate, setStartDate] = React.useState<Dayjs | null>(null);
    const [paymentAmount, setPaymentAmount] = React.useState<string>('');
    const [months, setMonths] = React.useState<string>(''); // Empty string to start
    const [gracePeriod, setGracePeriod] = React.useState<string>(''); // Empty string to start

    const { loanData, updateLoanData } = useLoanData();

    const handleProdFamChange = (event: SelectChangeEvent) => {
        setProdFam(event.target.value as string);
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const amount = event.target.value;
        const formattedAmount = amount.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        setAmount(formattedAmount);
    };

    const handlePaymentAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const amount = event.target.value;
        const formattedAmount = amount.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        setPaymentAmount(formattedAmount);
    };

    const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = event.target;
        value = value.replace(/[^0-9,]/g, '');
        if (value.includes(',')) {
            const parts = value.split(',');
            parts[0] = parts[0].slice(0, 2);
            parts[1] = parts[1].slice(0, 2);
            value = parts.join(',');
        } else {
            value = value.slice(0, 2);
        }
        setRate(value);
    };

    const handleStartDateChange = (date: Dayjs | null) => {
        setStartDate(date);
    };

    const handleMonthsChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setMonths(event.target.value as string); // Store as number or empty string
    };

    const handleCurrencyChange = (event: SelectChangeEvent) => {
        setCurrency(event.target.value as string);
    };

    const handleGracePeriodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGracePeriod(event.target.value as string); // Store as number or empty string
    };

    const handleNextAndUpdateLoanData = () => {
        updateLoanData({
            productFamily: prodFam,
            currency,
            notional: parseFloat(amount.replace(/\./g, '')),
            rate: parseFloat(rate.replace(',', '.')) / 100,
            paymentAmount: parseFloat(paymentAmount.replace(/\./g, '')),
            startDate: startDate ? startDate.format('MM-DD-YYYY') : '',
            periodsInMonths: months as string,
            gracePeriods: gracePeriod as string,
        });
        handleNext();
        console.log(loanData);
    }

    return (
        <Box sx={{ mb: 2 }}>
            <Stack spacing={2} sx={{ pt: 1 }}>
                <Typography>
                    Para poder realizar la evaluación, necesitamos que estos datos para poder reconstruir los pagos asociados a tu crédito.
                </Typography>
                <Typography variant="h6">Datos del crédito</Typography>

                <FormControl fullWidth>
                    <InputLabel id="prod-fam-label">Familia de producto</InputLabel>
                    <Select
                        labelId="prod-fam-label"
                        value={prodFam}
                        id="prod-fam-select"
                        label="Familia de producto"
                        onChange={handleProdFamChange}
                    >
                        <MenuItem value={'Consumo'}>Consumo</MenuItem>
                        <MenuItem value={'Hipotecario'}>Hipotecario</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="currency-label">Moneda</InputLabel>
                    <Select
                        labelId="currency-label"
                        value={currency}
                        id="currency-select"
                        label="Moneda"
                        onChange={handleCurrencyChange}
                    >
                        <MenuItem value={'CLP'}>CLP</MenuItem>
                        <MenuItem value={'CLF'}>UF</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Monto</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">
                            {currency === 'CLP' ? '$' : 'UF'}
                        </InputAdornment>}
                        label="Monto"
                        value={amount}
                        inputProps={{ inputMode: 'numeric' }}
                        onChange={handleAmountChange}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-rate">Tasa Anual</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-rate"
                        endAdornment={<InputAdornment position="end">%</InputAdornment>}
                        label="Tasa Anual"
                        value={rate}
                        onChange={handleRateChange}
                        inputProps={{ inputMode: 'decimal' }}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-payment-amount">Cuota</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-payment-amount"
                        startAdornment={<InputAdornment position="start">{currency === 'CLP' ? '$' : 'UF'}</InputAdornment>}
                        label="Cuota"
                        value={paymentAmount}
                        inputProps={{ inputMode: 'numeric' }}
                        onChange={handlePaymentAmountChange}
                    />
                </FormControl>

                <Stack spacing={2} direction={'row'}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Fecha Inicio"
                                value={startDate}
                                onChange={handleStartDateChange}
                                format='DD/MM/YYYY'
                            />
                        </LocalizationProvider>
                    </FormControl>

                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField
                            id="outlined-adornment-months"
                            label="Meses"
                            value={months}
                            type="number"
                            onChange={handleMonthsChange}
                        />
                    </FormControl>
                </Stack>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-ncuotes">Periodos de gracia</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-ncuotes"
                        label="Periodos de gracia"
                        value={gracePeriod}
                        type="number"
                        inputProps={{ inputMode: 'numeric' }}
                        onChange={handleGracePeriodChange}
                    />
                </FormControl>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        variant="contained"
                        onClick={handleNextAndUpdateLoanData}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        Siguiente
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
};


export default StepOne;
