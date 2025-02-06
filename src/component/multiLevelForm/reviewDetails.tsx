import { Box, Typography } from "@mui/material";

export const ReviewDetails = ({
  formDetails,
  activeStep,
  nextStep,
}: {
  formDetails: any;
  activeStep: number;
  nextStep: (step: number) => void;
}) => {
  return (
    <>
      <Box>
        <Box>
          <Typography variant="h5" sx = {{mb:'20px'}}>Personal Details</Typography>
          {
               formDetails
          }
        </Box>
        <Box></Box>
      </Box>
    </>
  );
};
