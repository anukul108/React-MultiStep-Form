import { Button } from "@mui/material";

export const PrevAndNextButton = ({
  activeStep,
  nextStep,
}: //   onSubmit,
{
  activeStep: number;
  nextStep: (step: number) => void;
  //   onSubmit: () => void;
}) => {
  return (
    <>
      <div style={{marginTop:'20px'}}>
        {activeStep !== 0 && (
          <Button sx={{marginRight: '20px'}} onClick={() => nextStep(activeStep - 1)} variant="contained">
            prev
          </Button>
        )}
        {activeStep !== 1 && <Button 
        type="submit" variant="contained">
          next
        </Button>}
        {activeStep === 1 && <Button 
        type="submit" variant="contained">
           submit
        </Button>}
      </div>
    </>
  );
};
