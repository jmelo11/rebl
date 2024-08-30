
// StepOne.tsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Stack } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';


interface StepProps {
    handleNext: () => void;
}

const StepOne: React.FC<StepProps> = ({ handleNext }) => {

    const [prodFam, setProdFam] = React.useState('0');
    const [currency, setCurrency] = React.useState('0');
    const [amount, setAmount] = React.useState('1.000.000');
    const [rate, setRate] = React.useState('3,1');
    const [startDate, setStartDate] = React.useState<Date | null>(null);
    const [endDate, setEndDate] = React.useState<Date | null>(null);
    const [gracePeriod, setGracePeriod] = React.useState<number | null>(null);

    const handleProdFamChange = (event: SelectChangeEvent) => {
        setProdFam(event.target.value as string);
    }

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // validate and format amount with . as thousands separator and , as decimal separator, no negative values
        const amount = event.target.value;
        const formattedAmount = amount.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        setAmount(formattedAmount);
    }

    const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = event.target;

        // Remove any non-numeric characters except for the comma
        value = value.replace(/[^0-9,]/g, '');

        // Ensure there is exactly one comma in the input
        if (value.includes(',')) {
            const parts = value.split(',');
            parts[0] = parts[0].slice(0, 2); // Keep only the first two digits before the comma
            parts[1] = parts[1].slice(0, 2); // Keep only up to four digits after the comma
            value = parts.join(',');
        } else {
            value = value.slice(0, 2); // Only allow two digits if there is no comma yet
        }

        // Update the state with the formatted value
        setRate(value);
    };

    const handleStartDateChange = (date: Dayjs | null) => {

    }

    const handleEndDateChange = (date: Dayjs | null) => {

    }

    const handleCurrencyChange = (event: SelectChangeEvent) => {
        setCurrency(event.target.value as string);
    }

    const handleGracePeriodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setGracePeriod(value ? parseInt(value) : null);
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
                        <MenuItem value={0}>Consumo</MenuItem>
                        <MenuItem value={1}>Hipotecario</MenuItem>
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
                        <MenuItem value={0}>CLP</MenuItem>
                        <MenuItem value={1}>UF</MenuItem>
                    </Select>
                </FormControl>


                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Monto</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Monto"
                        value={amount}
                        inputProps={{ inputMode: 'numeric' }}
                        onChange={handleAmountChange}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-rate">Tasa</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-rate"
                        endAdornment={<InputAdornment position="end">%</InputAdornment>}
                        label="Tasa"
                        value={rate}
                        onChange={handleRateChange}
                        inputProps={{ inputMode: 'decimal' }}
                    />
                </FormControl>

                <Stack spacing={2} direction={'row'}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Fecha Inicio"
                                format='DD/MM/YYYY' />
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Fecha Fin"
                                format='DD/MM/YYYY'
                                onChange={handleEndDateChange}
                            />
                        </LocalizationProvider>
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
                        variant="text"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        ¿Tienes dudas sobre estos datos?
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        Siguiente
                    </Button>
                </Box>
            </Stack>
        </Box >
    );
};

export default StepOne;
