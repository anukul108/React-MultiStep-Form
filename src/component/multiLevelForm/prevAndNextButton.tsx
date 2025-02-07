import { Button } from "@mui/material";

export const PrevAndNextButton = ({
  activeStep,
  nextStep,
  handleSubmit,
}: {
  activeStep: number;
  nextStep?: (step: number) => void;
  handleSubmit?: () => void;
}) => {
  return (
    <>
      <div style={{ marginTop: "20px" }}>
        {activeStep !== 0 && (
          <Button
            sx={{ marginRight: "20px" }}
            onClick={() => nextStep?.(activeStep - 1)}
            variant="contained" 
          >
            prev
          </Button>
        )}
        {activeStep !== 2 && (
          <Button type="submit" variant="contained">
            next
          </Button>
        )}
        {activeStep === 2 && (
          <Button onClick={handleSubmit} variant="contained">
            submit
          </Button>
        )}
      </div>
    </>
  );
};
