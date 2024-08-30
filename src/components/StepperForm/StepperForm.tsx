import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

interface StepConfig {
  label: string;
  component: React.FC<any>; // Use more specific typing if possible
}

const steps: StepConfig[] = [
  {
    label: 'Ingresa las caracteristicas iniciales de tu crédito',
    component: StepOne,
  },
  {
    label: 'Indicanos en que condiciones se encuentra tu crédito',
    component: StepTwo,
  },
  {
    label: 'Ingresa las codiciones de prepago',
    component: StepThree,
  },
];

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <step.component handleNext={handleNext} handleBack={handleBack} />
            </StepContent>
          </Step>
        ))}

      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
