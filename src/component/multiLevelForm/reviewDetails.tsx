import { Box, Typography } from "@mui/material";
import { Details } from "./details";
import { PrevAndNextButton } from "./prevAndNextButton";
import { useEffect } from "react";

export const ReviewDetails = ({
  handleSubmit,
  formDetails,
  activeStep,
  nextStep,
}: {
  handleSubmit: () => void;
  formDetails: any;
  activeStep: number;
  nextStep?: (step: number) => void;
}) => {
  useEffect(() => {}, []);
  return (
    <>
      <Box sx={{ width: "50%", m: "0 auto" }}>
        <Typography
          sx={{
            mb: "20px",
            fontSize: "20px",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          All Details
        </Typography>
        <Box>
          {Object.keys(formDetails).map((key) => {
            return (
              <Details
                activeStep={activeStep}
                key={key}
                data={formDetails[key]}
              />
            );
          })}
        </Box>
        <Box>
          <PrevAndNextButton
            handleSubmit={handleSubmit}
            activeStep={activeStep}
            nextStep={nextStep}
          />
        </Box>
      </Box>
    </>
  );
};
