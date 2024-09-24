
// StepOne.tsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material';

interface StepProps {
    handleNext: () => void;
    handleBack: () => void;
}

const StepTwo: React.FC<StepProps> = ({ handleNext, handleBack }) => {

    const [hasLatePayments, setHasLatePayments] = React.useState(false);
    const [latePayments, setLatePayments] = React.useState<number | string>('');


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value === 'true';
        setHasLatePayments(value);

        // If the user selects "No," reset latePayments to null
        if (!value) {
            setLatePayments('');
        }
    };

    const handleLatePayments = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLatePayments(Number(event.target.value));
    };

    return (
        <Box sx={{ mb: 2 }}>
            <Stack spacing={2} sx={{ pt: 1 }}>
                <Typography>
                    Para realizar los calculos con presicion, necesitamos saber si tienes cuotas atrasadas. No te preocupes, no compartiremos esta información con nadie.
                </Typography>

                <FormControl>
                    <FormLabel id="late-payments-radio-buttons-group">¿Tienes cuotas pendientes?</FormLabel>
                    <RadioGroup
                        aria-labelledby="late-payments-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={hasLatePayments}
                        onChange={handleChange}
                        sx={{ flexDirection: 'row' }}

                    >
                        <FormControlLabel value="false" control={<Radio />} label="No" />
                        <FormControlLabel value="true" control={<Radio />} label="Si" />
                    </RadioGroup>
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                        id="outlined-adornment-ncuotes"
                        label="Cuotas pendientes"
                        value={latePayments}
                        type="number"
                        disabled={!hasLatePayments}
                        onChange={handleLatePayments}
                    />
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
                    >
                        Siguiente
                    </Button>
                </Box>
            </Stack>
        </Box >
    );
};

export default StepTwo;
