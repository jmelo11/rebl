
// StepOne.tsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, } from '@mui/material';

interface StepProps {
    handleNext: () => void;
    handleBack: () => void;
}

const StepThree: React.FC<StepProps> = ({ handleNext, handleBack }) => {
    const [prepaymentPenalty, setPrepaymentPenalty] = React.useState('0');
    const handlePenaltyChange = (event: SelectChangeEvent) => {
        setPrepaymentPenalty(event.target.value);
    }
    return (
        <Box sx={{ mb: 2 }}>
            <Stack spacing={2} sx={{ pt: 1 }}>
                <Typography>
                    Muchas entidades financieras colocan clausulas con penalidades al refinanciar. Es importante conocer esta información para evitar cobros no esperados.
                </Typography>

                <FormControl fullWidth>
                    <InputLabel id="penalty-label">Moneda</InputLabel>
                    <Select
                        labelId="penalty-label"
                        value={prepaymentPenalty}
                        id="currency-select"
                        label="Moneda"
                        onChange={handlePenaltyChange}
                    >
                        <MenuItem value={0}>No tiene comision de prepago</MenuItem>
                        <MenuItem value={1}>3 cuotas de intereses</MenuItem>
                        <MenuItem value={2}>No lo sé</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        variant="outlined"
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        Atras
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                        href='/mydebtreport'
                    >
                        Evaluar
                    </Button>
                </Box>
            </Stack>
        </Box >
    );
};

export default StepThree;
