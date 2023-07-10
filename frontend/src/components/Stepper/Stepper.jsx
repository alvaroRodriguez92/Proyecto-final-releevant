import { useState, useCallback, ReactNode } from "react";
import {
  Box,
  Stepper as StepperMUI,
  Step,
  StepLabel,
  Button,
} from "@mui/material";



export default function Stepper({ steps, renderStep }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }, [setActiveStep]);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, [setActiveStep]);

  return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
      <StepperMUI sx={{mt:"32px"}} activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </StepperMUI>
      <Box my={4}>{renderStep(activeStep)}</Box>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent:"center", p: 3, m:2}}>
        <Button
        variant="contained" 
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 4 }}
        >
          Anterior
        </Button>

        {activeStep < steps.length - 1 ? (
          <Button variant="contained" onClick={handleNext}>Siguiente</Button>
        ) : null}

        {activeStep === steps.length - 1 ? (
          <Button variant="contained" type="submit">Enviar</Button>
        ) : null}
      </Box>
    </Box>
  );
}